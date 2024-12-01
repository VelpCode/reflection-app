'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function JournalEntry() {
  const [entry, setEntry] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the entry to a database
    console.log('Journal entry submitted:', entry)
    setEntry('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Journal Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Write your thoughts here..."
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows={5}
          />
          <Button type="submit">Save Entry</Button>
        </form>
      </CardContent>
    </Card>
  )
}

