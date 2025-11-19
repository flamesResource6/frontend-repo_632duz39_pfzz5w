export default function Footer() {
  return (
    <footer id="about" className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Digital Giants — Publishing bold ideas.
          </div>
          <div className="text-slate-500 text-sm">
            Contact: hello@digitalgiants.pub
          </div>
        </div>
      </div>
    </footer>
  )
}
