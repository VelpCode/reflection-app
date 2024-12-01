'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface Goal {
  id: number
  title: string
  progress: number
}

export function GoalTracker() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, title: "Learn a new language", progress: 30 },
    { id: 2, title: "Read 12 books this year", progress: 50 },
    { id: 3, title: "Run a marathon", progress: 10 },
  ])

  const updateProgress = (id: number, increment: number) => {
    setGoals(prev => prev.map(goal =>
      goal.id === id
        ? { ...goal, progress: Math.min(100, Math.max(0, goal.progress + increment)) }
        : goal
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Goals Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {goals.map(goal => (
            <li key={goal.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span>{goal.title}</span>
                <span>{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} className="w-full" />
              <div className="flex justify-end space-x-2">
                <Button size="sm" onClick={() => updateProgress(goal.id, -10)}>-</Button>
                <Button size="sm" onClick={() => updateProgress(goal.id, 10)}>+</Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

