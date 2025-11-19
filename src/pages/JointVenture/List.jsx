import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import TopBarActions from '../../components/TopBarActions'
import Table from '../../components/Table'

export default function JVList() {
  const columns = useMemo(() => [
    { key: 'date', label: 'Date' },
    { key: 'khata', label: 'Khata No' },
    { key: 'plot', label: 'Plot No' },
    { key: 'area', label: 'Area' },
    { key: 'owner', label: 'Owner Name' },
    { key: 'districtState', label: 'District / State' },
    { key: 'status', label: 'Status' },
  ], [])

  const data = [
    { date: '2025-01-12', khata: 'KH-0012', plot: 'P-100', area: '2.4 Acre', owner: 'Rakesh Kumar', districtState: 'Khordha / Odisha', status: 'Pending' },
    { date: '2025-02-04', khata: 'KH-0020', plot: 'P-220', area: '1.1 Acre', owner: 'Sunita Das', districtState: 'Cuttack / Odisha', status: 'Approved' },
  ]

  return (
    <Layout rightHeader={{ title: 'Joint Venture Land', actions: <TopBarActions tasks={4} notifications={1} /> }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">All Entries</h2>
        <Link to="/joint-venture/new" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-sm transition-colors">Add New Joint Venture Land Entry</Link>
      </div>
      <Table columns={columns} data={data} actions={(row) => (
        <div className="flex items-center justify-end gap-3">
          <Link to={`/joint-venture/${row.khata}`} className="text-indigo-600 hover:underline">View</Link>
          <Link to={`/joint-venture/${row.khata}/edit`} className="text-slate-600 hover:underline">Edit</Link>
        </div>
      )} />
    </Layout>
  )
}
