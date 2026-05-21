import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Apple, Sun, Moon } from 'lucide-react';

export default function Header({ cartCount, onCartClick, darkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#shop' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary dark:bg-zinc-950/95 shadow-lg py-3 border-b border-transparent dark:border-zinc-900'
          : 'bg-black/20 backdrop-blur-[2px] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white group">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Apple className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              abc<span className="text-accent">de</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-accent font-medium transition-colors duration-200 text-sm tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dark Mode Switch */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-white hover:text-accent transition-colors duration-200 focus:outline-none rounded-lg hover:bg-white/5"
              aria-label="Toggle theme mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

            {/* Cart Icon Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-accent transition-colors duration-200 focus:outline-none rounded-lg hover:bg-white/5"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-accent transition-colors duration-200 focus:outline-none rounded-lg hover:bg-white/5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 dark:bg-zinc-950/95 border-t border-white/10 dark:border-zinc-900 backdrop-blur-md transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/90 hover:text-accent font-medium py-2 text-base border-b border-white/5 dark:border-zinc-900 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
