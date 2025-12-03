import Dashboard from '@/components/Dashboard'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

