
import { Service, City, BlogPost, FAQ, SEOKeyword } from './types';

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
    keywords: ['مصمم لوجو في مصر', 'تصميم شعارات احترافية', 'أفضل مصمم جرافيك', 'تصميم هوية بصرية']
  },
  {
    id: 'web-development',
    title: 'تصميم وبرمجة المواقع',
    description: 'مواقع سريعة، متجاوبة، ومحسنة لمحركات البحث.',
    longDescription: `نقوم ببناء مواقع إلكترونية عصرية متوافقة مع معايير الذكاء الاصطناعي وجاهزة للفهرسة على ${PRIMARY_DOMAIN}.`,
    icon: 'Globe',
    features: ['تطوير مواقع Single Page', 'أنظمة إدارة المحتوى', 'تحسين سرعة المواقع', 'توافق مع الموبايل'],
    keywords: ['شركة تصميم مواقع في مصر', 'برمجة مواقع احترافية', 'تطوير ويب', 'إنشاء موقع ويب']
  },
  {
    id: 'e-commerce',
    title: 'إنشاء المتاجر الإلكترونية',
    description: 'ابدأ بيع منتجاتك عبر الإنترنت اليوم بمتجر متكامل.',
    longDescription: `نصمم لك متجراً إلكترونياً يجمع بين الجمال وسهولة الاستخدام. زر متجرنا على ${PRIMARY_DOMAIN} لرؤية كفاءة عملنا.`,
    icon: 'ShoppingCart',
    features: ['بوابات دفع آمنة', 'إدارة مخزون سهلة', 'تقارير مبيعات مفصلة', 'تصميم واجهة مستخدم (UI/UX)'],
    keywords: ['إنشاء متجر إلكتروني ناجح', 'شركة متاجر إلكترونية', 'بيع أونلاين مصر', 'سكربت متجر إلكتروني']
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

export const SEO_KEYWORDS: SEOKeyword[] = [
  // Google Ads & Marketing
  { term: "إنشاء إعلان على جوجل", category: 'ads' },
  { term: "كيفية عمل اعلان على جوجل", category: 'ads' },
  { term: "اعلان ممول على جوجل", category: 'ads' },
  { term: "الاعلان في تيك توك", category: 'ads' },
  { term: "اعلان في اليوتيوب", category: 'ads' },
  { term: "إنشاء حملة اعلانية على جوجل", category: 'ads' },
  { term: "أسعار إعلانات تيك توك", category: 'ads' },
  { term: "شركة اعلانات ممولة", category: 'ads' },
  { term: "اعلان مول على الانستجرام", category: 'ads' },
  { term: "تسويق جوجل", category: 'marketing' },
  { term: "التسويق عبر الإنترنت", category: 'marketing' },
  { term: "تسويق سيو", category: 'marketing' },
  { term: "تسويق الكتروني", category: 'marketing' },
  { term: "شركة تسويق الكتروني", category: 'marketing' },
  { term: "وكالة دعاية واعلان", category: 'ads' },
  { term: "إدارة الحملات الإعلانية", category: 'marketing' },
  
  // Design & Branding
  { term: "مصمم جرافيك فى مصر", category: 'design' },
  { term: "مصمم محترف مستقل", category: 'design' },
  { term: "تصميم شعار جرافيك", category: 'design' },
  { term: "تصميم هوية بصرية", category: 'design' },
  { term: "تصميم بوستات سوشيال ميديا", category: 'design' },
  { term: "تصميم كروت شخصية", category: 'design' },
  { term: "تصميم بروشورات إعلانية", category: 'design' },
  { term: "تصميم موشن جرافيك", category: 'design' },
  { term: "تصميم شعارات احترافية", category: 'design' },
  { term: "لوجو 3d", category: 'design' },
  { term: "صانع الهوية البصرية", category: 'design' },
  { term: "mockup logo", category: 'design' },
  
  // Web & E-commerce
  { term: "تصميم مواقع", category: 'web' },
  { term: "إنشاء موقع إلكتروني", category: 'web' },
  { term: "تصميم متجر إلكتروني", category: 'ecommerce' },
  { term: "تصميم موقع ووردبريس", category: 'web' },
  { term: "إنشاء متجر شوبيفاي", category: 'ecommerce' },
  { term: "برمجة متاجر إلكترونية", category: 'ecommerce' },
  { term: "بوابات الدفع الإلكتروني", category: 'ecommerce' },
  { term: "مطور Shopify", category: 'ecommerce' },
  { term: "تسريع ووردبريس", category: 'web' },
  
  // CV & Career
  { term: "تصميم سيرة ذاتية جذابة", category: 'general' },
  { term: "كتابة سيرة ذاتية تسويقية", category: 'marketing' },
  { term: "نصائح لكتابة سيرة ذاتية مميزة", category: 'general' },
  
  // 3D & Tools
  { term: "أدوات الذكاء الاصطناعي", category: 'general' },
  { term: "design 3d online", category: 'design' },
  { term: "stl online", category: 'design' },
  { term: "حلوان أونلاين", category: 'general' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'google-ads-guide-2024',
    title: 'دليل إنشاء إعلان على جوجل وتصدر البحث في مصر',
    summary: 'تعلم كيفية عمل اعلان ممول على جوجل واستهداف الجمهور الصحيح لزيادة مبيعاتك بنسبة 300%.',
    content: 'في هذا المقال، سنشرح خطوة بخطوة كيفية إنشاء حملة اعلانية على جوجل ناجحة. سنغطي اختيار الكلمات المفتاحية، تحديد الميزانية، وكتابة نصوص إعلانية جذابة تضمن لك أعلى نسبة نقر (CTR)...',
    date: '2024-11-06',
    category: 'إعلانات جوجل',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800',
    tags: ['اعلان جوجل', 'تسويق الكتروني', 'إدارة حملات']
  },
  {
    id: 'tiktok-ads-pricing-egypt',
    title: 'أسعار إعلانات تيك توك في مصر وكيفية بدء أول حملة',
    summary: 'كل ما تريد معرفته عن الاعلان في تيك توك، من إنشاء حساب إعلانات تيك توك إلى استهداف الجمهور.',
    content: 'أصبح التيك توك منصة إعلانية لا غنى عنها. في EhabGM، نساعدك على فهم استراتيجيات الاعلان في تيك توك وكيفية الحصول على أقل سعر للنقرة مع أعلى تفاعل...',
    date: '2024-11-06',
    category: 'سوشيال ميديا',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    tags: ['تيك توك', 'اعلانات تيك توك', 'تسويق رقمي']
  },
  {
    id: 'professional-cv-design-tips',
    title: 'كيفية كتابة سيرة ذاتية تسويقية تجذب أصحاب العمل',
    summary: 'تصميم سيرة ذاتية جذابة هو خطوتك الأولى للوظيفة التي تحلم بها. إليك أهم النصائح من خبراء التوظيف.',
    content: 'سواء كنت تبحث عن وظيفة في التسويق أو التصميم، فإن السيرة الذاتية للتسويق الشخصي هي بروفايلك الأول. سنعرض لك قوالب سيرة ذاتية ناجحة وكيفية تحسين محتواها...',
    date: '2024-11-05',
    category: 'تطوير مهني',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    tags: ['سيرة ذاتية', 'توظيف', 'نصائح مهنية']
  },
  {
    id: 'shopify-vs-wordpress-ecommerce',
    title: 'مقارنة بين شوبيفاي وووردبريس: أيهما الأفضل لمتجرك؟',
    summary: 'هل تختار إنشاء متجر شوبيفاي أم تصميم متجر إلكتروني باستخدام ووردبريس؟ قارن بين المميزات والتكاليف.',
    content: 'التجارة الإلكترونية تتطلب منصة قوية. في هذا الدليل، نقارن بين Shopify و WooCommerce من حيث سهولة الاستخدام، بوابات الدفع، وتكلفة التطوير...',
    date: '2024-11-05',
    category: 'تجارة إلكترونية',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['شوبيفاي', 'ووردبريس', 'متجر الكتروني']
  },
  {
    id: 'graphic-design-trends-2025',
    title: 'أحدث اتجاهات تصميم الجرافيك واللوجو لعام 2025',
    summary: 'اكتشف كيف يغير الذكاء الاصطناعي عالم الجرافيك ديزاين وكيف تصبح مصمم محترف مستقل.',
    content: 'عالم التصميم يتطور بسرعة. من الشعارات ثلاثية الأبعاد (3D Logo) إلى التصميمات البسيطة (Minimalism)، تعرف على ما يبحث عنه العملاء حالياً في سوق مصر والسعودية...',
    date: '2024-11-04',
    category: 'تصميم جرافيك',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    tags: ['تصميم لوجو', 'جرافيك ديزاين', 'ذكاء اصطناعي']
  },
  {
    id: 'local-seo-expert-egypt',
    title: 'كيفية تحسين محركات البحث (SEO) للشركات المحلية في حلوان',
    summary: 'دليلك لتصدر نتائج البحث في منطقتك الجغرافية وجذب العملاء القريبين منك مجاناً.',
    content: 'السيو المحلي هو سر نجاح الأنشطة التجارية الصغيرة. سنعلمك كيف تستخدم خرائط جوجل والكلمات المفتاحية المحلية لتظهر في الصفحة الأولى...',
    date: '2024-11-04',
    category: 'سيو SEO',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800',
    tags: ['سيو', 'جوجل مابس', 'تسويق محلي']
  }
];

export const FAQS: FAQ[] = [
  {
    question: "كيف أبدأ أول حملة إعلانية لي على جوجل؟",
    answer: "يمكنك التواصل معنا لنقوم بإنشاء حساب إعلانات جوجل لك وإدارة حملتك باحترافية تضمن لك أقل سعر للنقرة وأعلى عائد مبيعات."
  },
  {
    question: "هل تقدمون خدمات تصميم سيرة ذاتية (CV)؟",
    answer: "نعم، نقوم بتصميم سير ذاتية احترافية وتسويقية تبرز مهاراتك بشكل جذاب وتساعدك في الحصول على الوظيفة المناسبة."
  },
  {
    question: "ما هي تكلفة إنشاء متجر إلكتروني؟",
    answer: "تختلف التكلفة بناءً على المنصة (شوبيفاي أو ووردبريس) والمميزات المطلوبة، تواصل معنا للحصول على عرض سعر دقيق."
  }
];
