
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { Logo } from './Logo';
import { SERVICES, GOVERNORATES, ONLINE_DOMAIN, PRIMARY_DOMAIN, FB_PAGE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Logo className="h-14" light showText={true} />
            <p className="text-blue-100/70 leading-loose text-lg">
              رواد تصميم الشعارات والهوية البصرية في مصر. نحن نصنع المستقبل الرقمي عبر {PRIMARY_DOMAIN} بأيدي المبدع إيهاب جي إم.
            </p>
            <div className="flex gap-4">
              <a href={`https://${ONLINE_DOMAIN}`} className="bg-white/10 p-4 rounded-2xl hover:bg-blue-600 transition-all" title="LogoAI Web"><Icons.Globe size={24} /></a>
              <a href={`https://${FB_PAGE}`} className="bg-white/10 p-4 rounded-2xl hover:bg-blue-600 transition-all" title="Facebook Page"><Icons.MessageCircle size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black mb-8 border-r-4 border-blue-500 pr-4">خدماتنا الرئيسية</h3>
            <ul className="space-y-5 text-blue-100/60 font-medium">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/service/${service.id}`} className="hover:text-white hover:translate-x-[-8px] transition-all block">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap Areas */}
          <div>
            <h3 className="text-xl font-black mb-8 border-r-4 border-blue-500 pr-4">خريطة الانتشار</h3>
            <div className="grid grid-cols-2 gap-4 text-blue-100/60 text-sm">
              {GOVERNORATES.slice(0, 8).map(gov => (
                <span key={gov} className="hover:text-blue-400 cursor-default">لوجو {gov}</span>
              ))}
              <Link to="/" className="text-blue-400 font-bold col-span-2 mt-4">عرض كافة المناطق...</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-black mb-8 border-r-4 border-blue-500 pr-4">اتصل بنا</h3>
            <ul className="space-y-6 text-blue-100/70">
              <li className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <Icons.Phone size={20} className="text-blue-400" />
                  <span className="font-bold text-lg tracking-wider">+20 102 267 9250</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.Phone size={20} className="text-blue-400" />
                  <span className="font-bold text-lg tracking-wider">+20 114 005 7253</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Icons.Mail size={20} className="text-blue-400" />
                <span className="font-medium">info@logoai.online</span>
              </li>
              <li className="flex items-start gap-4">
                <Icons.MapPin size={20} className="text-blue-400 shrink-0 mt-1" />
                <span className="font-medium">18 شارع 6، غرب حلوان، القاهرة، مصر.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-blue-100/40 text-sm">
          <p>© {new Date().getFullYear()} LogoAI.online - كافة الحقوق محفوظة لـ EGM.</p>
          <div className="flex gap-8 mt-6 md:mt-0 font-bold">
            <Link to="/sitemap" className="hover:text-white">خريطة الموقع</Link>
            <Link to="/privacy" className="hover:text-white">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
