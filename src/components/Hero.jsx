export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-indigo-50 via-white to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-200/50 rounded-full blur-3xl" />
      <div className="absolute top-32 -left-24 w-72 h-72 bg-fuchsia-200/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Publish bold ideas. Inspire the world.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Digital Giants is a modern publishing house for visionaries, builders, and storytellers. We help authors craft, publish, and amplify books that shape the future.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#submit" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">
                Submit a manuscript
              </a>
              <a href="#books" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-100 text-slate-800 font-semibold hover:bg-slate-200 transition">
                Explore books
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 p-1 shadow-xl">
              <div className="w-full h-full rounded-[14px] bg-white grid grid-cols-3 gap-2 p-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-slate-100" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl shadow p-3">
              <div className="text-xs text-slate-500">Trusted by 500k+ readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
