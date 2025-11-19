import { NavLink } from 'react-router-dom'
import { LayoutGrid, Layers, Building2, CheckSquare, LogIn, LogOut } from 'lucide-react'

const navItemClasses = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
    isActive
      ? 'bg-indigo-50 text-indigo-600 shadow-sm'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-slate-200 flex flex-col">
      <div className="h-16 flex items-center gap-3 px-5 border-b border-slate-200">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 shadow-inner" />
        <div className="flex flex-col">
          <span className="font-semibold text-slate-800 leading-tight">Land Manager</span>
          <span className="text-xs text-slate-500">by Flames</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <NavLink to="/" className={navItemClasses} end>
          <LayoutGrid size={18} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/joint-venture" className={navItemClasses}>
          <Layers size={18} />
          <span>Joint Venture Land</span>
        </NavLink>
        <NavLink to="/company-owned" className={navItemClasses}>
          <Building2 size={18} />
          <span>Company Owned Land</span>
        </NavLink>
        <NavLink to="/todos" className={navItemClasses}>
          <CheckSquare size={18} />
          <span>Things To Do</span>
        </NavLink>
      </nav>
      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
          <LogIn size={16} />
          <span>Login</span>
        </button>
        <button className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
