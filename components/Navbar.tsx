
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { Logo } from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'الخدمات', path: '/services' },
    { name: 'الأسعار', path: '/pricing' },
    { name: 'أعمالنا', path: '/portfolio' },
    { name: 'المدونة', path: '/blog' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-xl border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" aria-label="EhabGM Home">
              <Logo className="h-12" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-gray-700 hover:text-blue-600 font-bold transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="https://wa.me/201022679250" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-100"
            >
              <Icons.MessageCircle size={20} />
              اطلب خدمتك
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-bold text-gray-700 border-b border-gray-100 last:border-0 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a 
                href="https://wa.me/201022679250"
                className="w-full bg-blue-600 text-white block text-center py-4 rounded-xl font-bold"
              >
                تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
