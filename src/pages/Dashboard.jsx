import Layout from '../components/Layout'
import TopBarActions from '../components/TopBarActions'

export default function Dashboard() {
  return (
    <Layout rightHeader={{ title: 'Dashboard', actions: <TopBarActions tasks={3} notifications={2} /> }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500">Total JV Lands</p>
          <p className="text-3xl font-semibold mt-2">24</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500">Company Owned</p>
          <p className="text-3xl font-semibold mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500">Pending Approvals</p>
          <p className="text-3xl font-semibold mt-2">5</p>
        </div>
      </div>
    </Layout>
  )
}
