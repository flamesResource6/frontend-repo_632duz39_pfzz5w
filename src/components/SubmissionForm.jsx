import { useState } from 'react'

export default function SubmissionForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)

    const payload = {
      author_name: form.get('author_name'),
      email: form.get('email'),
      book_title: form.get('book_title'),
      synopsis: form.get('synopsis'),
      genre: form.get('genre') || undefined,
      word_count: form.get('word_count') ? Number(form.get('word_count')) : undefined,
      manuscript_url: form.get('manuscript_url') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to submit')

      setStatus({ ok: true, message: 'Thanks! We\'ll review your submission shortly.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="submit" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Submit your manuscript</h2>
          <p className="text-slate-600 mt-1">We welcome completed works and strong proposals.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-slate-200">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Your name</label>
              <input name="author_name" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Website or manuscript link</label>
              <input type="url" name="manuscript_url" placeholder="https://" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Book title</label>
              <input name="book_title" required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Primary genre</label>
              <input name="genre" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Estimated word count</label>
              <input type="number" min="1000" name="word_count" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Synopsis</label>
            <textarea name="synopsis" required rows={5} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell us about your book..." />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <button disabled={loading} className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition disabled:opacity-60">
              {loading ? 'Submitting...' : 'Submit manuscript'}
            </button>
            {status && (
              <div className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
