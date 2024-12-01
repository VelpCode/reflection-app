import { MoodTracker } from './components/mood-tracker'
import { HabitTracker } from './components/habit-tracker'
import { GoalTracker } from './components/goal-tracker'
import { JournalEntry } from './components/journal-entry'
import { PersonalInsights } from './components/personal-insights'

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Self-Reflection Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MoodTracker />
        <HabitTracker />
        <GoalTracker />
        <JournalEntry />
        <PersonalInsights />
      </div>
    </main>
  )
}

