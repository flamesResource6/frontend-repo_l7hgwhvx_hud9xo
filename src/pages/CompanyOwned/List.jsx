import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import TopBarActions from '../../components/TopBarActions'
import Table from '../../components/Table'

export default function COList() {
  const columns = useMemo(() => [
    { key: 'date', label: 'Date' },
    { key: 'khata', label: 'Khata No' },
    { key: 'plot', label: 'Plot No' },
    { key: 'area', label: 'Area' },
    { key: 'owner', label: 'Owner / Office Name' },
    { key: 'districtState', label: 'District / State' },
    { key: 'status', label: 'Status' },
  ], [])

  const data = [
    { date: '2025-01-02', khata: 'CO-0099', plot: 'P-23', area: '0.8 Acre', owner: 'Corporate Office', districtState: 'Bhubaneswar / Odisha', status: 'Verified' },
  ]

  return (
    <Layout rightHeader={{ title: 'Company Owned Land', actions: <TopBarActions tasks={1} notifications={3} /> }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">All Entries</h2>
        <Link to="/company-owned/new" className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg shadow-sm transition-colors">Add New Company Owned Land Entry</Link>
      </div>
      <Table columns={columns} data={data} actions={(row) => (
        <div className="flex items-center justify-end gap-3">
          <Link to={`/company-owned/${row.khata}`} className="text-sky-600 hover:underline">View</Link>
          <Link to={`/company-owned/${row.khata}/edit`} className="text-slate-600 hover:underline">Edit</Link>
        </div>
      )} />
    </Layout>
  )
}
