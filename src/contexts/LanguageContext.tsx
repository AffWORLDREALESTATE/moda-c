"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translations {
  [key: string]: string;
}

export interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string) => string;
  languages: Language[];
  currencyCode: string;
  currencySymbol: string;
  convertFromAED: (amountAED: number) => number;
  formatPrice: (amountAED?: number | null) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'US', flag: '🇺🇸' },
  { code: 'ar', name: 'FE', flag: '🇦🇪' },
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
  { code: 'ru', name: 'RU', flag: '🇷🇺' },
  { code: 'zh', name: 'CN', flag: '🇨🇳' },
];

// Translation data
const translations: Record<string, Translations> = {
  en: {
    // New: Services hero translations
    'services.residents.title': 'Residents Visa Services',
    'services.residents.subtitle': 'End-to-end guidance to obtain or renew your UAE residence visa. Tailored support for property owners, employees, and families relocating to Dubai.',
    'services.golden.title': 'UAE Golden Visa',
    'services.golden.subtitle': 'Secure a 10-year residency through property investment, entrepreneurship, or recognised professional excellence. We manage every step with precision.',
    'services.investment.title': 'Investment Advisory',
    'services.investment.subtitle': 'Data-led strategies to optimise yield, growth, and liquidity across Dubai’s prime and emerging districts.',
    'contact.cta': 'Contact Us',
    // Navigation
    'nav.buy': 'Buy',
    'nav.rent': 'Rent',
    'nav.projects': 'Projects',
    'nav.teams': 'Teams',
    'nav.areas': 'Areas',
    'nav.services': 'Services',
    'nav.blogs': 'Blogs',
    'nav.more': 'More',
    'nav.listYourProperty': 'List Your Property',
    
    // Services
    'services.propertyManagement': 'Off-Plan Management',
    'services.mortgages': 'Mortgages',
    'services.conveyancing': 'Conveyancing',
    'services.shortTermRentals': 'Short Term Rentals',
    'services.propertySnagging': 'Property Snagging',
    'services.partnerProgram': 'Partner Program',
    
    // Team page
    'team.loading': 'Loading team members...',
    'team.title': 'Modac\'s team of ',
    'team.subtitle': 'Modac Real Estate is a team of Professionals and Expertise in Dubai\'s Property Sphere',
    'team.management': 'Management',
    'team.brokers': 'Brokers',
    'team.showing': 'Showing',
    'team.teamMembers': 'team members',
    'team.languages': 'Languages',
    
    // Common
    'common.currency': 'AED',
    'common.menu': 'Menu',
    
    // Footer
    'footer.newsletter': 'Receive our exceptional real estate listings delivered straight to your inbox.',
    'footer.emailLabel': 'Email address for newsletter subscription',
    'footer.emailPlaceholder': 'Enter your email address',
    'footer.subscribe': 'Subscribe',
    'footer.sitemap': 'Sitemap',
    'footer.contact': 'Contact',
    'footer.whyDubai': 'Why Dubai',
    'footer.contactUs': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.facebook': 'Facebook',
    'footer.instagram': 'Instagram',
    'footer.linkedin': 'LinkedIn',
    'footer.twitter': 'Twitter',
    'footer.youtube': 'YouTube',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.disclaimer': 'Disclaimer',
    'footer.copyright': '© 2025 Modac Real Estate. All Rights Reserved.',
    
    // Hero
    'hero.companyName': 'MODAC REAL ESTATE',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': 'Completion Status',
    'buy.completedSecondary': 'Completed Secondary',
    'buy.completedPrimary': 'Completed Primary',
    'buy.propertyType': 'Property Type',
    'buy.minPrice': 'Min Price',
    'buy.maxPrice': 'Max Price',
    'buy.location': 'Location',
    'buy.type': 'Type',
    'buy.buy': 'Buy',
    'buy.rent': 'Rent',
    'buy.moreFilters': 'More Filters',
    'buy.search': 'Search Properties',
    'buy.previous': 'Previous',
    'buy.next': 'Next',
    'buy.showingRange': 'Showing',
    'buy.to': 'to',
    'buy.of': 'of',
    'buy.properties': 'properties',
    'buy.any': 'Any',
    'buy.anyPropertyType': 'Any Property Type',
    'buy.min': 'Min',
    'buy.max': 'Max',
    'buy.beds': 'Beds',
    'buy.anyBedrooms': 'Any Bedrooms',
    'buy.bathrooms': 'Bathrooms',
    'buy.anyBathrooms': 'Any Bathrooms',
    'buy.handoverYear': 'Handover Year',
    'buy.anyYear': 'Any Year',
    'buy.developer': 'Developer',
    'buy.searchDevelopers': 'Search developers...',
    'buy.locationHeading': "Dubai's most exquisite properties",
    'buy.locationSubheading': "Become part of a world class lifestyle, benefit of unrivaled returns and own a piece of Dubai's future.",
    'buy.learnMore': 'Learn More',
    
    // Landing page sections
    // Search bar labels
    'search.priceRange': 'Price Range',
    'search.referenceNumber': 'Reference Number',
    'landing.feature.kicker': 'FEATURED PROJECTS',
    'landing.feature.heading': 'Luxury Unveiled, Comfort and Sophistication',
    'landing.feature.subtitle': "Discover a curated selection of Dubai's most exquisite properties, epitomizing luxury, elegance, and unparalleled design.",
    'landing.feature.viewAll': 'View All Project',
    
    'landing.property.kicker': 'FEATURED PROPERTIES',
    'landing.property.heading': 'Checkout Some of the Most Promising Properties by Modac Real Estate',
    'landing.property.subtitle': 'Step into a realm of unparalleled sophistication with our featured properties. Explore these exclusive gems and envision your next luxurious retreat with Modac Real Estate.',
    'landing.property.showing': 'Showing',
    'landing.property.of': 'of',
    'landing.property.properties': 'properties',
    'landing.property.tryAgain': 'Try Again',
    'landing.property.noProperties': 'No Properties Found',
    'landing.property.loadMore': 'Load More',
    'landing.property.showAll': 'Show All',
    'landing.property.viewAll': 'VIEW ALL PROPERTIES',
    
    'landing.communities.kicker': 'EXPLORE COMMUNITIES',
    'landing.communities.heading': 'Discover Dubai\'s Most Desirable Neighborhoods',
    'landing.communities.subtitle': 'Navigate through the rich mosaic of Dubai\'s most desirable districts and neighborhoods. From peaceful coastal sanctuaries to vibrant metropolitan centers, our handpicked collection reveals the spirit of premium lifestyle in every location.',
    'landing.communities.viewAll': 'View All Communities',
    'landing.partners.heading': "Partners with Dubai's leading developers",
    
    'landing.blog.kicker': 'INSIGHTS & INSPIRATION',
    'landing.blog.heading': 'Latest Real Estate Insights',
    'landing.blog.subtitle': 'Stay informed with expert analysis, market trends, and insider perspectives on Dubai\'s dynamic real estate landscape.',
    'landing.blog.viewAll': 'VIEW ALL BLOGS',
    // Instagram section
    'landing.instagram.heading': 'Follow Our Journey',
    'landing.instagram.subtitle': "Discover luxury properties, behind-the-scenes content, and exclusive insights from Dubai's premier real estate destinations.",
    'landing.instagram.followFull': 'Follow @modacproperties',
    'landing.instagram.follow': 'Follow Us',
    'landing.instagram.cantSee': "Can't see our Instagram feed?",
    'landing.instagram.visitDirect': 'Visit our Instagram directly',

    // Blog list page
    'blog.title': 'Blog',
    'blog.list.introHeading': 'Latest Insights and Stories',
    'blog.list.introSubheading': 'Expert analysis, market updates, and inspiration from Dubai’s real estate scene.',
    'blog.notFound': 'Blog Not Found',
    'blog.notFoundDescription': "The blog post you're looking for doesn't exist.",
    'blog.backToBlog': 'Back to Blog',
    
    'landing.cta.kicker': 'READY TO BEGIN',
    'landing.cta.heading': 'Your Premium Property Journey Starts Here',
    'landing.cta.subtitle': 'Prepared to begin your premium property journey customized exclusively for your needs? Initiate your path toward extraordinary lifestyle experiences.',
    'landing.cta.button': 'CONTACT US',
    
    // Solutions
    'solutions.connectSpecialist': 'Connect with a Specialist',
    'solutions.connectDescription': 'Connect with our committed network of 400+ specialized professionals prepared to support your needs.',
    'solutions.listProperty': 'List Your Property',
    'solutions.listDescription': 'Maximize your property\'s potential through our sophisticated promotional approaches and market expertise.',
    'solutions.downloadReport': 'Download Report',
    'solutions.downloadDescription': 'Access the most recent Detailed Dubai Property Market Analysis for Q1 2025',
    'solutions.exploreProjects': 'Explore Dubai Projects',
    'solutions.exploreDescription': 'Discover and select your perfect home from our comprehensive collection of Dubai developments.',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.kicker': 'CONNECT WITH LUXURY',
    'contact.heading': 'Get in Touch with Modac Real Estate',
    'contact.description': 'Modac Real Estate is one of the most recognized african trusted real estate consultancies in Dubai United Arab Emirates, founded by Mr. Fabien Mvie Monefong from Cameroon, Since its launched in 2022 with his experienced in the industry and in the field of his other businesses locally & globally, it has been successful and we will continue to thrive and provide quality services to our clients both locally and Internationally who sincerely gain trust and to new real estate buyers.',
    'contact.teamDescription': 'The extent of our experienced research driven and professional teams to give reliable information and advice to our clients make a right decision for the house search and investment.',
    'contact.servicesDescription': 'Our service offers acquiring, leasing residential and commercial real estate.',
    'contact.contactInfo': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    'contact.businessHours': 'Business Hours',
    'contact.hours': 'Mon – Fri: 9AM to 7PM',
    
    // Common components
    'common.units': 'UNITS',
    'common.from': 'FROM',
    'common.forSale': 'For Sale',
    'common.forRent': 'For Rent',
    'common.available': 'Available',
    'common.locationNotSpecified': 'Location not specified',
    'common.priceOnRequest': 'Price on request',
    'common.readMore': 'READ MORE',
    'common.offPlan': 'OFF-PLAN',
    
    // Form components
    'form.name': 'Name',
    'form.surname': 'Surname',
    'form.email': 'Email',
    'form.telephone': 'Telephone',
    'form.message': 'Write your message here...',
    'form.submit': 'Submit',
    'form.privacyText': 'By submitting this form you confirm that this website can store your submitted information, agree to our',
    'form.privacyPolicy': 'privacy policy',
    'form.andConsent': 'and consent to',
    'form.cookies': 'cookies',
    'form.beingStored': 'being stored on your computer.',

    // Off Plans page
    'offplans.completionStatus': 'Completion Status',
    'offplans.completedSecondary': 'Completed Secondary',
    'offplans.offPlanSecondary': 'Off Plan Secondary',
    'offplans.completedPrimary': 'Completed Primary',
    'offplans.offPlanPrimary': 'Off Plan Primary',
    'offplans.propertyType': 'Property Type',
    'offplans.apartment': 'Apartment',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Townhouse',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Bedrooms',
    'offplans.oneBedroom': '1 Bedroom',
    'offplans.twoBedrooms': '2 Bedrooms',
    'offplans.threeBedrooms': '3 Bedrooms',
    'offplans.fourBedrooms': '4 Bedrooms',
    'offplans.fivePlusBedrooms': '5+ Bedrooms',
    'offplans.bathrooms': 'Bathrooms',
    'offplans.oneBathroom': '1 Bathroom',
    'offplans.twoBathrooms': '2 Bathrooms',
    'offplans.threeBathrooms': '3 Bathrooms',
    'offplans.fourBathrooms': '4 Bathrooms',
    'offplans.fivePlusBathrooms': '5+ Bathrooms',
    'offplans.year': 'Year',
    'offplans.handoverYear': 'Handover Year',
    'offplans.minPrice': 'Min Price',
    'offplans.maxPrice': 'Max Price',
    'offplans.locationPlaceholder': 'City, building or community',
    'offplans.type': 'Type',
    'offplans.buy': 'Buy',
    'offplans.rent': 'Rent',
    'offplans.offPlan': 'Off Plan',
    'offplans.location': 'Location',
    'offplans.developer': 'Developer',
    'offplans.searchDevelopers': 'Search developers...',
    'offplans.searchProperties': 'Search Properties',
    'offplans.moreFilters': 'More Filters',
    'offplans.searchFilters': 'Search Filters',
    'offplans.anyBedrooms': 'Any Bedrooms',
    'offplans.anyBathrooms': 'Any Bathrooms',
    'offplans.fivePlusBeds': '5+ Beds',
    'offplans.bed': 'Bed',
    'offplans.fivePlusBaths': '5+ Baths',
    'offplans.bath': 'Bath',
    'offplans.beds': 'Beds',
    'offplans.learnMore': 'Learn More',
  },
  ar: {
    // Search bar labels
    'search.priceRange': 'نطاق السعر',
    'search.referenceNumber': 'رقم المرجع',
    // New: Services hero translations
    'services.residents.title': 'تأشيرة الإقامة',
    'services.residents.subtitle': 'إرشاد شامل للحصول على أو تجديد تأشيرة الإقامة في الإمارات. دعم مخصص لمالكي العقارات والموظفين والعائلات.',
    'services.golden.title': 'التأشيرة الذهبية للإمارات',
    'services.golden.subtitle': 'احصل على إقامة لمدة 10 سنوات عبر الاستثمار العقاري أو ريادة الأعمال أو التميز المهني. ندير كل خطوة بدقة.',
    'services.investment.title': 'الاستشارات الاستثمارية',
    'services.investment.subtitle': 'استراتيجيات مدعومة بالبيانات لتحسين العائد والنمو والسيولة عبر أبرز مناطق دبي.',
    'contact.cta': 'اتصل بنا',
    // Navigation
    'nav.buy': 'شراء',
    'nav.rent': 'إيجار',
    'nav.projects': 'مشاريع',
    'nav.teams': 'فرق العمل',
    'nav.areas': 'المناطق',
    'nav.services': 'الخدمات',
    'nav.blogs': 'المدونات',
    'nav.more': 'المزيد',
    'nav.listYourProperty': 'أدرج عقارك',
    
    // Services
    'services.propertyManagement': 'إدارة العقارات',
    'services.mortgages': 'الرهون العقارية',
    'services.conveyancing': 'التنازل القانوني',
    'services.shortTermRentals': 'الإيجار قصير المدى',
    'services.propertySnagging': 'فحص العقارات',
    'services.partnerProgram': 'برنامج الشراكة',
    
    // Team page
    'team.loading': 'جاري تحميل أعضاء الفريق...',
    'team.title': 'تعرف على فريقنا',
    'team.subtitle': 'اكتشف فريقنا الاستثنائي من محترفي العقارات الفاخرة في دبي. وكلاء خبراء ملتزمون بتحقيق أحلامك العقارية.',
    'team.management': 'الإدارة',
    'team.brokers': 'الوسطاء',
    'team.showing': 'عرض',
    'team.teamMembers': 'أعضاء الفريق',
    'team.languages': 'اللغات',
    
    // Common
    'common.currency': 'درهم',
    'common.menu': 'القائمة',
    
    // Footer
    'footer.newsletter': 'احصل على قوائم العقارات الاستثنائية لدينا مباشرة في صندوق الوارد الخاص بك.',
    'footer.emailLabel': 'عنوان البريد الإلكتروني للاشتراك في النشرة الإخبارية',
    'footer.emailPlaceholder': 'أدخل عنوان بريدك الإلكتروني',
    'footer.subscribe': 'اشترك',
    'footer.sitemap': 'خريطة الموقع',
    'footer.contact': 'اتصل بنا',
    'footer.whyDubai': 'لماذا دبي',
    'footer.contactUs': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'footer.facebook': 'فيسبوك',
    'footer.instagram': 'إنستغرام',
    'footer.linkedin': 'لينكدإن',
    'footer.twitter': 'تويتر',
    'footer.youtube': 'يوتيوب',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.cookiePolicy': 'سياسة ملفات تعريف الارتباط',
    'footer.disclaimer': 'إخلاء المسؤولية',
    'footer.copyright': '© 2025 موداك للعقارات. جميع الحقوق محفوظة.',
    
    // Hero
    'hero.companyName': 'موداك العقارية',
    'landing.hero.heading': 'ابحث عن منزل أحلامك مع موداك للعقارات',
    
    // Buy page
    'buy.completionStatus': 'حالة الإنجاز',
    'buy.completedSecondary': 'مكتمل ثانوي',
    'buy.completedPrimary': 'مكتمل أساسي',
    'buy.propertyType': 'نوع العقار',
    'buy.minPrice': 'الحد الأدنى للسعر',
    'buy.maxPrice': 'الحد الأقصى للسعر',
    'buy.location': 'الموقع',
    'buy.type': 'النوع',
    'buy.buy': 'شراء',
    'buy.rent': 'إيجار',
    'buy.moreFilters': 'المزيد من الفلاتر',
    'buy.search': 'بحث عن العقارات',
    'buy.previous': 'السابق',
    'buy.next': 'التالي',
    'buy.showingRange': 'عرض',
    'buy.to': 'إلى',
    'buy.of': 'من',
    'buy.properties': 'عقار',
    'buy.any': 'أي',
    'buy.anyPropertyType': 'أي نوع عقار',
    'buy.min': 'الحد الأدنى',
    'buy.max': 'الحد الأقصى',
    'buy.beds': 'غرف',
    'buy.anyBedrooms': 'أي غرف نوم',
    'buy.bathrooms': 'حمامات',
    'buy.anyBathrooms': 'أي حمامات',
    'buy.handoverYear': 'سنة التسليم',
    'buy.anyYear': 'أي سنة',
    'buy.developer': 'المطور',
    'buy.searchDevelopers': 'ابحث عن المطورين...',
    'buy.locationHeading': 'أرقى العقارات في دبي',
    'buy.locationSubheading': 'كن جزءًا من أسلوب حياة عالمي المستوى وتمتع بعوائد لا مثيل لها وامتلك جزءًا من مستقبل دبي.',
    'buy.learnMore': 'اعرف المزيد',
    
    // Landing page sections
    'landing.feature.kicker': 'المشاريع المميزة',
    'landing.feature.heading': 'الفخامة مكشوفة، راحة ورقي',
    'landing.feature.subtitle': 'اكتشف مجموعة من أرقى العقارات في دبي التي تجسد الفخامة والأناقة والتصميم الفريد.',
    'landing.feature.viewAll': 'عرض جميع المشاريع',
    
    'landing.property.kicker': 'العقارات المميزة',
    'landing.property.heading': 'تعرّف على أبرز العقارات الواعدة من موداك للعقارات',
    'landing.property.subtitle': 'ادخل إلى عالم من الرقي الاستثنائي مع عقاراتنا المميزة. استكشف هذه الخيارات الحصرية وتخيّل ملاذك الفاخر التالي مع موداك للعقارات.',
    'landing.property.showing': 'عرض',
    'landing.property.of': 'من',
    'landing.property.properties': 'عقارات',
    'landing.property.tryAgain': 'حاول مرة أخرى',
    'landing.property.noProperties': 'لم يتم العثور على عقارات',
    'landing.property.loadMore': 'تحميل المزيد',
    'landing.property.showAll': 'عرض الكل',
    'landing.property.viewAll': 'عرض جميع العقارات',
    
    'landing.communities.kicker': 'استكشف المجتمعات',
    'landing.communities.heading': 'اكتشف أرقى أحياء دبي',
    'landing.communities.subtitle': 'تنقل عبر الفسيفساء الغنية لأرقى أحياء ومناطق دبي. من الملاذات الساحلية الهادئة إلى المراكز الحضرية النابضة بالحياة، تكشف مجموعتنا المختارة روح نمط الحياة المتميز في كل موقع.',
    'landing.communities.viewAll': 'عرض جميع المجتمعات',
    'landing.partners.heading': 'شركاء مع أبرز مطوري دبي',
    
    'landing.blog.kicker': 'رؤى وإلهام',
    'landing.blog.heading': 'أحدث رؤى العقارات',
    'landing.blog.subtitle': 'ابق على اطلاع مع التحليلات الخبيرة واتجاهات السوق والرؤى الداخلية حول المشهد العقاري الديناميكي في دبي.',
    'landing.blog.viewAll': 'عرض جميع المدونات',
    // Instagram section
    'landing.instagram.heading': 'تابعوا رحلتنا',
    'landing.instagram.subtitle': 'اكتشفوا العقارات الفاخرة وكواليس العمل ورؤى حصرية من وجهات العقارات الرائدة في دبي.',
    'landing.instagram.followFull': 'تابعوا @modacproperties',
    'landing.instagram.follow': 'تابعونا',
    'landing.instagram.cantSee': 'لا يظهر موجز الإنستغرام؟',
    'landing.instagram.visitDirect': 'زوروا حسابنا مباشرة',

    // Blog list page
    'blog.title': 'المدونة',
    'blog.list.introHeading': 'أحدث الرؤى والقصص',
    'blog.list.introSubheading': 'تحليلات خبراء وتحديثات سوقية وإلهام من مشهد العقارات في دبي.',
    'blog.notFound': 'المدونة غير موجودة',
    'blog.notFoundDescription': 'المقال الذي تبحث عنه غير موجود.',
    'blog.backToBlog': 'العودة إلى المدونة',
    
    'landing.cta.kicker': 'جاهز للبدء',
    'landing.cta.heading': 'رحلتك العقارية المتميزة تبدأ هنا',
    'landing.cta.subtitle': 'مستعد لبدء رحلتك العقارية المتميزة المصممة حصريًا لاحتياجاتك؟ ابدأ مسارك نحو تجارب نمط حياة استثنائية.',
    'landing.cta.button': 'اتصل بنا',
    
    // Solutions
    'solutions.connectSpecialist': 'تواصل مع خبير',
    'solutions.connectDescription': 'تواصل مع شبكتنا الملتزمة من أكثر من 400 متخصص جاهز لدعم احتياجاتك.',
    'solutions.listProperty': 'أدرج عقارك',
    'solutions.listDescription': 'احقق أقصى إمكانات عقارك من خلال أساليبنا الترويجية المتطورة وخبرتنا السوقية.',
    'solutions.downloadReport': 'تحميل التقرير',
    'solutions.downloadDescription': 'احصل على أحدث تحليل مفصل لسوق العقارات في دبي للربع الأول من 2025',
    'solutions.exploreProjects': 'استكشف مشاريع دبي',
    'solutions.exploreDescription': 'اكتشف واختر منزلك المثالي من مجموعتنا الشاملة لمشاريع دبي.',
    
    // Contact page
    'contact.title': 'اتصل بنا',
    'contact.kicker': 'تواصل مع الفخامة',
    'contact.heading': 'تواصل مع موداك للعقارات',
    'contact.description': 'موداك للعقارات هي واحدة من أكثر الاستشارات العقارية الأفريقية الموثوقة في دبي، الإمارات العربية المتحدة، أسسها السيد فابيان مفي مونيفونغ من الكاميرون. منذ إطلاقها في 2022 بخبرته في الصناعة ومجال أعماله الأخرى محلياً وعالمياً، كانت ناجحة وسنواصل الازدهار وتقديم خدمات عالية الجودة لعملائنا محلياً ودولياً الذين يكسبون الثقة بصدق وللمشترين العقاريين الجدد.',
    'contact.teamDescription': 'مدى فرقنا المهنية المدعومة بالبحث والخبرة لإعطاء معلومات ونصائح موثوقة لعملائنا لاتخاذ القرار الصحيح في البحث عن المنزل والاستثمار.',
    'contact.servicesDescription': 'خدمتنا تقدم الحصول على العقارات السكنية والتجارية والإيجار.',
    'contact.contactInfo': 'معلومات الاتصال',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.instagram': 'إنستغرام',
    'contact.businessHours': 'ساعات العمل',
    'contact.hours': 'الاثنين - الجمعة: 9 صباحاً إلى 7 مساءً',
    
    // Common components
    'common.units': 'وحدات',
    'common.from': 'من',
    'common.forSale': 'للبيع',
    'common.forRent': 'للإيجار',
    'common.available': 'متاح',
    'common.locationNotSpecified': 'الموقع غير محدد',
    'common.priceOnRequest': 'السعر عند الطلب',
    'common.readMore': 'اقرأ المزيد',
    'common.offPlan': 'قيد الإنشاء',
    
    // Form components
    'form.name': 'الاسم',
    'form.surname': 'الاسم الأخير',
    'form.email': 'البريد الإلكتروني',
    'form.telephone': 'الهاتف',
    'form.message': 'اكتب رسالتك هنا...',
    'form.submit': 'إرسال',
    'form.privacyText': 'بإرسال هذا النموذج، تؤكد أن هذا الموقع يمكنه تخزين المعلومات المرسلة، وتوافق على',
    'form.privacyPolicy': 'سياسة الخصوصية',
    'form.andConsent': 'وتوافق على',
    'form.cookies': 'ملفات تعريف الارتباط',
    'form.beingStored': 'يتم تخزينها على جهاز الكمبيوتر الخاص بك.',

    // Off Plans page
    'offplans.completionStatus': 'حالة الإنجاز',
    'offplans.completedSecondary': 'مكتمل ثانوي',
    'offplans.offPlanSecondary': 'خارج الخطة الثانوية',
    'offplans.completedPrimary': 'مكتمل أساسي',
    'offplans.offPlanPrimary': 'خارج الخطة الأساسية',
    'offplans.propertyType': 'نوع العقار',
    'offplans.apartment': 'شقة',
    'offplans.villa': 'فيلا',
    'offplans.townhouse': 'تاون هاوس',
    'offplans.penthouse': 'بنتهاوس',
    'offplans.studio': 'استوديو',
    'offplans.bedrooms': 'غرف النوم',
    'offplans.oneBedroom': 'غرفة نوم واحدة',
    'offplans.twoBedrooms': 'غرفتان نوم',
    'offplans.threeBedrooms': '3 غرف نوم',
    'offplans.fourBedrooms': '4 غرف نوم',
    'offplans.fivePlusBedrooms': '5+ غرف نوم',
    'offplans.bathrooms': 'الحمامات',
    'offplans.oneBathroom': 'حمام واحد',
    'offplans.twoBathrooms': 'حمامان',
    'offplans.threeBathrooms': '3 حمامات',
    'offplans.fourBathrooms': '4 حمامات',
    'offplans.fivePlusBathrooms': '5+ حمامات',
    'offplans.year': 'السنة',
    'offplans.handoverYear': 'سنة التسليم',
    'offplans.minPrice': 'الحد الأدنى للسعر',
    'offplans.maxPrice': 'الحد الأقصى للسعر',
    'offplans.locationPlaceholder': 'المدينة، المبنى أو المجتمع',
    'offplans.type': 'النوع',
    'offplans.buy': 'شراء',
    'offplans.rent': 'إيجار',
    'offplans.offPlan': 'خارج الخطة',
    'offplans.location': 'الموقع',
    'offplans.developer': 'المطور',
    'offplans.searchDevelopers': 'ابحث عن المطورين...',
    'offplans.searchProperties': 'بحث عن العقارات',
    'offplans.moreFilters': 'المزيد من الفلاتر',
    'offplans.searchFilters': 'فلاتر البحث',
    'offplans.anyBedrooms': 'أي غرف نوم',
    'offplans.anyBathrooms': 'أي حمامات',
    'offplans.fivePlusBeds': '5+ أسرة',
    'offplans.bed': 'سرير',
    'offplans.fivePlusBaths': '5+ حمامات',
    'offplans.bath': 'حمام',
    'offplans.beds': 'أسرة',
    'offplans.learnMore': 'اعرف المزيد',
  },
  fr: {
    // Navigation
    'nav.buy': 'Acheter',
    'nav.rent': 'Louer',
    'nav.projects': 'Projets',
    'nav.teams': 'Équipes',
    'nav.areas': 'Zones',
    'nav.services': 'Services',
    'nav.blogs': 'Blogs',
    'nav.more': 'Plus',
    'nav.listYourProperty': 'Listez Votre Propriété',
    
    // Services
    'services.propertyManagement': 'Gestion Immobilière',
    'services.mortgages': 'Hypothèques',
    'services.conveyancing': 'Transfert de Propriété',
    'services.shortTermRentals': 'Locations Courtes Durées',
    'services.propertySnagging': 'Inspection Immobilière',
    'services.partnerProgram': 'Programme Partenaire',
    
    // Team page
    'team.loading': 'Chargement des membres de l\'équipe...',
    'team.title': 'Rencontrez Notre Équipe',
    'team.subtitle': 'Découvrez notre équipe exceptionnelle de professionnels de l\'immobilier de luxe à Dubaï. Des agents experts dédiés à la réalisation de vos rêves immobiliers.',
    'team.management': 'Gestion',
    'team.brokers': 'Courtiers',
    'team.showing': 'Affichage',
    'team.teamMembers': 'membres de l\'équipe',
    'team.languages': 'Langues',
    
    // Common
    'common.currency': 'AED',
    'common.menu': 'Menu',
    
    // Footer
    'footer.newsletter': 'Recevez nos listes immobilières exceptionnelles directement dans votre boîte de réception.',
    'footer.emailLabel': 'Adresse e-mail pour l\'abonnement à la newsletter',
    'footer.emailPlaceholder': 'Entrez votre adresse e-mail',
    'footer.subscribe': 'S\'abonner',
    'footer.sitemap': 'Plan du site',
    'footer.contact': 'Contact',
    'footer.whyDubai': 'Pourquoi Dubaï',
    'footer.contactUs': 'Nous contacter',
    
    // Hero
    'hero.companyName': 'MODAC REAL ESTATE',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': 'Statut d\'achèvement',
    'buy.completedSecondary': 'Terminé secondaire',
    'buy.completedPrimary': 'Terminé primaire',
    'buy.propertyType': 'Type de propriété',
    'buy.minPrice': 'Prix minimum',
    'buy.maxPrice': 'Prix maximum',
    'buy.location': 'Emplacement',
    'buy.type': 'Type',
    'buy.buy': 'Acheter',
    'buy.rent': 'Louer',

    // Off Plans page
    'offplans.completionStatus': 'Statut d\'achèvement',
    'offplans.completedSecondary': 'Terminé secondaire',
    'offplans.offPlanSecondary': 'Hors Plan Secondaire',
    'offplans.completedPrimary': 'Terminé primaire',
    'offplans.offPlanPrimary': 'Hors Plan Primaire',
    'offplans.propertyType': 'Type de propriété',
    'offplans.apartment': 'Appartement',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Maison de ville',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Chambres',
    'offplans.oneBedroom': '1 Chambre',
    'offplans.twoBedrooms': '2 Chambres',
    'offplans.threeBedrooms': '3 Chambres',
    'offplans.fourBedrooms': '4 Chambres',
    'offplans.fivePlusBedrooms': '5+ Chambres',
    'offplans.bathrooms': 'Salles de bain',
    'offplans.oneBathroom': '1 Salle de bain',
    'offplans.twoBathrooms': '2 Salles de bain',
    'offplans.threeBathrooms': '3 Salles de bain',
    'offplans.fourBathrooms': '4 Salles de bain',
    'offplans.fivePlusBathrooms': '5+ Salles de bain',
    'offplans.year': 'Année',
    'offplans.handoverYear': 'Année de livraison',
    'offplans.minPrice': 'Prix minimum',
    'offplans.maxPrice': 'Prix maximum',
    'offplans.locationPlaceholder': 'Ville, bâtiment ou communauté',
    'offplans.type': 'Type',
    'offplans.buy': 'Acheter',
    'offplans.rent': 'Louer',
    'offplans.offPlan': 'Hors Plan',
    'offplans.location': 'Emplacement',
    'offplans.developer': 'Promoteur',
    'offplans.searchDevelopers': 'Rechercher des promoteurs...',
    'offplans.searchProperties': 'Rechercher des Propriétés',
    'offplans.moreFilters': 'Plus de Filtres',
    'offplans.searchFilters': 'Filtres de Recherche',
    'offplans.anyBedrooms': 'Toutes Chambres',
    'offplans.anyBathrooms': 'Toutes Salles de bain',
    'offplans.fivePlusBeds': '5+ Lits',
    'offplans.bed': 'Lit',
    'offplans.fivePlusBaths': '5+ Salles de bain',
    'offplans.bath': 'Bain',
    'offplans.beds': 'Lits',
    'offplans.learnMore': 'En Savoir Plus',
    
    // Landing page sections
    'landing.feature.kicker': 'PROJETS EN VEDETTE',
    'landing.feature.heading': 'Luxe Révélé, Confort et Sophistication',
    'landing.feature.subtitle': 'Découvrez une sélection curée des propriétés les plus exquises de Dubaï, incarnant luxe, élégance et design sans pareil.',
    'landing.feature.viewAll': 'Voir Tous les Projets',
    
    'landing.property.kicker': 'PROPRIÉTÉS EN VEDETTE',
    'landing.property.heading': 'Découvrez Certaines des Propriétés les Plus Prometteuses de Modac Real Estate',
    'landing.property.subtitle': 'Entrez dans un royaume de sophistication sans pareil avec nos propriétés en vedette. Explorez ces joyaux exclusifs et imaginez votre prochaine retraite luxueuse avec Modac Real Estate.',
    'landing.property.showing': 'Affichage',
    'landing.property.of': 'de',
    'landing.property.properties': 'propriétés',
    'landing.property.tryAgain': 'Réessayer',
    'landing.property.noProperties': 'Aucune Propriété Trouvée',
    'landing.property.loadMore': 'Charger Plus',
    'landing.property.showAll': 'Afficher Tout',
    'landing.property.viewAll': 'VOIR TOUTES LES PROPRIÉTÉS',
    
    'landing.communities.kicker': 'EXPLORER LES COMMUNAUTÉS',
    'landing.communities.heading': 'Découvrez les Quartiers les Plus Désirables de Dubaï',
    'landing.communities.subtitle': 'Naviguez à travers la riche mosaïque des districts et quartiers les plus désirables de Dubaï. Des sanctuaires côtiers paisibles aux centres métropolitains vibrants, notre collection soigneusement choisie révèle l\'esprit du mode de vie premium dans chaque lieu.',
    'landing.communities.viewAll': 'Voir Toutes les Communautés',
    
    'landing.blog.kicker': 'PERSPECTIVES ET INSPIRATION',
    'landing.blog.heading': 'Dernières Perspectives Immobilières',
    'landing.blog.subtitle': 'Restez informé avec des analyses d\'experts, des tendances du marché et des perspectives internes sur le paysage immobilier dynamique de Dubaï.',
    'landing.blog.viewAll': 'VOIR TOUS LES BLOGS',
    
    'landing.cta.kicker': 'PRÊT À COMMENCER',
    'landing.cta.heading': 'Votre Voyage Immobilier Premium Commence Ici',
    'landing.cta.subtitle': 'Prêt à commencer votre voyage immobilier premium personnalisé exclusivement pour vos besoins ? Initiez votre chemin vers des expériences de mode de vie extraordinaires.',
    'landing.cta.button': 'NOUS CONTACTER',
    
    // Solutions
    'solutions.connectSpecialist': 'Connectez-vous avec un Spécialiste',
    'solutions.connectDescription': 'Connectez-vous avec notre réseau engagé de plus de 400 professionnels spécialisés prêts à soutenir vos besoins.',
    'solutions.listProperty': 'Listez Votre Propriété',
    'solutions.listDescription': 'Maximisez le potentiel de votre propriété grâce à nos approches promotionnelles sophistiquées et notre expertise du marché.',
    'solutions.downloadReport': 'Télécharger le Rapport',
    'solutions.downloadDescription': 'Accédez à la plus récente Analyse Détaillée du Marché Immobilier de Dubaï pour Q1 2025',
    'solutions.exploreProjects': 'Explorer les Projets de Dubaï',
    'solutions.exploreDescription': 'Découvrez et sélectionnez votre maison parfaite parmi notre collection complète de développements de Dubaï.',
    
    // Contact page
    'contact.title': 'Nous Contacter',
    'contact.kicker': 'CONNECTEZ-VOUS AVEC LE LUXE',
    'contact.heading': 'Entrez en Contact avec Modac Real Estate',
    'contact.description': 'Modac Real Estate est l\'une des consultances immobilières africaines les plus reconnues et fiables de Dubaï, aux Émirats Arabes Unis, fondée par M. Fabien Mvie Monefong du Cameroun. Depuis son lancement en 2022 avec son expérience dans l\'industrie et dans le domaine de ses autres entreprises localement et mondialement, elle a été couronnée de succès et nous continuerons à prospérer et à fournir des services de qualité à nos clients localement et internationalement qui gagnent sincèrement la confiance et aux nouveaux acheteurs immobiliers.',
    'contact.teamDescription': 'L\'étendue de nos équipes professionnelles axées sur la recherche et l\'expérience pour donner des informations et des conseils fiables à nos clients pour prendre la bonne décision pour la recherche de maison et l\'investissement.',
    'contact.servicesDescription': 'Notre service offre l\'acquisition, la location de biens immobiliers résidentiels et commerciaux.',
    'contact.contactInfo': 'Informations de Contact',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    'contact.businessHours': 'Heures d\'Ouverture',
    'contact.hours': 'Lun – Ven: 9h à 19h',
    
    // Common components
    'common.units': 'UNITÉS',
    'common.from': 'À PARTIR DE',
    'common.readMore': 'LIRE PLUS',
    'common.forSale': 'À VENDRE',
    'common.forRent': 'À LOUER',
    'common.offPlan': 'HORS PLAN',
    
    // Form components
    'form.name': 'Nom',
    'form.surname': 'Nom de famille',
    'form.email': 'Email',
    'form.telephone': 'Téléphone',
    'form.message': 'Écrivez votre message ici...',
    'form.submit': 'Soumettre',
    'form.privacyText': 'En soumettant ce formulaire, vous confirmez que ce site web peut stocker vos informations soumises, acceptez notre',
    'form.privacyPolicy': 'politique de confidentialité',
    'form.andConsent': 'et consentez à',
    'form.cookies': 'cookies',
    'form.beingStored': 'être stockés sur votre ordinateur.',
  },
  es: {
    // Navigation
    'nav.buy': 'Comprar',
    'nav.rent': 'Alquilar',
    'nav.projects': 'Proyectos',
    'nav.teams': 'Equipos',
    'nav.areas': 'Áreas',
    'nav.services': 'Servicios',
    'nav.blogs': 'Blogs',
    'nav.more': 'Más',
    'nav.listYourProperty': 'Lista Tu Propiedad',
    
    // Services
    'services.propertyManagement': 'Gestión de Propiedades',
    'services.mortgages': 'Hipotecas',
    'services.conveyancing': 'Transferencia de Propiedad',
    'services.shortTermRentals': 'Alquileres a Corto Plazo',
    'services.propertySnagging': 'Inspección de Propiedades',
    'services.partnerProgram': 'Programa de Socios',
    
    // Team page
    'team.loading': 'Cargando miembros del equipo...',
    'team.title': 'Conoce Nuestro Equipo',
    'team.subtitle': 'Descubre nuestro equipo excepcional de profesionales inmobiliarios de lujo en Dubái. Agentes expertos dedicados a hacer realidad tus sueños inmobiliarios.',
    'team.management': 'Gestión',
    'team.brokers': 'Corredores',
    'team.showing': 'Mostrando',
    'team.teamMembers': 'miembros del equipo',
    'team.languages': 'Idiomas',
    
    // Common
    'common.currency': 'AED',
    'common.menu': 'Menú',
    
    // Footer
    'footer.newsletter': 'Recibe nuestras listas inmobiliarias excepcionales directamente en tu bandeja de entrada.',
    'footer.emailLabel': 'Dirección de correo electrónico para suscripción al boletín',
    'footer.emailPlaceholder': 'Ingresa tu dirección de correo electrónico',
    'footer.subscribe': 'Suscribirse',
    'footer.sitemap': 'Mapa del sitio',
    'footer.contact': 'Contacto',
    'footer.whyDubai': 'Por qué Dubái',
    'footer.contactUs': 'Contáctanos',
    
    // Hero
    'hero.companyName': 'MODAC REAL ESTATE',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': 'Estado de finalización',
    'buy.completedSecondary': 'Completado secundario',
    'buy.completedPrimary': 'Completado primario',
    'buy.propertyType': 'Tipo de propiedad',
    'buy.minPrice': 'Precio mínimo',
    'buy.maxPrice': 'Precio máximo',
    'buy.location': 'Ubicación',
    'buy.type': 'Tipo',
    'buy.buy': 'Comprar',
    'buy.rent': 'Alquilar',

    // Off Plans page (copying English for now)
    'offplans.completionStatus': 'Completion Status',
    'offplans.completedSecondary': 'Completed Secondary',
    'offplans.offPlanSecondary': 'Off Plan Secondary',
    'offplans.completedPrimary': 'Completed Primary',
    'offplans.offPlanPrimary': 'Off Plan Primary',
    'offplans.propertyType': 'Property Type',
    'offplans.apartment': 'Apartment',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Townhouse',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Bedrooms',
    'offplans.oneBedroom': '1 Bedroom',
    'offplans.twoBedrooms': '2 Bedrooms',
    'offplans.threeBedrooms': '3 Bedrooms',
    'offplans.fourBedrooms': '4 Bedrooms',
    'offplans.fivePlusBedrooms': '5+ Bedrooms',
    'offplans.bathrooms': 'Bathrooms',
    'offplans.oneBathroom': '1 Bathroom',
    'offplans.twoBathrooms': '2 Bathrooms',
    'offplans.threeBathrooms': '3 Bathrooms',
    'offplans.fourBathrooms': '4 Bathrooms',
    'offplans.fivePlusBathrooms': '5+ Bathrooms',
    'offplans.year': 'Year',
    'offplans.handoverYear': 'Handover Year',
    'offplans.minPrice': 'Min Price',
    'offplans.maxPrice': 'Max Price',
    'offplans.locationPlaceholder': 'City, building or community',
    'offplans.type': 'Type',
    'offplans.buy': 'Buy',
    'offplans.rent': 'Rent',
    'offplans.offPlan': 'Off Plan',
    'offplans.location': 'Location',
    'offplans.developer': 'Developer',
    'offplans.searchDevelopers': 'Search developers...',
    'offplans.searchProperties': 'Search Properties',
    'offplans.moreFilters': 'More Filters',
    'offplans.searchFilters': 'Search Filters',
    'offplans.anyBedrooms': 'Any Bedrooms',
    'offplans.anyBathrooms': 'Any Bathrooms',
    'offplans.fivePlusBeds': '5+ Beds',
    'offplans.bed': 'Bed',
    'offplans.fivePlusBaths': '5+ Baths',
    'offplans.bath': 'Bath',
    'offplans.beds': 'Beds',
    'offplans.learnMore': 'Learn More',
    
    // Common components
    'common.units': 'UNIDADES',
    'common.from': 'DESDE',
    'common.readMore': 'LEER MÁS',
    'common.forSale': 'EN VENTA',
    'common.forRent': 'EN ALQUILER',
    'common.offPlan': 'FUERA DE PLANO',
    
    // Form components
    'form.name': 'Nombre',
    'form.surname': 'Apellido',
    'form.email': 'Email',
    'form.telephone': 'Teléfono',
    'form.message': 'Escribe tu mensaje aquí...',
    'form.submit': 'Enviar',
    'form.privacyText': 'Al enviar este formulario, confirmas que este sitio web puede almacenar tu información enviada, aceptas nuestra',
    'form.privacyPolicy': 'política de privacidad',
    'form.andConsent': 'y consientes a',
    'form.cookies': 'cookies',
    'form.beingStored': 'ser almacenadas en tu computadora.',
  },
  de: {
    // Navigation
    'nav.buy': 'Kaufen',
    'nav.rent': 'Mieten',
    'nav.projects': 'Projekte',
    'nav.teams': 'Teams',
    'nav.areas': 'Bereiche',
    'nav.services': 'Dienstleistungen',
    'nav.blogs': 'Blogs',
    'nav.more': 'Mehr',
    'nav.listYourProperty': 'Ihre Immobilie Auflisten',
    
    // Services
    'services.propertyManagement': 'Immobilienverwaltung',
    'services.mortgages': 'Hypotheken',
    'services.conveyancing': 'Eigentumsübertragung',
    'services.shortTermRentals': 'Kurzzeitmieten',
    'services.propertySnagging': 'Immobilieninspektion',
    'services.partnerProgram': 'Partnerprogramm',
    
    // Team page
    'team.loading': 'Teammitglieder werden geladen...',
    'team.title': 'Lernen Sie Unser Team Kennen',
    'team.subtitle': 'Entdecken Sie unser außergewöhnliches Team von Luxus-Immobilienprofis in Dubai. Expertenmakler, die sich der Verwirklichung Ihrer Immobilienträume widmen.',
    'team.management': 'Verwaltung',
    'team.brokers': 'Makler',
    'team.showing': 'Anzeigen',
    'team.teamMembers': 'Teammitglieder',
    'team.languages': 'Sprachen',
    
    // Common
    'common.currency': 'AED',
    'common.menu': 'Menü',
    'common.units': 'EINHEITEN',
    'common.from': 'AB',
    'common.readMore': 'MEHR LESEN',
    'common.forSale': 'ZU VERKAUFEN',
    'common.forRent': 'ZU MIETEN',
    'common.offPlan': 'OFF-PLAN',
    
    // Form components
    'form.name': 'Name',
    'form.surname': 'Nachname',
    'form.email': 'Email',
    'form.telephone': 'Telefon',
    'form.message': 'Schreiben Sie Ihre Nachricht hier...',
    'form.submit': 'Senden',
    'form.privacyText': 'Durch das Absenden dieses Formulars bestätigen Sie, dass diese Website Ihre übermittelten Informationen speichern kann, stimmen Sie unserer',
    'form.privacyPolicy': 'Datenschutzrichtlinie',
    'form.andConsent': 'zu und stimmen zu',
    'form.cookies': 'Cookies',
    'form.beingStored': 'auf Ihrem Computer gespeichert werden.',
    
    // Footer
    'footer.newsletter': 'Erhalten Sie unsere außergewöhnlichen Immobilienlisten direkt in Ihrem Posteingang.',
    'footer.emailLabel': 'E-Mail-Adresse für Newsletter-Anmeldung',
    'footer.emailPlaceholder': 'Geben Sie Ihre E-Mail-Adresse ein',
    'footer.subscribe': 'Abonnieren',
    'footer.sitemap': 'Sitemap',
    'footer.contact': 'Kontakt',
    'footer.whyDubai': 'Warum Dubai',
    'footer.contactUs': 'Kontaktieren Sie uns',
    
    // Hero
    'hero.companyName': 'MODAC REAL ESTATE',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': 'Fertigstellungsstatus',
    'buy.completedSecondary': 'Fertiggestellt sekundär',
    'buy.completedPrimary': 'Fertiggestellt primär',
    'buy.propertyType': 'Immobilientyp',
    'buy.minPrice': 'Mindestpreis',
    'buy.maxPrice': 'Höchstpreis',
    'buy.location': 'Standort',
    'buy.type': 'Typ',
    'buy.buy': 'Kaufen',
    'buy.rent': 'Mieten',
    // Off Plans page
    'offplans.completionStatus': 'Completion Status',
    'offplans.completedSecondary': 'Completed Secondary',
    'offplans.offPlanSecondary': 'Off Plan Secondary',
    'offplans.completedPrimary': 'Completed Primary',
    'offplans.offPlanPrimary': 'Off Plan Primary',
    'offplans.propertyType': 'Property Type',
    'offplans.apartment': 'Apartment',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Townhouse',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Bedrooms',
    'offplans.oneBedroom': '1 Bedroom',
    'offplans.twoBedrooms': '2 Bedrooms',
    'offplans.threeBedrooms': '3 Bedrooms',
    'offplans.fourBedrooms': '4 Bedrooms',
    'offplans.fivePlusBedrooms': '5+ Bedrooms',
    'offplans.bathrooms': 'Bathrooms',
    'offplans.oneBathroom': '1 Bathroom',
    'offplans.twoBathrooms': '2 Bathrooms',
    'offplans.threeBathrooms': '3 Bathrooms',
    'offplans.fourBathrooms': '4 Bathrooms',
    'offplans.fivePlusBathrooms': '5+ Bathrooms',
    'offplans.year': 'Year',
    'offplans.handoverYear': 'Handover Year',
    'offplans.minPrice': 'Min Price',
    'offplans.maxPrice': 'Max Price',
    'offplans.locationPlaceholder': 'City, building or community',
    'offplans.type': 'Type',
    'offplans.buy': 'Buy',
    'offplans.rent': 'Rent',
    'offplans.offPlan': 'Off Plan',
    'offplans.location': 'Location',
    'offplans.developer': 'Developer',
    'offplans.searchDevelopers': 'Search developers...',
    'offplans.searchProperties': 'Search Properties',
    'offplans.moreFilters': 'More Filters',
    'offplans.searchFilters': 'Search Filters',
    'offplans.anyBedrooms': 'Any Bedrooms',
    'offplans.anyBathrooms': 'Any Bathrooms',
    'offplans.fivePlusBeds': '5+ Beds',
    'offplans.bed': 'Bed',
    'offplans.fivePlusBaths': '5+ Baths',
    'offplans.bath': 'Bath',
    'offplans.beds': 'Beds',
    'offplans.learnMore': 'Learn More',
  },
  it: {
    // Navigation
    'nav.buy': 'Acquista',
    'nav.rent': 'Affitta',
    'nav.projects': 'Progetti',
    'nav.teams': 'Team',
    'nav.areas': 'Aree',
    'nav.services': 'Servizi',
    'nav.blogs': 'Blog',
    'nav.more': 'Altro',
    'nav.listYourProperty': 'Elenca La Tua Proprietà',
    
    // Services
    'services.propertyManagement': 'Gestione Immobiliare',
    'services.mortgages': 'Mutui',
    'services.conveyancing': 'Trasferimento Proprietà',
    'services.shortTermRentals': 'Affitti Brevi',
    'services.propertySnagging': 'Ispezione Immobiliare',
    'services.partnerProgram': 'Programma Partner',
    
    // Team page
    'team.loading': 'Caricamento membri del team...',
    'team.title': 'Incontra Il Nostro Team',
    'team.subtitle': 'Scopri il nostro team eccezionale di professionisti immobiliari di lusso a Dubai. Agenti esperti dedicati a realizzare i tuoi sogni immobiliari.',
    'team.management': 'Gestione',
    'team.brokers': 'Agenti',
    'team.showing': 'Mostrando',
    'team.teamMembers': 'membri del team',
    'team.languages': 'Lingue',
    
    // Common
    'common.currency': 'AED',
    'common.menu': 'Menu',
    
    // Footer
    'footer.newsletter': 'Ricevi le nostre eccezionali liste immobiliari direttamente nella tua casella di posta.',
    'footer.emailLabel': 'Indirizzo email per l\'iscrizione alla newsletter',
    'footer.emailPlaceholder': 'Inserisci il tuo indirizzo email',
    'footer.subscribe': 'Iscriviti',
    'footer.sitemap': 'Mappa del sito',
    'footer.contact': 'Contatto',
    'footer.whyDubai': 'Perché Dubai',
    'footer.contactUs': 'Contattaci',
    
    // Hero
    'hero.companyName': 'MODAC REAL ESTATE',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': 'Stato di completamento',
    'buy.completedSecondary': 'Completato secondario',
    'buy.completedPrimary': 'Completato primario',
    'buy.propertyType': 'Tipo di proprietà',
    'buy.minPrice': 'Prezzo minimo',
    'buy.maxPrice': 'Prezzo massimo',
    'buy.location': 'Posizione',
    'buy.type': 'Tipo',
    'buy.buy': 'Acquista',
    'buy.rent': 'Affitta',
    // Off Plans page
    'offplans.completionStatus': 'Completion Status',
    'offplans.completedSecondary': 'Completed Secondary',
    'offplans.offPlanSecondary': 'Off Plan Secondary',
    'offplans.completedPrimary': 'Completed Primary',
    'offplans.offPlanPrimary': 'Off Plan Primary',
    'offplans.propertyType': 'Property Type',
    'offplans.apartment': 'Apartment',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Townhouse',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Bedrooms',
    'offplans.oneBedroom': '1 Bedroom',
    'offplans.twoBedrooms': '2 Bedrooms',
    'offplans.threeBedrooms': '3 Bedrooms',
    'offplans.fourBedrooms': '4 Bedrooms',
    'offplans.fivePlusBedrooms': '5+ Bedrooms',
    'offplans.bathrooms': 'Bathrooms',
    'offplans.oneBathroom': '1 Bathroom',
    'offplans.twoBathrooms': '2 Bathrooms',
    'offplans.threeBathrooms': '3 Bathrooms',
    'offplans.fourBathrooms': '4 Bathrooms',
    'offplans.fivePlusBathrooms': '5+ Bathrooms',
    'offplans.year': 'Year',
    'offplans.handoverYear': 'Handover Year',
    'offplans.minPrice': 'Min Price',
    'offplans.maxPrice': 'Max Price',
    'offplans.locationPlaceholder': 'City, building or community',
    'offplans.type': 'Type',
    'offplans.buy': 'Buy',
    'offplans.rent': 'Rent',
    'offplans.offPlan': 'Off Plan',
    'offplans.location': 'Location',
    'offplans.developer': 'Developer',
    'offplans.searchDevelopers': 'Search developers...',
    'offplans.searchProperties': 'Search Properties',
    'offplans.moreFilters': 'More Filters',
    'offplans.searchFilters': 'Search Filters',
    'offplans.anyBedrooms': 'Any Bedrooms',
    'offplans.anyBathrooms': 'Any Bathrooms',
    'offplans.fivePlusBeds': '5+ Beds',
    'offplans.bed': 'Bed',
    'offplans.fivePlusBaths': '5+ Baths',
    'offplans.bath': 'Bath',
    'offplans.beds': 'Beds',
    'offplans.learnMore': 'Learn More',
  },
  pt: {
    // Navigation
    'nav.buy': 'Comprar',
    'nav.rent': 'Alugar',
    'nav.projects': 'Projetos',
    'nav.teams': 'Equipes',
    'nav.areas': 'Áreas',
    'nav.services': 'Serviços',
    'nav.blogs': 'Blogs',
    'nav.more': 'Mais',
    'nav.listYourProperty': 'Liste Sua Propriedade',
    
    // Services
    'services.propertyManagement': 'Gestão de Propriedades',
    'services.mortgages': 'Hipotecas',
    'services.conveyancing': 'Transferência de Propriedade',
    'services.shortTermRentals': 'Aluguéis de Curto Prazo',
    'services.propertySnagging': 'Inspeção de Propriedades',
    'services.partnerProgram': 'Programa de Parceiros',
    
    // Team page
    'team.loading': 'Carregando membros da equipe...',
    'team.title': 'Conheça Nossa Equipe',
    'team.subtitle': 'Descubra nossa equipe excepcional de profissionais imobiliários de luxo em Dubai. Agentes especialistas dedicados a realizar seus sonhos imobiliários.',
    'team.management': 'Gestão',
    'team.brokers': 'Corretores',
    'team.showing': 'Mostrando',
    'team.teamMembers': 'membros da equipe',
    'team.languages': 'Idiomas',
    
    // Common
    'common.currency': 'AED',
    'common.menu': 'Menu',
    
    // Footer
    'footer.newsletter': 'Receba nossas listagens imobiliárias excepcionais diretamente na sua caixa de entrada.',
    'footer.emailLabel': 'Endereço de email para inscrição na newsletter',
    'footer.emailPlaceholder': 'Digite seu endereço de email',
    'footer.subscribe': 'Inscrever-se',
    'footer.sitemap': 'Mapa do site',
    'footer.contact': 'Contato',
    'footer.whyDubai': 'Por que Dubai',
    'footer.contactUs': 'Entre em contato',
    
    // Hero
    'hero.companyName': 'MODAC PROPERTIES',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': 'Status de conclusão',
    'buy.completedSecondary': 'Concluído secundário',
    'buy.completedPrimary': 'Concluído primário',
    'buy.propertyType': 'Tipo de propriedade',
    'buy.minPrice': 'Preço mínimo',
    'buy.maxPrice': 'Preço máximo',
    'buy.location': 'Cidade, edifício ou comunidade',
    'buy.type': 'Tipo',
    'buy.buy': 'Comprar',
    'buy.rent': 'Alugar',
    // Off Plans page
    'offplans.completionStatus': 'Completion Status',
    'offplans.completedSecondary': 'Completed Secondary',
    'offplans.offPlanSecondary': 'Off Plan Secondary',
    'offplans.completedPrimary': 'Completed Primary',
    'offplans.offPlanPrimary': 'Off Plan Primary',
    'offplans.propertyType': 'Property Type',
    'offplans.apartment': 'Apartment',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Townhouse',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Bedrooms',
    'offplans.oneBedroom': '1 Bedroom',
    'offplans.twoBedrooms': '2 Bedrooms',
    'offplans.threeBedrooms': '3 Bedrooms',
    'offplans.fourBedrooms': '4 Bedrooms',
    'offplans.fivePlusBedrooms': '5+ Bedrooms',
    'offplans.bathrooms': 'Bathrooms',
    'offplans.oneBathroom': '1 Bathroom',
    'offplans.twoBathrooms': '2 Bathrooms',
    'offplans.threeBathrooms': '3 Bathrooms',
    'offplans.fourBathrooms': '4 Bathrooms',
    'offplans.fivePlusBathrooms': '5+ Bathrooms',
    'offplans.year': 'Year',
    'offplans.handoverYear': 'Handover Year',
    'offplans.minPrice': 'Min Price',
    'offplans.maxPrice': 'Max Price',
    'offplans.locationPlaceholder': 'City, building or community',
    'offplans.type': 'Type',
    'offplans.buy': 'Buy',
    'offplans.rent': 'Rent',
    'offplans.offPlan': 'Off Plan',
    'offplans.location': 'Location',
    'offplans.developer': 'Developer',
    'offplans.searchDevelopers': 'Search developers...',
    'offplans.searchProperties': 'Search Properties',
    'offplans.moreFilters': 'More Filters',
    'offplans.searchFilters': 'Search Filters',
    'offplans.anyBedrooms': 'Any Bedrooms',
    'offplans.anyBathrooms': 'Any Bathrooms',
    'offplans.fivePlusBeds': '5+ Beds',
    'offplans.bed': 'Bed',
    'offplans.fivePlusBaths': '5+ Baths',
    'offplans.bath': 'Bath',
    'offplans.beds': 'Beds',
    'offplans.learnMore': 'Learn More',
  },
  ru: {
    // Navigation
    'nav.buy': 'Купить',
    'nav.rent': 'Арендовать',
    'nav.projects': 'Проекты',
    'nav.teams': 'Команды',
    'nav.areas': 'Районы',
    'nav.services': 'Услуги',
    'nav.blogs': 'Блоги',
    'nav.more': 'Больше',
    'nav.listYourProperty': 'Разместить Недвижимость',
    
    // Services
    'services.propertyManagement': 'Управление Недвижимостью',
    'services.mortgages': 'Ипотека',
    'services.conveyancing': 'Передача Права Собственности',
    'services.shortTermRentals': 'Краткосрочная Аренда',
    'services.propertySnagging': 'Инспекция Недвижимости',
    'services.partnerProgram': 'Партнерская Программа',
    
    // Team page
    'team.loading': 'Загрузка участников команды...',
    'team.title': 'Познакомьтесь с Нашей Командой',
    'team.subtitle': 'Откройте для себя нашу исключительную команду профессионалов элитной недвижимости в Дубае. Экспертные агенты, посвященные воплощению ваших мечтаний о недвижимости.',
    'team.management': 'Управление',
    'team.brokers': 'Брокеры',
    'team.showing': 'Показано',
    'team.teamMembers': 'участников команды',
    'team.languages': 'Языки',
    
    // Common
    'common.currency': 'Дирхам',
    'common.menu': 'Меню',
    
    // Footer
    'footer.newsletter': 'Получайте наши исключительные списки недвижимости прямо в ваш почтовый ящик.',
    'footer.emailLabel': 'Адрес электронной почты для подписки на рассылку',
    'footer.emailPlaceholder': 'Введите ваш адрес электронной почты',
    'footer.subscribe': 'Подписаться',
    'footer.sitemap': 'Карта сайта',
    'footer.contact': 'Контакты',
    'footer.whyDubai': 'Почему Дубай',
    'footer.contactUs': 'Связаться с нами',
    
    // Hero
    'hero.companyName': 'MODAC PROPERTIES',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': 'Статус завершения',
    'buy.completedSecondary': 'Завершено вторично',
    'buy.completedPrimary': 'Завершено первично',
    'buy.propertyType': 'Тип недвижимости',
    'buy.minPrice': 'Минимальная цена',
    'buy.maxPrice': 'Максимальная цена',
    'buy.location': 'Местоположение',
    'buy.type': 'Тип',
    'buy.buy': 'Купить',
    'buy.rent': 'Арендовать',
    // Off Plans page
    'offplans.completionStatus': 'Completion Status',
    'offplans.completedSecondary': 'Completed Secondary',
    'offplans.offPlanSecondary': 'Off Plan Secondary',
    'offplans.completedPrimary': 'Completed Primary',
    'offplans.offPlanPrimary': 'Off Plan Primary',
    'offplans.propertyType': 'Property Type',
    'offplans.apartment': 'Apartment',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Townhouse',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Bedrooms',
    'offplans.oneBedroom': '1 Bedroom',
    'offplans.twoBedrooms': '2 Bedrooms',
    'offplans.threeBedrooms': '3 Bedrooms',
    'offplans.fourBedrooms': '4 Bedrooms',
    'offplans.fivePlusBedrooms': '5+ Bedrooms',
    'offplans.bathrooms': 'Bathrooms',
    'offplans.oneBathroom': '1 Bathroom',
    'offplans.twoBathrooms': '2 Bathrooms',
    'offplans.threeBathrooms': '3 Bathrooms',
    'offplans.fourBathrooms': '4 Bathrooms',
    'offplans.fivePlusBathrooms': '5+ Bathrooms',
    'offplans.year': 'Year',
    'offplans.handoverYear': 'Handover Year',
    'offplans.minPrice': 'Min Price',
    'offplans.maxPrice': 'Max Price',
    'offplans.locationPlaceholder': 'City, building or community',
    'offplans.type': 'Type',
    'offplans.buy': 'Buy',
    'offplans.rent': 'Rent',
    'offplans.offPlan': 'Off Plan',
    'offplans.location': 'Location',
    'offplans.developer': 'Developer',
    'offplans.searchDevelopers': 'Search developers...',
    'offplans.searchProperties': 'Search Properties',
    'offplans.moreFilters': 'More Filters',
    'offplans.searchFilters': 'Search Filters',
    'offplans.anyBedrooms': 'Any Bedrooms',
    'offplans.anyBathrooms': 'Any Bathrooms',
    'offplans.fivePlusBeds': '5+ Beds',
    'offplans.bed': 'Bed',
    'offplans.fivePlusBaths': '5+ Baths',
    'offplans.bath': 'Bath',
    'offplans.beds': 'Beds',
    'offplans.learnMore': 'Learn More',
    
    // Landing page sections
    'landing.feature.kicker': 'РЕКОМЕНДУЕМЫЕ ПРОЕКТЫ',
    'landing.feature.heading': 'Роскошь Раскрыта, Комфорт и Изысканность',
    'landing.feature.subtitle': 'Откройте для себя тщательно отобранную коллекцию самых изысканных объектов недвижимости Дубая, воплощающих роскошь, элегантность и непревзойденный дизайн.',
    'landing.feature.viewAll': 'Посмотреть Все Проекты',
    
    'landing.property.kicker': 'РЕКОМЕНДУЕМАЯ НЕДВИЖИМОСТЬ',
    'landing.property.heading': 'Ознакомьтесь с Самыми Перспективными Объектами от Modac Real Estate',
    'landing.property.subtitle': 'Войдите в мир непревзойденной изысканности с нашей рекомендуемой недвижимостью. Исследуйте эти эксклюзивные жемчужины и представьте себе свой следующий роскошный отдых с Modac Real Estate.',
    'landing.property.showing': 'Показано',
    'landing.property.of': 'из',
    'landing.property.properties': 'объектов',
    'landing.property.tryAgain': 'Попробовать Снова',
    'landing.property.noProperties': 'Объекты Не Найдены',
    'landing.property.loadMore': 'Загрузить Больше',
    'landing.property.showAll': 'Показать Все',
    'landing.property.viewAll': 'ПОСМОТРЕТЬ ВСЕ ОБЪЕКТЫ',
    
    'landing.communities.kicker': 'ИССЛЕДУЙТЕ СООБЩЕСТВА',
    'landing.communities.heading': 'Откройте Самые Желаемые Районы Дубая',
    'landing.communities.subtitle': 'Навигация по богатой мозаике самых желаемых районов и кварталов Дубая. От мирных прибрежных убежищ до оживленных мегаполисов, наша тщательно отобранная коллекция раскрывает дух премиального образа жизни в каждом месте.',
    'landing.communities.viewAll': 'Посмотреть Все Сообщества',
    
    'landing.blog.kicker': 'ИНСАЙТЫ И ВДОХНОВЕНИЕ',
    'landing.blog.heading': 'Последние Инсайты Недвижимости',
    'landing.blog.subtitle': 'Оставайтесь в курсе с экспертным анализом, рыночными тенденциями и внутренними перспективами динамичного ландшафта недвижимости Дубая.',
    'landing.blog.viewAll': 'ПОСМОТРЕТЬ ВСЕ БЛОГИ',
    
    'landing.cta.kicker': 'ГОТОВЫ НАЧАТЬ',
    'landing.cta.heading': 'Ваше Премиальное Путешествие в Недвижимости Начинается Здесь',
    'landing.cta.subtitle': 'Готовы начать свое премиальное путешествие в недвижимости, настроенное исключительно под ваши потребности? Инициируйте свой путь к необыкновенным жизненным опытам.',
    'landing.cta.button': 'СВЯЗАТЬСЯ С НАМИ',
    
    // Solutions
    'solutions.connectSpecialist': 'Связаться со Специалистом',
    'solutions.connectDescription': 'Свяжитесь с нашей преданной сетью из более чем 400 специализированных профессионалов, готовых поддержать ваши потребности.',
    'solutions.listProperty': 'Разместить Вашу Недвижимость',
    'solutions.listDescription': 'Максимизируйте потенциал вашей недвижимости через наши сложные рекламные подходы и рыночную экспертизу.',
    'solutions.downloadReport': 'Скачать Отчет',
    'solutions.downloadDescription': 'Получите доступ к самому последнему Детальному Анализу Рынка Недвижимости Дубая за Q1 2025',
    'solutions.exploreProjects': 'Исследовать Проекты Дубая',
    'solutions.exploreDescription': 'Откройте и выберите свой идеальный дом из нашей всеобъемлющей коллекции разработок Дубая.',
    
    // Contact page
    'contact.title': 'Связаться с Нами',
    'contact.kicker': 'ПОДКЛЮЧИТЕСЬ К РОСКОШИ',
    'contact.heading': 'Свяжитесь с Modac Real Estate',
    'contact.description': 'Modac Real Estate является одной из самых признанных африканских доверенных консалтинговых компаний по недвижимости в Дубае, Объединенные Арабские Эмираты, основанной г-ном Фабьеном Мвие Монефонгом из Камеруна. С момента запуска в 2022 году с его опытом в отрасли и в области его других предприятий локально и глобально, она была успешной, и мы продолжим процветать и предоставлять качественные услуги нашим клиентам как локально, так и международно, которые искренне завоевывают доверие и новым покупателям недвижимости.',
    'contact.teamDescription': 'Объем наших опытных исследовательских и профессиональных команд для предоставления надежной информации и советов нашим клиентам для принятия правильного решения в поиске дома и инвестициях.',
    'contact.servicesDescription': 'Наш сервис предлагает приобретение, аренду жилой и коммерческой недвижимости.',
    'contact.contactInfo': 'Контактная Информация',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    'contact.businessHours': 'Рабочие Часы',
    'contact.hours': 'Пн – Пт: 9:00 до 19:00',
    
    // Common components
    'common.units': 'ЕДИНИЦЫ',
    'common.from': 'ОТ',
    'common.readMore': 'ЧИТАТЬ ДАЛЬШЕ',
    'common.forSale': 'НА ПРОДАЖУ',
    'common.forRent': 'В АРЕНДУ',
    'common.offPlan': 'ВНЕ ПЛАНА',
    
    // Form components
    'form.name': 'Имя',
    'form.surname': 'Фамилия',
    'form.email': 'Email',
    'form.telephone': 'Телефон',
    'form.message': 'Напишите ваше сообщение здесь...',
    'form.submit': 'Отправить',
    'form.privacyText': 'Отправляя эту форму, вы подтверждаете, что этот веб-сайт может хранить вашу отправленную информацию, соглашаетесь с нашей',
    'form.privacyPolicy': 'политикой конфиденциальности',
    'form.andConsent': 'и соглашаетесь на',
    'form.cookies': 'куки',
    'form.beingStored': 'хранение на вашем компьютере.',
  },
  zh: {
    // Navigation
    'nav.buy': '购买',
    'nav.rent': '租赁',
    'nav.projects': '项目',
    'nav.teams': '团队',
    'nav.areas': '区域',
    'nav.services': '服务',
    'nav.blogs': '博客',
    'nav.more': '更多',
    'nav.listYourProperty': '列出您的房产',
    
    // Services
    'services.propertyManagement': '物业管理',
    'services.mortgages': '抵押贷款',
    'services.conveyancing': '产权转让',
    'services.shortTermRentals': '短期租赁',
    'services.propertySnagging': '房产检查',
    'services.partnerProgram': '合作伙伴计划',
    
    // Team page
    'team.loading': '正在加载团队成员...',
    'team.title': '认识我们的团队',
    'team.subtitle': '发现我们在迪拜的卓越豪华房地产专业团队。专业代理商致力于实现您的房地产梦想。',
    'team.management': '管理',
    'team.brokers': '经纪人',
    'team.showing': '显示',
    'team.teamMembers': '团队成员',
    'team.languages': '语言',
    
    // Common
    'common.currency': '迪拉姆',
    'common.menu': '菜单',
    
    // Footer
    'footer.newsletter': '将我们卓越的房地产列表直接发送到您的收件箱。',
    'footer.emailLabel': '新闻订阅的电子邮件地址',
    'footer.emailPlaceholder': '输入您的电子邮件地址',
    'footer.subscribe': '订阅',
    'footer.sitemap': '网站地图',
    'footer.contact': '联系方式',
    'footer.whyDubai': '为什么选择迪拜',
    'footer.contactUs': '联系我们',
    
    // Hero
    'hero.companyName': 'MODAC PROPERTIES',
    'landing.hero.heading': 'Find Your Dream Home With Modac Real Estate',
    
    // Buy page
    'buy.completionStatus': '完成状态',
    'buy.completedSecondary': '已完成次要',
    'buy.completedPrimary': '已完成主要',
    'buy.propertyType': '物业类型',
    'buy.minPrice': '最低价格',
    'buy.maxPrice': '最高价格',
    'buy.location': '位置',
    'buy.type': '类型',
    'buy.buy': '购买',
    'buy.rent': '租赁',
    // Off Plans page
    'offplans.completionStatus': 'Completion Status',
    'offplans.completedSecondary': 'Completed Secondary',
    'offplans.offPlanSecondary': 'Off Plan Secondary',
    'offplans.completedPrimary': 'Completed Primary',
    'offplans.offPlanPrimary': 'Off Plan Primary',
    'offplans.propertyType': 'Property Type',
    'offplans.apartment': 'Apartment',
    'offplans.villa': 'Villa',
    'offplans.townhouse': 'Townhouse',
    'offplans.penthouse': 'Penthouse',
    'offplans.studio': 'Studio',
    'offplans.bedrooms': 'Bedrooms',
    'offplans.oneBedroom': '1 Bedroom',
    'offplans.twoBedrooms': '2 Bedrooms',
    'offplans.threeBedrooms': '3 Bedrooms',
    'offplans.fourBedrooms': '4 Bedrooms',
    'offplans.fivePlusBedrooms': '5+ Bedrooms',
    'offplans.bathrooms': 'Bathrooms',
    'offplans.oneBathroom': '1 Bathroom',
    'offplans.twoBathrooms': '2 Bathrooms',
    'offplans.threeBathrooms': '3 Bathrooms',
    'offplans.fourBathrooms': '4 Bathrooms',
    'offplans.fivePlusBathrooms': '5+ Bathrooms',
    'offplans.year': 'Year',
    'offplans.handoverYear': 'Handover Year',
    'offplans.minPrice': 'Min Price',
    'offplans.maxPrice': 'Max Price',
    'offplans.locationPlaceholder': 'City, building or community',
    'offplans.type': 'Type',
    'offplans.buy': 'Buy',
    'offplans.rent': 'Rent',
    'offplans.offPlan': 'Off Plan',
    'offplans.location': 'Location',
    'offplans.developer': 'Developer',
    'offplans.searchDevelopers': 'Search developers...',
    'offplans.searchProperties': 'Search Properties',
    'offplans.moreFilters': 'More Filters',
    'offplans.searchFilters': 'Search Filters',
    'offplans.anyBedrooms': 'Any Bedrooms',
    'offplans.anyBathrooms': 'Any Bathrooms',
    'offplans.fivePlusBeds': '5+ Beds',
    'offplans.bed': 'Bed',
    'offplans.fivePlusBaths': '5+ Baths',
    'offplans.bath': 'Bath',
    'offplans.beds': 'Beds',
    'offplans.learnMore': 'Learn More',
    
    // Landing page sections
    'landing.feature.kicker': '精选项目',
    'landing.feature.heading': '奢华展现，舒适与精致',
    'landing.feature.subtitle': '发现迪拜最精美房产的精选系列，体现奢华、优雅和无与伦比的设计。',
    'landing.feature.viewAll': '查看所有项目',
    
    'landing.property.kicker': '精选房产',
    'landing.property.heading': '查看Modac Real Estate最有前景的房产',
    'landing.property.subtitle': '进入我们精选房产的无与伦比精致世界。探索这些独家瑰宝，想象您在Modac Real Estate的下一个奢华度假。',
    'landing.property.showing': '显示',
    'landing.property.of': '共',
    'landing.property.properties': '个房产',
    'landing.property.tryAgain': '重试',
    'landing.property.noProperties': '未找到房产',
    'landing.property.loadMore': '加载更多',
    'landing.property.showAll': '显示全部',
    'landing.property.viewAll': '查看所有房产',
    
    'landing.communities.kicker': '探索社区',
    'landing.communities.heading': '发现迪拜最理想的社区',
    'landing.communities.subtitle': '浏览迪拜最理想地区和社区的丰富马赛克。从宁静的海滨避难所到充满活力的都市中心，我们精心挑选的系列在每个地点都展现了优质生活方式的精髓。',
    'landing.communities.viewAll': '查看所有社区',
    
    'landing.blog.kicker': '洞察与灵感',
    'landing.blog.heading': '最新房地产洞察',
    'landing.blog.subtitle': '通过专家分析、市场趋势和对迪拜动态房地产景观的内部观点保持信息灵通。',
    'landing.blog.viewAll': '查看所有博客',
    
    'landing.cta.kicker': '准备开始',
    'landing.cta.heading': '您的优质房产之旅从这里开始',
    'landing.cta.subtitle': '准备开始专为您需求量身定制的优质房产之旅？开启您通往非凡生活体验的道路。',
    'landing.cta.button': '联系我们',
    
    // Solutions
    'solutions.connectSpecialist': '联系专家',
    'solutions.connectDescription': '与我们致力于支持您需求的400多名专业专业人士网络联系。',
    'solutions.listProperty': '列出您的房产',
    'solutions.listDescription': '通过我们复杂的推广方法和市场专业知识最大化您房产的潜力。',
    'solutions.downloadReport': '下载报告',
    'solutions.downloadDescription': '获取2025年第一季度最新的迪拜房产市场详细分析',
    'solutions.exploreProjects': '探索迪拜项目',
    'solutions.exploreDescription': '从我们全面的迪拜开发项目集合中发现并选择您的完美家园。',
    
    // Contact page
    'contact.title': '联系我们',
    'contact.kicker': '连接奢华',
    'contact.heading': '与Modac Real Estate联系',
    'contact.description': 'Modac Real Estate是迪拜阿拉伯联合酋长国最受认可的非洲可信房地产咨询公司之一，由来自喀麦隆的Fabien Mvie Monefong先生创立。自2022年启动以来，凭借他在行业和其他业务领域的经验，无论是本地还是全球，它都取得了成功，我们将继续蓬勃发展，为本地和国际客户提供优质服务，他们真诚地获得信任，并为新的房地产买家提供服务。',
    'contact.teamDescription': '我们经验丰富的研究驱动和专业团队的范围为客户提供可靠的信息和建议，使他们在房屋搜索和投资方面做出正确决定。',
    'contact.servicesDescription': '我们的服务提供住宅和商业房地产的获取、租赁。',
    'contact.contactInfo': '联系信息',
    'contact.address': '地址',
    'contact.phone': '电话',
    'contact.email': '邮箱',
    'contact.instagram': 'Instagram',
    'contact.businessHours': '营业时间',
    'contact.hours': '周一 - 周五: 上午9点至晚上7点',
    
    // Common components
    'common.units': '单位',
    'common.from': '起',
    'common.readMore': '阅读更多',
    'common.forSale': '出售',
    'common.forRent': '出租',
    'common.offPlan': '期房',
    
    // Form components
    'form.name': '姓名',
    'form.surname': '姓氏',
    'form.email': '邮箱',
    'form.telephone': '电话',
    'form.message': '在此写下您的消息...',
    'form.submit': '提交',
    'form.privacyText': '通过提交此表单，您确认此网站可以存储您提交的信息，同意我们的',
    'form.privacyPolicy': '隐私政策',
    'form.andConsent': '并同意',
    'form.cookies': 'cookies',
    'form.beingStored': '存储在您的计算机上。',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetCurrentLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[currentLanguage.code];
    return currentTranslations[key] || key;
  };

  const getCurrencyForLang = (langCode: string) => {
    // Default to AED; add per-language overrides
    if (langCode === 'ar') return { code: 'AED', symbol: 'د.إ' };
    if (langCode === 'zh') return { code: 'CNY', symbol: '¥' };
    return { code: 'AED', symbol: 'AED' };
  };

  const { code: currencyCode, symbol: currencySymbol } = getCurrencyForLang(currentLanguage.code);

  // Simple static conversion rates from AED → target currency (approx; replace with API if needed)
  const getRateForLang = (langCode: string): number => {
    switch (langCode) {
      case 'zh':
        return 1.95; // 1 AED ≈ 1.95 CNY (approx)
      default:
        return 1.0; // AED base
    }
  };
  const conversionRate = getRateForLang(currentLanguage.code);

  const convertFromAED = (amountAED: number): number => {
    if (!amountAED || Number.isNaN(amountAED)) return 0;
    return Math.round(amountAED * conversionRate);
  };

  const formatPrice = (amountAED?: number | null): string => {
    if (!amountAED && amountAED !== 0) return '';
    const converted = convertFromAED(amountAED as number);
    return `${currencySymbol} ${converted.toLocaleString()}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage: handleSetCurrentLanguage,
        t,
        languages,
        currencyCode,
        currencySymbol,
        convertFromAED,
        formatPrice,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
