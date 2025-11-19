import { useEffect, useState } from 'react'

export default function FeaturedBooks() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/books`)
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setBooks(data.filter(b => b.featured))
      } catch (e) {
        setBooks([])
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return (
    <section id="books" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured books</h2>
            <p className="text-slate-600 mt-1">A selection from our catalog</p>
          </div>
        </div>

        {loading ? (
          <div className="text-slate-500">Loading featured books...</div>
        ) : books.length === 0 ? (
          <div className="text-slate-500">No featured books yet. Check back soon.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, i) => (
              <article key={i} className="group rounded-xl border border-slate-200 hover:shadow-lg transition overflow-hidden">
                {book.cover_url ? (
                  <img src={book.cover_url} alt={book.title} className="w-full h-56 object-cover" />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-indigo-100 to-fuchsia-100" />
                )}
                <div className="p-5">
                  <div className="text-sm text-indigo-600 font-medium">
                    {book.genres && book.genres.length ? book.genres.join(' • ') : 'Book'}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{book.title}</h3>
                  {book.subtitle && (
                    <p className="text-slate-600 text-sm">{book.subtitle}</p>
                  )}
                  <p className="mt-3 text-sm text-slate-600 line-clamp-3">{book.description}</p>
                  <div className="mt-4 text-sm text-slate-500">By {book.author}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
