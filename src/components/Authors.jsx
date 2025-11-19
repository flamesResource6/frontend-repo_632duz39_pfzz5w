import { useEffect, useState } from 'react'

export default function Authors() {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/authors`)
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setAuthors(data)
      } catch (e) {
        setAuthors([])
      }
    }
    fetchAuthors()
  }, [])

  return (
    <section id="authors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our authors</h2>
          <p className="text-slate-600 mt-1">The minds behind the books</p>
        </div>

        {authors.length === 0 ? (
          <div className="text-slate-500">Authors will appear here once added.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {authors.map((a, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-5 hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  {a.avatar_url ? (
                    <img src={a.avatar_url} alt={a.name} className="w-14 h-14 rounded-full object-cover" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-200 to-fuchsia-200" />
                  )}
                  <div>
                    <div className="font-semibold text-slate-900">{a.name}</div>
                    {a.website && (
                      <a href={a.website} className="text-indigo-600 text-sm hover:underline" target="_blank" rel="noreferrer">Website</a>
                    )}
                  </div>
                </div>
                {a.bio && (
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3">{a.bio}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
