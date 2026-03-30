const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-black text-white px-4 py-10">
      <img
        src="/chapter-3.jpg"
        className="w-full max-w-6xl mx-auto object-cover mb-8 rounded-lg shadow-lg"
        alt="Geeta Padho"
      />
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-6">
          📖 About Geeta Padho
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-center mb-8 leading-relaxed">
          Geeta Padho is a simple and modern web application designed to help
          users explore the timeless wisdom of the Bhagavad Gita in an easy and
          interactive way.
        </p>

        {/* Sanskrit Quote */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8 text-center">
          <p className="text-lg md:text-xl text-amber-300 mb-2">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
          </p>
          <p className="text-sm text-gray-400">
            Focus on your actions, not on the results.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">
              📚 Chapter-wise Learning
            </h3>
            <p className="text-sm text-gray-400">
              Explore all 18 chapters of the Bhagavad Gita with structured
              navigation.
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">
              🕉️ Sanskrit Verses
            </h3>
            <p className="text-sm text-gray-400">
              Read original Sanskrit shlokas with clear formatting.
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">
              🌐 Clean UI
            </h3>
            <p className="text-sm text-gray-400">
              Minimal and modern interface focused on readability and peace.
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">
              🚀 Built for Learning
            </h3>
            <p className="text-sm text-gray-400">
              Created as a developer project to practice full-stack skills and
              UI design.
            </p>
          </div>
        </div>

        {/* Developer Section */}
        <div className="text-center border-t border-gray-800 pt-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">
            👨‍💻 Developer
          </h3>
          <p className="text-gray-400 text-sm">
            Built with ❤️ by Dipesh Chaudhary
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
