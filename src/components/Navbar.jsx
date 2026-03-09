import { Link } from 'react-router-dom';

// 1. Odbieramy darkMode i setDarkMode jako propsy
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 transition-colors duration-300 
      bg-white/80 dark:bg-slate-900/80 backdrop-blur-md 
      border-b border-gray-100 dark:border-slate-800">
      
      <div className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl group-hover:rotate-12 transition-transform">🐾</span>
          <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
            CIEPŁA <span className="text-orange-500">ŁAPA</span>
          </span>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600 dark:text-gray-300">
          <Link to="/" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            Nasze Zwierzaki
          </Link>
          <button className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer">
            Jak pomóc?
          </button>
          
          {/* PRZEŁĄCZNIK TRYBU (NOWOŚĆ) */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 hover:ring-2 ring-orange-500 transition-all text-xl"
            title={darkMode ? "Zmień na tryb jasny" : "Zmień na tryb ciemny"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold 
            hover:bg-orange-600 transition-all shadow-md 
            shadow-orange-100 dark:shadow-none">
            Wesprzyj nas
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;