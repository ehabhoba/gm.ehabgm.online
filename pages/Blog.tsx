
import React, { useEffect, useState } from 'react';
import { BLOG_POSTS, PRIMARY_DOMAIN } from '../constants';
import { Icons } from '../components/Icons';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  
  const categories = ['الكل', ...new Set(BLOG_POSTS.map(p => p.category))];
  const filteredPosts = activeCategory === 'الكل' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  useEffect(() => {
    document.title = "مدونة LogoAI | نصائح تصميم الشعارات و SEO والذكاء الاصطناعي";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'اكتشف أسرار التصميم الاحترافي، إعلانات جوجل، والـ SEO في مدونة LogoAI.online. دليلك الشامل للنمو الرقمي.');
    }

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', `https://${PRIMARY_DOMAIN}/blog`);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-6">
          <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
            Latest Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            مركز المعرفة <span className="text-blue-600">LogoAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-loose">
            مقالات حصرية تغطي إعلانات جوجل، السيو، تصميم الجرافيك، والتجارة الإلكترونية لتطوير أعمالك.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all border ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100' 
                : 'bg-white text-gray-600 border-gray-100 hover:border-blue-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-blue-600 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4">
                   <Icons.Zap size={14} className="text-blue-500" />
                   <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-blue-950 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed text-sm flex-grow">
                  {post.summary}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] text-gray-400 font-bold uppercase">#{tag}</span>
                    ))}
                  </div>
                  <button className="text-blue-600 font-black flex items-center gap-2 group-hover:translate-x-[-5px] transition-all text-sm">
                     اقرأ المزيد
                     <Icons.ArrowRight size={18} className="rotate-180" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed">
            <h3 className="text-2xl font-bold text-gray-400">لا يوجد مقالات في هذا القسم حالياً</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
