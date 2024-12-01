'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smile, Meh, Frown } from 'lucide-react'

export function MoodTracker() {
  const [mood, setMood] = useState<'happy' | 'neutral' | 'sad' | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Mood</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around">
          <Button
            variant={mood === 'happy' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setMood('happy')}
          >
            <Smile className="h-6 w-6" />
          </Button>
          <Button
            variant={mood === 'neutral' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setMood('neutral')}
          >
            <Meh className="h-6 w-6" />
          </Button>
          <Button
            variant={mood === 'sad' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setMood('sad')}
          >
            <Frown className="h-6 w-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

