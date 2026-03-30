import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-slate-900 via-gray-900 to-black text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">📖 Geeta Padho</h2>
          <p className="text-sm text-gray-400">
            Learn and explore the timeless wisdom of the Bhagavad Gita.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <Link to="/">
              <li className="hover:text-white cursor-pointer">Home</li>
            </Link>
            <Link to={`/chapters`}>
              <li className="hover:text-white cursor-pointer">Chapters</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-white cursor-pointer">About</li>
            </Link>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-medium mb-3">Connect</h3>
          <p className="text-sm text-gray-400 mb-2">
            Made with ❤️ for learning & devotion
          </p>
          <div className="flex gap-3 text-sm">
            <a
              href="https://github.com/dipeshxhy/gita-padho"
              target="_blank"
              className="hover:text-amber-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dipeshchy"
              target="_blank"
              className="hover:text-amber-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Geeta Padho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
