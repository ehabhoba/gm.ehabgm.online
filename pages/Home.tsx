
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { Logo } from '../components/Logo';
import { SERVICES, BLOG_POSTS, FAQS, PRIMARY_DOMAIN, SEO_KEYWORDS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-10">
            <div className="flex justify-center mb-6 scale-110">
              <Logo className="h-28 md:h-36" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              صمم هويتك مع <span className="gradient-text">LogoAI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              الخيار الأول في مصر لتصميم الشعارات والهوية البصرية. نحن ندمج الفن بالتقنية لنصنع لك علامة تجارية لا تُنسى عبر {PRIMARY_DOMAIN}.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <a href="https://wa.me/201022679250" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-3">
                <Icons.MessageCircle size={24} />
                اطلب لوجو احترافي
              </a>
              <Link to="/portfolio" className="bg-white text-gray-900 border-2 border-gray-100 px-12 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                تصفح أعمالنا
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated SEO Marquee */}
        <div className="mt-20 border-y border-gray-50 bg-gray-50/50 py-8 overflow-hidden select-none">
          <div className="flex gap-20 animate-marquee whitespace-nowrap text-xl font-black text-gray-400/50">
            {SEO_KEYWORDS.map((kw, i) => (
              <span key={i}>{kw.term} • </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">ماذا نقدم؟</span>
            <h2 className="text-4xl font-black mb-4">خدماتنا في LogoAI</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(service => {
              const IconComp = (Icons as any)[service.icon];
              return (
                <div key={service.id} className="bg-gray-50/50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden">
                  <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComp size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-950">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                  <Link to={`/service/${service.id}`} className="text-blue-600 font-black flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm">
                    استكشف المزيد
                    <Icons.ChevronLeft size={20} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Cloud Section - High Value Keywords linking to Search */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-black mb-10 text-center">أهم الكلمات البحثية التي نتصدر بها</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SEO_KEYWORDS.map((kw, i) => (
              <Link 
                key={i} 
                to={`/search?q=${kw.term}`}
                className="bg-white px-5 py-2.5 rounded-xl text-sm font-bold text-gray-500 border border-gray-100 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
              >
                {kw.term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black">أحدث مقالات المدونة</h2>
            <Link to="/blog" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">مشاهدة الكل</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <Link key={post.id} to={`/blog`} className="group">
                <div className="rounded-3xl overflow-hidden mb-6 aspect-video">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-gray-500 line-clamp-2 text-sm">{post.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16">الأسئلة المتكررة</h2>
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-3xl p-8 border border-gray-100 cursor-pointer transition-all hover:shadow-xl">
                <summary className="text-xl font-bold list-none flex justify-between items-center text-blue-950">
                  {faq.question}
                  <Icons.ChevronRight className="group-open:rotate-90 transition-transform text-blue-600" />
                </summary>
                <p className="mt-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">ابدأ رحلة نجاحك الرقمي الآن</h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
                نحن نوفر لك كل الأدوات اللازمة للظهور والبيع والتوسع في مصر والسعودية.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://wa.me/201022679250" className="bg-white text-blue-600 px-12 py-6 rounded-3xl font-black text-2xl hover:scale-105 transition-all">
                  تحدث معنا الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
