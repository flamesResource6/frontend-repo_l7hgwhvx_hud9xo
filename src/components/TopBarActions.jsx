import { Bell, CheckSquare, Search } from 'lucide-react'
import { useState } from 'react'

export default function TopBarActions({ tasks = 0, notifications = 0, onSearch }) {
  const [query, setQuery] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <div className="flex items-center gap-3">
      <button className="relative px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-colors">
        <span className="sr-only">Tasks</span>
        <CheckSquare size={18} className="text-slate-600" />
        {tasks > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] bg-indigo-500 text-white px-1.5 py-0.5 rounded-full shadow">{tasks}</span>
        )}
      </button>
      <button className="relative px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-colors">
        <span className="sr-only">Notifications</span>
        <Bell size={18} className="text-slate-600" />
        {notifications > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] bg-sky-500 text-white px-1.5 py-0.5 rounded-full shadow">{notifications}</span>
        )}
      </button>

      <form onSubmit={submit} className="ml-2">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 w-[340px] shadow-sm focus-within:border-indigo-300">
          <Search size={18} className="text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search records..."
            className="w-full outline-none text-sm placeholder:text-slate-400"
          />
        </div>
      </form>
    </div>
  )
}
