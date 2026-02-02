import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Product', href: '/product' },
    { label: 'Docs', href: '/docs' },
    { label: 'Foundation', href: '/foundation' },
    // { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="glass-card px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">AlloX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm transition-colors relative group ${
                  location.pathname === item.href
                    ? 'text-black font-medium'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/app" className="btn-primary">
              Launch App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-card p-6 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-sm text-gray-700 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/app"
              className="btn-primary block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Launch App
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
