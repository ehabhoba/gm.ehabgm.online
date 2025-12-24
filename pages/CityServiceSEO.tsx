
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, CITIES } from '../constants';
import { Icons } from '../components/Icons';

const CityServiceSEO: React.FC = () => {
  const { serviceId, cityId } = useParams();
  
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  const city = CITIES.find(c => c.id === cityId) || CITIES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${service.title} في ${city.name} - إيهاب جي إم EhabGM`;
  }, [service, city]);

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black">
            أفضل {service.title} في {city.name}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium leading-relaxed">
            هل تبحث عن {service.title} احترافي في مدينة {city.name} بمحافظة {city.governorate}؟ EhabGM هي وجهتك الأولى للتميز.
          </p>
          <div className="pt-8">
             <a href="https://wa.me/201022679250" className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all">
               اطلب عرض سعر في {city.name}
             </a>
          </div>
        </div>
      </section>

      {/* Structured Content for SEO & AI */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-6 text-gray-900">لماذا نحن الاختيار الأول في {city.name}؟</h2>
              <p className="text-gray-600 text-lg leading-loose mb-6">
                إذا كنت تدير نشاطاً تجارياً أو شركة في {city.name}، فأنت تدرك تماماً أهمية الجودة والسرعة. في EhabGM، نقدم خدمات {service.title} مصممة خصيصاً لتناسب احتياجات السوق في {city.name}. نحن لا نقدم مجرد خدمة، بل نبني معك شراكة نجاح طويلة الأمد تبدأ من ehabgm.online.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 font-bold text-gray-800">
                    <Icons.CheckCircle className="text-blue-600" size={20} />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-6">شركات {service.title} في {city.name}</h2>
              <p className="text-gray-600 text-lg leading-loose">
                نحن نعتبر الشركة الرائدة المتخصصة في {service.title} داخل {city.name}. سواء كنت صاحب متجر صغير أو شركة كبرى، فإن حلولنا الرقمية تضمن لك الظهور والتميز. تفضل بزيارة ehabgm.store لرؤية كفاءة أعمالنا.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-28">
              <h3 className="text-2xl font-black mb-6">مدن قريبة نغطيها</h3>
              <ul className="space-y-4">
                {CITIES.filter(c => c.id !== city.id).slice(0, 5).map(c => (
                  <li key={c.id}>
                    <Link to={`/seo/${service.id}/${c.id}`} className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-blue-50 transition-colors border border-gray-100">
                      <span className="font-bold">{service.title} في {c.name}</span>
                      <Icons.ChevronLeft size={18} className="text-blue-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="bg-gray-50 py-20 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-black">لا تتردد، تواصل مع أفضل خبير في {city.name} الآن</h2>
          <p className="text-gray-600 text-lg">انضم لقائمة عملائنا الناجحين في محافظة {city.governorate} واحصل على خدمة استثنائية.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://wa.me/201022679250" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all">
               <Icons.MessageCircle />
               واتساب {city.name}
             </a>
             <Link to="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
               اتصل بنا
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServiceSEO;
