import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-linear-to-br from-[#0f172a] p-4 via-[#1e293b] to-[#020617] w-screen text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Branding */}
        <div className="flex items-center gap-2">
          <span className="text-amber-400 text-lg">🕉️</span>
          <h1 className="text-lg md:text-xl font-semibold">जय श्री कृष्ण 🙏</h1>
        </div>

        <div className="flex items-center gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link to="/chapters" className="hover:text-amber-400 transition">
            Chapters
          </Link>
          <Link
            to={`https://x.com/dipesschaudhary`}
            target="_blank"
            className="hover:text-amber-400 transition"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
