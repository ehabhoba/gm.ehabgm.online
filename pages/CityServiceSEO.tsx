
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, CITIES, PRIMARY_DOMAIN } from '../constants';
import { Icons } from '../components/Icons';

const CityServiceSEO: React.FC = () => {
  const { serviceId, cityId } = useParams();
  
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  const city = CITIES.find(c => c.id === cityId) || CITIES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const pageTitle = `أفضل ${service.title} في ${city.name} - LogoAI إيهاب جي إم`;
    document.title = pageTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const descriptionText = `هل تبحث عن ${service.title} احترافي في ${city.name}؟ إيهاب جي إم (EGM) يقدم حلول ${service.title} مبتكرة وبأسعار تنافسية في قلب ${city.governorate}. اطلب عرض سعرك الآن من LogoAI.online.`;
    metaDescription.setAttribute('content', descriptionText);

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `EhabGM - ${service.title} في ${city.name}`,
      "description": descriptionText,
      "url": `https://${PRIMARY_DOMAIN}/#/seo/${service.id}/${city.id}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressRegion": city.governorate,
        "addressCountry": "EG"
      },
      "provider": {
        "@type": "LocalBusiness",
        "name": "LogoAI.online",
        "image": "https://logoai.online/og-image.jpg"
      }
    };

    const script = document.getElementById('json-ld-seo') as HTMLScriptElement | null;
    if (script) {
      script.innerHTML = JSON.stringify(schemaData);
    } else {
      const newScript = document.createElement('script');
      newScript.id = 'json-ld-seo';
      newScript.type = 'application/ld+json';
      newScript.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(newScript);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

  }, [service, city]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6 relative z-10">
          <nav className="flex justify-center gap-2 text-sm font-bold opacity-80 mb-4">
            <Link to="/" className="hover:underline">الرئيسية</Link>
            <span>/</span>
            <span>{service.title}</span>
            <span>/</span>
            <span className="text-blue-200">{city.name}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            أفضل {service.title} في {city.name}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium leading-relaxed">
            هل تبحث عن {service.title} احترافي في مدينة {city.name} بمحافظة {city.governorate}؟ EhabGM هي وجهتك الأولى للتميز الرقمي.
          </p>
          <div className="pt-8">
             <a href="https://wa.me/201022679250" className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all inline-block">
               اطلب عرض سعر في {city.name}
             </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-6 text-gray-900">لماذا نحن الاختيار الأول في {city.name}؟</h2>
              <p className="text-gray-600 text-lg leading-loose mb-8">
                إذا كنت تدير نشاطاً تجارياً أو شركة في {city.name}، فأنت تدرك تماماً أهمية الجودة والسرعة. في EhabGM، نقدم خدمات {service.title} مصممة خصيصاً لتناسب احتياجات السوق في {city.name}. نحن لا نقدم مجرد خدمة، بل نبني معك شراكة نجاح طويلة الأمد تبدأ من logoai.online.
              </p>
              
              {/* Prominent CTA Banner Inside Content */}
              <div className="bg-gradient-to-br from-blue-700 to-purple-800 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group mb-12">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                   <Icons.Zap size={120} />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <h3 className="text-2xl md:text-4xl font-black leading-tight">احصل على استشارة مجانية وعرض سعر مخصص</h3>
                  <p className="text-blue-100 text-lg md:text-xl font-medium max-w-xl">
                    انضم لمئات العملاء الراضين في {city.name} والذين وثقوا بنا لتطوير هويتهم الرقمية.
                  </p>
                  <a 
                    href="https://wa.me/201022679250" 
                    className="bg-white text-blue-700 hover:bg-blue-50 px-12 py-5 rounded-2xl font-black text-xl md:text-2xl shadow-xl transition-all flex items-center gap-4 hover:scale-105"
                  >
                    <Icons.MessageCircle size={28} className="text-green-500" />
                    اطلب عرض سعر في {city.name}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 font-bold text-gray-800 hover:border-blue-200 transition-colors">
                    <Icons.CheckCircle className="text-blue-600" size={20} />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h2 className="text-3xl font-black mb-6 text-blue-900">خبراء {service.title} في {city.name}</h2>
              <p className="text-blue-800/80 text-lg leading-loose">
                نحن نعتبر الشركة الرائدة المتخصصة في {service.title} داخل {city.name}. سواء كنت صاحب متجر صغير أو شركة كبرى، فإن حلولنا الرقمية تضمن لك الظهور والتميز. تفضل بزيارة موقعنا logoai.online لرؤية كفاءة أعمالنا السابقة وتصاميمنا المبتكرة.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-28 shadow-sm">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <Icons.MapPin className="text-blue-600" />
                مدن قريبة
              </h3>
              <ul className="space-y-4">
                {CITIES.filter(c => c.id !== city.id).slice(0, 6).map(c => (
                  <li key={c.id}>
                    <Link to={`/seo/${service.id}/${c.id}`} className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-blue-50 transition-all border border-gray-100 shadow-sm hover:border-blue-200 group">
                      <span className="font-bold text-gray-700 group-hover:text-blue-700">{service.title} في {c.name}</span>
                      <Icons.ChevronLeft size={18} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-[-4px] transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link to="/sitemap" className="text-blue-600 font-bold hover:underline flex items-center gap-2 justify-center">
                  عرض كافة المناطق <Icons.ArrowRight className="rotate-180" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">لا تتردد، تواصل مع أفضل خبير في {city.name} الآن</h2>
          <p className="text-gray-400 text-xl font-medium">انضم لقائمة عملائنا الناجحين في محافظة {city.governorate} واحصل على خدمة استثنائية تعزز حضورك الرقمي.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="https://wa.me/201022679250" className="bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl shadow-green-900/20">
               <Icons.MessageCircle size={24} />
               واتساب {city.name}
             </a>
             <Link to="/contact" className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
               <Icons.Phone size={24} />
               اتصل بنا
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServiceSEO;
