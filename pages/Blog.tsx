
import React, { useEffect } from 'react';
import { BLOG_POSTS, PRIMARY_DOMAIN } from '../constants';
import { Icons } from '../components/Icons';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "مدونة LogoAI | نصائح تصميم الشعارات و SEO";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'اكتشف أسرار التصميم الاحترافي والـ SEO في مدونة LogoAI.online. دليلك للنمو الرقمي مع إيهاب جي إم.');
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
          <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-black text-sm uppercase">Blog & News</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900">
            مدونة <span className="text-blue-600">LogoAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-loose">
            مقالات حصرية عن عالم التصميم والبرمجة من منظور إيهاب جي إم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 text-blue-600 text-xs font-black uppercase mb-4">
                   <Icons.Zap size={16} />
                   <span>{post.category}</span>
                   <span className="text-gray-300">•</span>
                   <span className="text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-blue-950 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-8 line-clamp-2 leading-relaxed">
                  {post.summary}
                </p>
                <button className="text-blue-900 font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                   اقرأ المقال
                   <Icons.ArrowRight size={20} className="rotate-180 text-blue-600" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
