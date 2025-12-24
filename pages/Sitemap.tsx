
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, CITIES } from '../constants';
import { Icons } from '../components/Icons';

const Sitemap: React.FC = () => {
  useEffect(() => {
    document.title = "خريطة الموقع - LogoAI.online";
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            خريطة موقع <span className="text-blue-600">LogoAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            تصفح جميع أقسام وخدمات موقعنا في جميع أنحاء جمهورية مصر العربية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Main Pages */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-blue-900">
              <Icons.Globe className="text-blue-600" />
              الصفحات الأساسية
            </h2>
            <ul className="space-y-4">
              {['/', '/about', '/services', '/pricing', '/portfolio', '/blog', '/contact'].map(path => (
                <li key={path}>
                  <Link to={path} className="text-gray-700 hover:text-blue-600 font-bold flex items-center gap-2 transition-all">
                    <Icons.ChevronLeft size={16} />
                    {path === '/' ? 'الرئيسية' : path.slice(1).toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages */}
          {SERVICES.map(service => (
            <div key={service.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-blue-900">
                <Icons.Zap className="text-blue-600" />
                {service.title}
              </h2>
              <ul className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                {CITIES.map(city => (
                  <li key={`${service.id}-${city.id}`}>
                    <Link 
                      to={`/seo/${service.id}/${city.id}`} 
                      className="text-gray-600 hover:text-blue-600 text-sm font-bold flex items-center gap-2 transition-all"
                    >
                      <Icons.MapPin size={14} className="text-gray-400" />
                      {service.title} في {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
