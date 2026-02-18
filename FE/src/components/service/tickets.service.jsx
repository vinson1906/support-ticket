import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../constant";



export const useGetTicketData = () => {
    return useQuery({
        queryKey: ['get-ticket'],
        queryFn: async () => {
            const res = await axios.get(`${API_URL}/tickets/`)
            return res.data
        }
    })
}

export const useCreateTicketData = () => {

    const queryClient = new QueryClient()

    return useMutation({
        mutationKey: ['get-ticket'],
        mutationFn: async (data) => {
            const res = await axios.post(`${API_URL}/tickets/`, data)
            return res.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-ticket'] })
        }
    })
}

export const useGetFilters = (filters) => {
    return useQuery({
        queryKey: ['filter-tickets',filters],
        queryFn: async () => {
            const res = await axios.get(`${API_URL}/tickets/`)
            return res.data
        }
    })
}