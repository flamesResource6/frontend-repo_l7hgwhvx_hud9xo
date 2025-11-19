import { FileText, Upload } from 'lucide-react'

export default function PdfUpload({ label, multiple = false }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="mt-2 flex items-center gap-3 bg-white rounded-lg border border-slate-200 p-3 hover:border-indigo-300 transition-colors cursor-pointer">
        <div className="w-10 h-10 rounded-md bg-slate-100 text-slate-600 flex items-center justify-center">
          <FileText size={18} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-slate-600">{multiple ? 'Upload PDFs' : 'Upload PDF'}</p>
          <p className="text-xs text-slate-400">Drag & drop or click to choose file</p>
        </div>
        <div className="text-indigo-600"><Upload size={18} /></div>
        <input type="file" accept="application/pdf" multiple={multiple} className="hidden" />
      </div>
    </label>
  )
}
