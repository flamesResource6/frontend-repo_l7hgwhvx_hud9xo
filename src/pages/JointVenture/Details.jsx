import { Link, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import TopBarActions from '../../components/TopBarActions'

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="font-medium mt-0.5">{value || '-'}{''}</p>
    </div>
  )
}

export default function JVDetails() {
  const { id } = useParams()

  const sample = {
    date: '2025-01-12',
    khata: id,
    plot: 'P-100',
    area: '2.4 Acre',
    mouza: 'Mouza Example',
    tahsil: 'Tahsil One',
    district: 'Khordha',
    state: 'Odisha',
    sharing: '60% / 40%',
    downPayment: '₹ 10,00,000',
    owners: 'Rakesh Kumar, Sunita Das',
    poaNo: 'POA-203',
    daNo: 'DA-1003',
  }

  const actions = (
    <TopBarActions tasks={2} notifications={1} />
  )

  return (
    <Layout rightHeader={{ title: 'Joint Venture Land - Details', actions }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link to="/joint-venture" className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">Back to list</Link>
          <button className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">Download report</button>
          <Link to={`/joint-venture/${id}/edit`} className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500">Edit entry</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
          <h3 className="font-semibold text-slate-800">Core Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Date" value={sample.date} />
            <Field label="Khata No" value={sample.khata} />
            <Field label="Plot No" value={sample.plot} />
            <Field label="Area" value={sample.area} />
            <Field label="Mouza" value={sample.mouza} />
            <Field label="Tahsil" value={sample.tahsil} />
            <Field label="District" value={sample.district} />
            <Field label="State" value={sample.state} />
            <Field label="Sharing %" value={sample.sharing} />
            <Field label="Down Payment Details" value={sample.downPayment} />
            <Field label="Land Owners Name + KYC" value={sample.owners} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-semibold mb-3">POA No + PDF viewer</h3>
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              PDF Preview Placeholder (POA No: {sample.poaNo})
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-semibold mb-3">DA No + PDF viewer</h3>
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              PDF Preview Placeholder (DA No: {sample.daNo})
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-semibold mb-3">Other relevant documents (PDF)</h3>
            <div className="aspect-video bg-slate-50 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400">
              PDF Preview Placeholder
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
