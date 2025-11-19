import Layout from '../../components/Layout'
import TopBarActions from '../../components/TopBarActions'
import PdfUpload from '../../components/PdfUpload'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )
}

export default function COForm() {
  const actions = (
    <TopBarActions tasks={0} notifications={2} />
  )

  return (
    <Layout rightHeader={{ title: 'Add Company Owned Land Entry', actions }}>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Date">
            <input type="date" className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" />
          </Field>
          <Field label="Khata No">
            <input className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Enter Khata No" />
          </Field>
          <Field label="Plot No">
            <input className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Enter Plot No" />
          </Field>
          <Field label="Area">
            <input className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Area" />
          </Field>
          <Field label="Mouza">
            <input className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Mouza" />
          </Field>
          <Field label="Tahsil">
            <input className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Tahsil" />
          </Field>
          <Field label="District">
            <input className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="District" />
          </Field>
          <Field label="State">
            <input className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="State" />
          </Field>
        </div>

        <div className="my-6 border-t border-slate-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PdfUpload label="Sale Deed PDF (Upload)" />
          <PdfUpload label="ROR PDF (Upload)" />
          <PdfUpload label="Previous Documents Upload" multiple />
          <PdfUpload label="Legal Opinion PDF (Upload)" />
          <PdfUpload label="Encumbrance Certificate (EC)" />
          <PdfUpload label="Other Relevant Documents" multiple />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-400">Submit</button>
          <a href="/company-owned" className="px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">Cancel</a>
        </div>
      </div>
    </Layout>
  )
}
