
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icons } from './Icons';
import { Logo } from './Logo';
import { SEO_KEYWORDS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'الخدمات', path: '/services' },
    { name: 'المدونة', path: '/blog' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" aria-label="EhabGM Home">
              <Logo className="h-10 md:h-12" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-gray-700 hover:text-blue-600 font-bold transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Icons.Globe size={24} />
            </button>
            <div className="hidden lg:block">
              <a 
                href="https://wa.me/201022679250" 
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                <Icons.MessageCircle size={20} />
                اطلب خدمتك
              </a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-700 p-2"
              >
                {isOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {showSearch && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-2xl p-4 border-b animate-in fade-in duration-300">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex gap-2">
            <input 
              type="text" 
              placeholder="ابحث عن: تصميم شعار، إعلان ممول، برمجة مواقع..."
              className="w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className="bg-blue-600 text-white px-8 rounded-2xl font-bold">بحث</button>
          </form>
          <div className="max-w-3xl mx-auto mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-400 font-bold ml-2">مقترحات:</span>
            {SEO_KEYWORDS.slice(0, 5).map(kw => (
              <button 
                key={kw.term}
                onClick={() => { setSearchQuery(kw.term); navigate(`/search?q=${kw.term}`); setShowSearch(false); }}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 hover:bg-blue-100 transition-colors"
              >
                {kw.term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute w-full shadow-lg">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-bold text-gray-700 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
