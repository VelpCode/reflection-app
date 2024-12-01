import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PersonalInsights() {
  const insights = [
    "You tend to be more productive in the mornings.",
    "Your mood improves after exercise.",
    "You've been consistent with your reading habit.",
    "Your goal progress has been steady this month.",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

