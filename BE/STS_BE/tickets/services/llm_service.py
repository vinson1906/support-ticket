import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

PROMPT = """
You are a support ticket classifier.

Given a ticket description, classify it into:
Category: billing, technical, account, or general
Priority: low, medium, high, critical

Respond strictly in JSON format:
{
  "category": "...",
  "priority": "..."
}
"""

def classify_ticket(description):

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": PROMPT},
                {"role": "user", "content": description}
            ]
        )

        content = response.choices[0].message.content
        return eval(content)

    except Exception:
        # Graceful fallback
        return {
            "suggested_category": "general",
            "suggested_priority": "low"
        }
