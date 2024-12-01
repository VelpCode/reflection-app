'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const habits = [
  "Meditate for 10 minutes",
  "Read for 30 minutes",
  "Exercise for 30 minutes",
  "Write in journal",
  "Drink 8 glasses of water"
]

export function HabitTracker() {
  const [completedHabits, setCompletedHabits] = useState<string[]>([])

  const toggleHabit = (habit: string) => {
    setCompletedHabits(prev =>
      prev.includes(habit)
        ? prev.filter(h => h !== habit)
        : [...prev, habit]
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Habits</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {habits.map(habit => (
            <li key={habit} className="flex items-center space-x-2">
              <Checkbox
                id={habit}
                checked={completedHabits.includes(habit)}
                onCheckedChange={() => toggleHabit(habit)}
              />
              <label htmlFor={habit}>{habit}</label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

