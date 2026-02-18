from rest_framework import viewsets
from django.db.models import Count, Avg
from django.utils.timezone import now
from datetime import timedelta
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Ticket
from .serializers import TicketSerializer
from .services.llm_service import classify_ticket


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

    def get_queryset(self):
        queryset = super().get_queryset()

        category = self.request.query_params.get('category')
        priority = self.request.query_params.get('priority')
        status = self.request.query_params.get('status')
        search = self.request.query_params.get('search')

        if category:
            queryset = queryset.filter(category=category)
        if priority:
            queryset = queryset.filter(priority=priority)
        if status:
            queryset = queryset.filter(status=status)
        if search:
            queryset = queryset.filter(
                title__icontains=search
            ) | queryset.filter(
                description__icontains=search
            )

        return queryset

    @action(detail=False, methods=['get'])
    def stats(self, request):

        total = Ticket.objects.count()
        open_count = Ticket.objects.filter(status='open').count()

        priority_breakdown = dict(
            Ticket.objects.values('priority')
            .annotate(count=Count('id'))
            .values_list('priority', 'count')
        )

        category_breakdown = dict(
            Ticket.objects.values('category')
            .annotate(count=Count('id'))
            .values_list('category', 'count')
        )

        avg_per_day = (
            Ticket.objects
            .extra(select={'day': "date(created_at)"})
            .values('day')
            .annotate(count=Count('id'))
            .aggregate(avg=Avg('count'))['avg'] or 0
        )

        return Response({
            "total_tickets": total,
            "open_tickets": open_count,
            "avg_tickets_per_day": round(avg_per_day, 2),
            "priority_breakdown": priority_breakdown,
            "category_breakdown": category_breakdown
        })

    @action(detail=False, methods=['post'])
    def classify(self, request):
        description = request.data.get('description')

        if not description:
            return Response({"error": "Description required"}, status=400)

        result = classify_ticket(description)

        return Response(result)
