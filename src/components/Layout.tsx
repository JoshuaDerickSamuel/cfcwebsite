import { Link, Outlet, useLocation } from 'react-router-dom';
import { siteContent } from '../data/content';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Registration', path: '/registration' },
    { name: 'Program', path: '/program' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdf9ee]/80 dark:bg-[#1c1c15]/80 backdrop-blur-xl transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-2xl font-serif italic text-[#154212] dark:text-[#fdf9ee] font-bold tracking-tight">
            {siteContent.global.conferenceName}
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-['Noto_Serif'] font-bold tracking-tight transition-colors duration-300 ${
                    isActive
                      ? 'text-[#154212] dark:text-[#fdf9ee] border-b-2 border-[#154212] pb-1'
                      : 'text-[#1c1c15]/70 dark:text-[#fdf9ee]/70 hover:text-[#2d5a27]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-[#154212] cursor-pointer hover:scale-95 transition-transform">
              search
            </span>
            <button className="md:hidden material-symbols-outlined text-[#154212]">
              menu
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-6 md:px-12 bg-[#f7f3e8] dark:bg-[#1c1c15] text-[#154212] dark:text-[#fdf9ee]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto font-['Inter'] text-sm leading-relaxed">
          <div className="md:col-span-1">
            <div className="text-xl font-serif text-[#154212] dark:text-[#fdf9ee] mb-4 font-bold">
              {siteContent.global.conferenceName}
            </div>
            <p className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 max-w-xs">
              Connecting branches across the globe to the True Vine since 1994. Join us for an unforgettable spiritual journey.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#154212] mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">Home</Link>
              <Link to="/about" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">About</Link>
              <Link to="/registration" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">Registration</Link>
              <Link to="/program" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">Program</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#154212] mb-6">Community</h4>
            <div className="flex flex-col gap-4">
              <Link to="/resources" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">Resources</Link>
              <a href="#" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">Privacy Policy</a>
              <a href="#" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">Support</a>
              <a href="#" className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60 hover:text-[#154212] underline decoration-dotted transition-all">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#154212] mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              <p className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60">{siteContent.global.address}</p>
              <p className="text-[#1c1c15]/60 dark:text-[#fdf9ee]/60">{siteContent.global.contactEmail}</p>
              <div className="flex gap-4 mt-2">
                <span className="material-symbols-outlined text-xl">public</span>
                <span className="material-symbols-outlined text-xl">share</span>
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-[#1c1c15]/10 text-center text-[#1c1c15]/40 dark:text-[#fdf9ee]/40">
          © 2026 ACFI. Abiding in the Vine.
        </div>
      </footer>
    </div>
  );
}
