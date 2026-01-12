import { useState } from 'react';

function Header({ siteName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gradient">
              {siteName || 'Portfolio'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                Home
              </a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                About
              </a>
              <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                Projects
              </a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-1">
            <a href="#home" className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              Home
            </a>
            <a href="#about" className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              About
            </a>
            <a href="#projects" className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              Projects
            </a>
            <a href="#contact" className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
