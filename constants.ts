
import { Service, City, BlogPost, FAQ } from './types';

export const PRIMARY_DOMAIN = "logoai.online";
export const STORE_DOMAIN = "logoai.online/store";
export const ONLINE_DOMAIN = "logoai.online";
export const FB_PAGE = "facebook.com/ehab.gm1";

export const SERVICES: Service[] = [
  {
    id: 'graphic-design',
    title: 'تصميم الجرافيك واللوجو',
    description: 'تصاميم بصرية احترافية وشعارات مبتكرة تعبر عن هويتك.',
    longDescription: `نحن متخصصون في تصميم الشعارات والهويات البصرية المتكاملة. هدفنا هو جعل علامتك التجارية فريدة عبر ${PRIMARY_DOMAIN}.`,
    icon: 'Palette',
    features: ['تصميم شعارات (Logo Design)', 'هوية بصرية كاملة', 'تصاميم إعلانات السوشيال ميديا', 'بنرات ومطبوعات'],
    keywords: ['مصمم لوجو في مصر', 'تصميم شعارات احترافية', 'أفضل مصمم جرافيك']
  },
  {
    id: 'web-development',
    title: 'تصميم وبرمجة المواقع',
    description: 'مواقع سريعة، متجاوبة، ومحسنة لمحركات البحث.',
    longDescription: `نقوم ببناء مواقع إلكترونية عصرية متوافقة مع معايير الذكاء الاصطناعي وجاهزة للفهرسة على ${PRIMARY_DOMAIN}.`,
    icon: 'Globe',
    features: ['تطوير مواقع Single Page', 'أنظمة إدارة المحتوى', 'تحسين سرعة المواقع', 'توافق مع الموبايل'],
    keywords: ['شركة تصميم مواقع في مصر', 'برمجة مواقع احترافية', 'تطوير ويب']
  },
  {
    id: 'e-commerce',
    title: 'إنشاء المتاجر الإلكترونية',
    description: 'ابدأ بيع منتجاتك عبر الإنترنت اليوم بمتجر متكامل.',
    longDescription: `نصمم لك متجراً إلكترونياً يجمع بين الجمال وسهولة الاستخدام. زر متجرنا على ${PRIMARY_DOMAIN} لرؤية كفاءة عملنا.`,
    icon: 'ShoppingCart',
    features: ['بوابات دفع آمنة', 'إدارة مخزون سهلة', 'تقارير مبيعات مفصلة', 'تصميم واجهة مستخدم (UI/UX)'],
    keywords: ['إنشاء متجر إلكتروني ناجح', 'شركة متاجر إلكترونية', 'بيع أونلاين مصر']
  }
];

export const GOVERNORATES = [
  "القاهرة", "الجيزة", "الإسكندرية", "القليوبية", "الشرقية", "الدقهلية", "الغربية", "المنوفية", "البحيرة", "بني سويف", "الفيوم", "المنيا", "أسيوط", "سوهاج", "قنا", "الأقصر", "أسوان", "البحر الأحمر", "مطروح", "شمال سيناء", "جنوب سيناء", "الوادي الجديد"
];

export const CITIES: City[] = [
  { id: 'helwan', name: 'حلوان', governorate: 'القاهرة' },
  { id: 'nasr-city', name: 'مدينة نصر', governorate: 'القاهرة' },
  { id: 'maadi', name: 'المعادي', governorate: 'القاهرة' },
  { id: 'dokki', name: 'الدقي', governorate: 'الجيزة' },
  { id: 'october', name: '6 أكتوبر', governorate: 'الجيزة' },
  { id: 'smoha', name: 'سموحة', governorate: 'الإسكندرية' },
  { id: 'mansoura', name: 'المنصورة', governorate: 'الدقهلية' },
  { id: 'tanta', name: 'طنطا', governorate: 'الغربية' },
  { id: 'zagazig', name: 'الزقازيق', governorate: 'الشرقية' },
  { id: 'asyut-city', name: 'أسيوط', governorate: 'أسيوط' },
  { id: 'hurghada', name: 'الغردقة', governorate: 'البحر الأحمر' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: `لماذا تختار LogoAI.online لتصميم شعارك؟`,
    summary: `اكتشف كيف نستخدم تقنيات التصميم الحديثة لإنشاء شعارات خالدة لشركتك.`,
    content: `في عالم الأعمال، اللوجو هو وجه شركتك. عبر logoai.online، نقدم لك تصاميم فريدة تعبر عن قيمك...`,
    date: '2024-11-01',
    category: 'تصميم شعارات',
    image: 'https://picsum.photos/seed/logo1/800/600'
  },
  {
    id: '2',
    title: `أسرار تصدر نتائج البحث في 2025`,
    summary: `تعرف على كيفية فهرسة موقعك بسرعة في جوجل باستخدام أدوات logoai.online.`,
    content: `الفهرسة والزحف هي أساس ظهورك الرقمي. في هذا المقال نشرح كيف نهيئ المواقع لمحركات البحث...`,
    date: '2024-11-05',
    category: 'SEO',
    image: 'https://picsum.photos/seed/seo1/800/600'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'ما هي خدمات logoai.online؟',
    answer: 'نقدم خدمات تصميم الشعارات، الهوية البصرية، برمجة المواقع، وإدارة الحملات الإعلانية باحترافية تامة.'
  },
  {
    question: 'كيف أتواصل مع إيهاب جي إم؟',
    answer: 'يمكنك التواصل معنا عبر الواتساب على 01022679250 أو زيارة مقرنا في حلوان، القاهرة.'
  }
];
