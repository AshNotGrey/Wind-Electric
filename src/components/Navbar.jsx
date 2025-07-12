import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Sun, Moon, User, Search, Wind } from "lucide-react";
import { useCartStore, useThemeStore, useAuthStore } from "../store";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const { getItemCount } = useCartStore();
  const { isDark, toggleTheme } = useThemeStore();
  const { isAuthenticated, user, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-secondary-900/95 backdrop-blur-custom shadow-medium border-b border-secondary-200 dark:border-secondary-700"
          : "bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2 group'>
            <div className='p-2 bg-primary-600 rounded-lg group-hover:bg-primary-700 transition-colors'>
              <Wind className='h-6 w-6 text-white' />
            </div>
            <span className='text-xl font-bold text-secondary-900 dark:text-white'>
              Wind Electric
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}>
                {link.label}
                {isActive(link.to) && (
                  <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full' />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className='hidden md:flex items-center space-x-4'>
            {/* Search */}
            <button className='p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'>
              <Search className='h-5 w-5' />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className='p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'>
              {isDark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
            </button>

            {/* Cart */}
            <Link
              to='/cart'
              className='relative p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'>
              <ShoppingCart className='h-5 w-5' />
              {getItemCount() > 0 && (
                <span className='absolute -top-1 -right-1 h-5 w-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center font-medium'>
                  {getItemCount()}
                </span>
              )}
            </Link>

            {/* Auth */}
            {isAuthenticated ? (
              <div className='flex items-center space-x-2'>
                <span className='text-sm text-secondary-700 dark:text-secondary-300'>
                  {user?.name || "User"}
                </span>
                <button onClick={logout} className='btn-secondary text-sm'>
                  Logout
                </button>
              </div>
            ) : (
              <Link to='/login' className='btn-outline text-sm'>
                <User className='h-4 w-4 mr-2' />
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            <button
              onClick={toggleTheme}
              className='p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'>
              {isDark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
            </button>

            <Link
              to='/cart'
              className='relative p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'>
              <ShoppingCart className='h-5 w-5' />
              {getItemCount() > 0 && (
                <span className='absolute -top-1 -right-1 h-5 w-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center font-medium'>
                  {getItemCount()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'>
              {isMobileMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                      : "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800"
                  }`}>
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth */}
              <div className='pt-4 border-t border-secondary-200 dark:border-secondary-700'>
                {isAuthenticated ? (
                  <div className='px-3 py-2'>
                    <span className='text-sm text-secondary-700 dark:text-secondary-300'>
                      {user?.name || "User"}
                    </span>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className='mt-2 w-full btn-secondary text-sm'>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to='/login'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='block px-3 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
