import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded bg-gradient-to-br from-indigo-600 to-fuchsia-500"></span>
          <span className="font-semibold text-slate-800 text-lg">Digital Giants</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#books" className="hover:text-indigo-600 transition">Books</a>
          <a href="#authors" className="hover:text-indigo-600 transition">Authors</a>
          <a href="#submit" className="hover:text-indigo-600 transition">Submit</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-100">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
