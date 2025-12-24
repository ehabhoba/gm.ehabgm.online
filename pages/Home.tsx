
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { Logo } from '../components/Logo';
import { SERVICES, BLOG_POSTS, FAQS, CITIES, ONLINE_DOMAIN, STORE_DOMAIN } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-4">
              <Logo className="h-24 md:h-32" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              الهيمنة الرقمية تبدأ مع <span className="gradient-text">EGM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              إيهاب جي إم: الخبراء في تصميم الجرافيك، المواقع، والمتاجر الإلكترونية في مصر. مقرنا 18 شارع 6 بغرب حلوان.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://wa.me/201022679250" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2">
                <Icons.MessageCircle />
                ابدأ رحلة نجاحك
              </a>
              <Link to="/portfolio" className="bg-white text-gray-900 border-2 border-gray-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                مشاهدة سابقة أعمالنا
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Keywords (SEO) */}
        <div className="mt-20 flex overflow-hidden gap-10 opacity-30 select-none">
          <div className="flex gap-20 animate-marquee whitespace-nowrap text-2xl font-black text-gray-400">
            <span>مصمم جرافيك في حلوان</span>
            <span>EGM Digital</span>
            <span>شركة تصميم مواقع</span>
            <span>Ehab GM Store</span>
            <span>إعلانات ممولة في مصر</span>
            <span>إنشاء متجر إلكتروني</span>
            <span>Ehab GM Online</span>
            <span>www.gm.ehabgm.online</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">خدمات EGM الاحترافية</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(service => {
              const IconComp = (Icons as any)[service.icon];
              return (
                <div key={service.id} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComp size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to={`/service/${service.id}`} className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    تفاصيل الخدمة
                    <Icons.ChevronLeft size={20} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black mb-2">مدونة EGM الرقمية</h2>
              <p className="text-gray-500">دليلك الكامل للنجاح الرقمي في مصر</p>
            </div>
            <Link to="/blog" className="text-blue-600 font-bold hidden md:block">عرض كل المقالات</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6 flex-grow">
                  <span className="text-blue-600 text-sm font-bold uppercase">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4 leading-snug">{post.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">{post.summary}</p>
                  <Link to="/blog" className="text-gray-900 font-bold hover:text-blue-600 flex items-center gap-2 mt-auto">
                    اقرأ المزيد
                    <Icons.ArrowRight size={18} className="rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight">لماذا يختار أصحاب الشركات <span className="text-blue-600">Ehab GM؟</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 h-fit"><Icons.ShieldCheck size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">المصداقية والجودة</h4>
                  <p className="text-gray-600">نحن في EGM نلتزم بأعلى معايير الجودة العالمية في كل تصميم وبرمجية نقوم بها من قلب حلوان.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 h-fit"><Icons.Zap size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">أنظمة تقنية متكاملة</h4>
                  <p className="text-gray-600">عبر {STORE_DOMAIN} و {ONLINE_DOMAIN}، نوفر لك بنية تحتية رقمية تضمن لك التوسع المستمر.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 h-fit"><Icons.TrendingUp size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">تحسين محركات البحث SEO</h4>
                  <p className="text-gray-600">نهتم بتصدرك لنتائج البحث، تماماً كما تتصدر EGM اليوم بفضل خبراتنا التقنية.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/agency-egm/600/500" alt="EGM Office Team" className="rounded-[3rem] shadow-2xl" loading="lazy" />
            <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-3xl text-white shadow-xl hidden md:block">
              <p className="text-4xl font-black mb-1">+500</p>
              <p className="font-bold">مشروع ناجح تحت مظلة EGM</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16 underline decoration-blue-600 underline-offset-8">إجابات الخبراء من Ehab GM</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer transition-all hover:border-blue-200">
                <summary className="text-xl font-bold list-none flex justify-between items-center">
                  {faq.question}
                  <Icons.ChevronRight className="group-open:rotate-90 transition-transform text-blue-600" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed text-lg border-t pt-4">
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
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black">جاهز للتحول الرقمي مع EGM؟</h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                لا تتردد في طلب استشارتك المجانية اليوم. فريق EhabGM في انتظار تواصلك.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/201022679250" className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl">
                  واتساب - 01022679250
                </a>
                <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                  راسلنا الآن
                </Link>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
