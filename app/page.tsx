import { MoodTracker } from './components/mood-tracker'
import { HabitTracker } from './components/habit-tracker'
import { GoalTracker } from './components/goal-tracker'
import { JournalEntry } from './components/journal-entry'
import { PersonalInsights } from './components/personal-insights'
import { Navbar } from './components/navbar'
import { Calendar } from './components/calander'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Self-Reflection Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MoodTracker />
              <HabitTracker />
              <GoalTracker />
              <JournalEntry />
              <PersonalInsights />
            </div>
          </div>
          <div className="lg:col-span-1">
            <Calendar />
          </div>
        </div>
      </main>
    </div>
  )
}

