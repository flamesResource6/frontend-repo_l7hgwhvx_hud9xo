import { Link, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import TopBarActions from '../../components/TopBarActions'

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  )
}

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="font-medium mt-0.5">{value || '-'}{''}</p>
    </div>
  )
}

export default function CODetails() {
  const { id } = useParams()
  const sample = {
    date: '2025-01-02',
    khata: id,
    plot: 'P-23',
    area: '0.8 Acre',
    mouza: 'City Center',
    tahsil: 'Zone A',
    district: 'Bhubaneswar',
    state: 'Odisha',
  }

  const actions = (
    <TopBarActions tasks={1} notifications={1} />
  )

  return (
    <Layout rightHeader={{ title: 'Company Owned Land - Details', actions }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link to="/company-owned" className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">Back</Link>
          <button className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">Download Reports</button>
          <Link to={`/company-owned/${id}/edit`} className="px-3 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-400">Edit</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Core Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Date" value={sample.date} />
            <Field label="Khata No" value={sample.khata} />
            <Field label="Plot No" value={sample.plot} />
            <Field label="Area" value={sample.area} />
            <Field label="Mouza" value={sample.mouza} />
            <Field label="Tahsil" value={sample.tahsil} />
            <Field label="District" value={sample.district} />
            <Field label="State" value={sample.state} />
          </div>
        </Card>

        <div className="space-y-6">
          <Card title="Sale Deed PDF">
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              PDF Preview Placeholder
            </div>
          </Card>
          <Card title="ROR PDF">
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              PDF Preview Placeholder
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Previous Documents (upload list)">
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              Uploads Placeholder
            </div>
          </Card>
          <Card title="Legal Opinion PDF">
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              PDF Preview Placeholder
            </div>
          </Card>
          <Card title="Encumbrance Certificate (EC)">
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              PDF Preview Placeholder
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
