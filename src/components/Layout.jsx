import Sidebar from './Sidebar'

export default function Layout({ children, rightHeader }) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800">
      <Sidebar />
      <div className="ml-72">
        <header className="h-16 bg-white/80 backdrop-blur border-b border-slate-200 flex items-center px-6 sticky top-0 z-20">
          <div className="text-lg font-semibold">{rightHeader?.title || ''}</div>
          <div className="ml-auto flex items-center gap-3">
            {rightHeader?.actions}
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
