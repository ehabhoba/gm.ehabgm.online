
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SERVICES, BLOG_POSTS, SEO_KEYWORDS, CITIES } from '../constants';
import { Icons } from '../components/Icons';

const Search: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState<{ type: string; title: string; link: string; desc?: string; category?: string }[]>([]);

  useEffect(() => {
    document.title = `نتائج البحث عن: ${query} - LogoAI`;
    window.scrollTo(0, 0);
    
    const searchTerms = query.toLowerCase().trim();
    if (!searchTerms) {
      setResults([]);
      return;
    }

    const filteredResults: any[] = [];

    // Search Services
    SERVICES.forEach(s => {
      if (s.title.toLowerCase().includes(searchTerms) || s.keywords.some(k => k.toLowerCase().includes(searchTerms))) {
        filteredResults.push({ type: 'خدمة', title: s.title, link: `/service/${s.id}`, desc: s.description, category: 'الخدمات' });
      }
    });

    // Search Blog
    BLOG_POSTS.forEach(p => {
      if (p.title.toLowerCase().includes(searchTerms) || p.summary.toLowerCase().includes(searchTerms) || p.tags.some(t => t.toLowerCase().includes(searchTerms))) {
        filteredResults.push({ type: 'مقال', title: p.title, link: `/blog`, desc: p.summary, category: p.category });
      }
    });

    // Search Keywords
    SEO_KEYWORDS.forEach(kw => {
      if (kw.term.toLowerCase().includes(searchTerms) && !filteredResults.some(r => r.title === kw.term)) {
        filteredResults.push({ type: 'موضوع شائع', title: kw.term, link: `/search?q=${kw.term}`, category: 'SEO' });
      }
    });

    setResults(filteredResults);
  }, [query]);

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-black mb-4">نتائج البحث عن: <span className="text-blue-600">"{query}"</span></h1>
          <p className="text-gray-500 font-medium">تم العثور على {results.length} نتيجة مطابقة لاهتماماتك.</p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {results.map((res, i) => (
              <Link 
                key={i} 
                to={res.link}
                className="block bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all relative overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                        {res.type}
                      </span>
                      {res.category && (
                        <span className="text-gray-300 text-[10px] font-bold">| {res.category}</span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{res.title}</h2>
                    {res.desc && <p className="text-gray-500 leading-relaxed text-sm line-clamp-2">{res.desc}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-black shrink-0">
                    <span className="text-sm">عرض التفاصيل</span>
                    <Icons.ChevronLeft size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white p-20 rounded-[3rem] text-center border shadow-sm border-gray-100">
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icons.Globe size={48} className="text-gray-300" />
            </div>
            <h2 className="text-3xl font-black mb-4">لم نجد نتائج مطابقة</h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">نحن نحدث المحتوى باستمرار. جرب البحث عن "تصميم لوجو"، "إعلانات جوجل"، أو "إنشاء متجر".</p>
            <div className="flex flex-wrap justify-center gap-3">
               <Link to="/" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 transition-all hover:scale-105">العودة للرئيسية</Link>
               <Link to="/contact" className="bg-white border text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50">تواصل مع خبير</Link>
            </div>
          </div>
        )}

        {/* Dynamic SEO Cloud */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-black">اكتشف مواضيع رائجة</h3>
            <div className="flex-grow h-px bg-gray-100"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {SEO_KEYWORDS.slice(0, 20).map(kw => (
              <Link 
                key={kw.term} 
                to={`/search?q=${kw.term}`}
                className="bg-white px-6 py-3 rounded-2xl text-sm font-bold text-gray-600 border border-gray-100 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-100 transition-all"
              >
                {kw.term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
