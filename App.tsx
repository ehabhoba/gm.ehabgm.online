
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Sitemap from './pages/Sitemap';
import Search from './pages/Search';
import CityServiceSEO from './pages/CityServiceSEO';
import { Icons } from './components/Icons';
import { ONLINE_DOMAIN, STORE_DOMAIN } from './constants';

const Page = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
    <h1 className="text-5xl font-black mb-8">{title}</h1>
    <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        هذه الصفحة قيد التطوير لتكون بأفضل جودة تليق بعملاء LogoAI. نحن نعمل دائماً على توفير أفضل تجربة رقمية في مصر من خلال {ONLINE_DOMAIN} و {STORE_DOMAIN}.
      </p>
      <div className="space-y-6 mb-12">
        <p className="font-bold text-gray-900 text-xl">يمكنك التواصل معنا مباشرة عبر:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
          <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
            <Icons.Phone className="text-blue-600" size={24} />
            <span className="font-bold">+201022679250</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
            <Icons.Mail className="text-blue-600" size={24} />
            <span className="font-bold">info@logoai.online</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a href="https://wa.me/201022679250" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg">تواصل واتساب</a>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-cairo" dir="rtl">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Page title="من نحن - قصة نجاح LogoAI" />} />
            <Route path="/services" element={<Page title="خدماتنا الرقمية الشاملة" />} />
            <Route path="/pricing" element={<Page title="باقات الأسعار التنافسية" />} />
            <Route path="/portfolio" element={<Page title="سابقة أعمالنا - قصص نجاح" />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Page title="تواصل معنا - نحن هنا لخدمتك" />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/search" element={<Search />} />
            <Route path="/seo/:serviceId/:cityId" element={<CityServiceSEO />} />
          </Routes>
        </main>
        
        <a 
          href="https://wa.me/201022679250"
          className="fixed bottom-8 left-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">تحدث معنا الآن</span>
          <Icons.MessageCircle size={32} />
        </a>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
