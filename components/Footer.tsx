
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { Logo } from './Logo';
import { SERVICES, GOVERNORATES, ONLINE_DOMAIN, STORE_DOMAIN, FB_PAGE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Logo className="h-12" light showText={true} />
            <p className="text-gray-400 leading-relaxed">
              المنصة الرقمية المتكاملة للهيمنة على السوق المصري. نصمم، نبرمج، ونسوق لنصل بعملك إلى القمة عبر {ONLINE_DOMAIN} و {STORE_DOMAIN}.
            </p>
            <div className="flex gap-4">
              <a href={`https://${ONLINE_DOMAIN}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors" title="EhabGM Online"><Icons.Globe size={20} /></a>
              <a href={`https://${FB_PAGE}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors" title="EhabGM Facebook"><Icons.MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-4 text-gray-400">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/service/${service.id}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="text-xl font-bold mb-6">تغطيتنا في مصر</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
              {GOVERNORATES.slice(0, 10).map(gov => (
                <span key={gov}>• {gov}</span>
              ))}
              <span className="text-blue-400 font-bold">وجميع المحافظات...</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Icons.Phone size={18} className="text-blue-500" />
                  <span>+20 102 267 9250</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icons.Phone size={18} className="text-blue-500" />
                  <span>+20 114 005 7253</span>
                </div>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Icons.Mail size={18} className="text-blue-500" />
                  <span>info@ehabgm.store</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icons.Mail size={18} className="text-blue-500" />
                  <span>info@ehabgm.online</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icons.MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                <span>18 شارع 6، غرب حلوان، القاهرة، مصر.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} EhabGM - جميع الحقوق محفوظة لـ EGM.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white">الشروط والأحكام</Link>
            <Link to="/privacy" className="hover:text-white">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
