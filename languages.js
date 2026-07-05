// ============================================================
// LANGUAGES.JS - Centralized Language Data for All Pages
// ============================================================

// ===== LANGUAGE DATA =====
const translations = {
  en: {
    // Nav
    navHome: 'Home',
    navProducts: 'Products',
    navIngredients: 'Ingredients',
    navBusiness: 'Business',
    navPackages: 'Packages',
    navResources: 'Resources',
    navJoin: 'Join Now',
    
    // Hero
    heroEyebrow: 'Life Nutrics South Sudan International Hub',
    heroTitle: 'Elevating Lives',
    heroSub: 'Health · Wealth · Lifestyle',
    heroDesc: 'A premier wellness enterprise rooted in natural functional foods, dedicated to transforming communities across South Sudan and beyond.',
    heroBtnProducts: 'Explore Products',
    heroBtnBusiness: 'Business Opportunity',
    heroStat1: 'Active Ingredients',
    heroStat2: 'Ailments Addressed',
    heroStat3: 'Established in Juba',
    
    // Footer
    footerText: 'Nyakuron Cultural Centre, Juba',
    footerGlobal: 'Aligned with Global Life Nutrics Sdn. Bhd. · Malaysia',
    
    // Disclaimer
    disclaimer: 'Health Notice: Nutrika is a functional food supplement. This information is educational and does not constitute medical advice. Consult your healthcare provider before use if you have existing medical conditions or are on prescription medication.'
  },
  
  sw: {
    // Nav
    navHome: 'Nyumbani',
    navProducts: 'Bidhaa',
    navIngredients: 'Viungo',
    navBusiness: 'Biashara',
    navPackages: 'Mifuko',
    navResources: 'Rasilimali',
    navJoin: 'Jiunge Sasa',
    
    // Hero
    heroEyebrow: 'Life Nutrics Sudan Kusini Kituo cha Kimataifa',
    heroTitle: 'Kuinuisha Maisha',
    heroSub: 'Afya · Utajiri · Mtindo wa Maisha',
    heroDesc: 'Biashara bora ya afya iliyojikita katika vyakula vya asili vinavyofanya kazi, imejitolea kubadilisha jamii katika Sudan Kusini na kwingineko.',
    heroBtnProducts: 'Chunguza Bidhaa',
    heroBtnBusiness: 'Fursa za Biashara',
    heroStat1: 'Viungo Vinavyotumika',
    heroStat2: 'Magonjwa Yanayoshughulikiwa',
    heroStat3: 'Ilianzishwa Juba',
    
    // Footer
    footerText: 'Nyakuron Cultural Centre, Juba',
    footerGlobal: 'Inaambatana na Global Life Nutrics Sdn. Bhd. · Malaysia',
    
    // Disclaimer
    disclaimer: 'Ilani ya Afya: Nutrika ni nyongeza ya chakula inayofanya kazi. Taarifa hii ni ya kielimu na haijumuishi ushauri wa matibabu. Wasiliana na mtoa huduma wako wa afya kabla ya kutumia ikiwa una hali za kiafya zilizopo au uko kwenye dawa zilizoagizwa.'
  },
  
  ar: {
    // Nav
    navHome: 'الرئيسية',
    navProducts: 'المنتجات',
    navIngredients: 'المكونات',
    navBusiness: 'الأعمال',
    navPackages: 'الباقات',
    navResources: 'الموارد',
    navJoin: 'انضم الآن',
    
    // Hero
    heroEyebrow: 'لايف نيوتركس جنوب السودان المركز الدولي',
    heroTitle: 'رفع المستوى للحياة',
    heroSub: 'الصحة · الثروة · نمط الحياة',
    heroDesc: 'مؤسسة صحية متميزة متجذرة في الأطعمة الوظيفية الطبيعية، مكرسة لتحويل المجتمعات في جنوب السودان وخارجه.',
    heroBtnProducts: 'استكشف المنتجات',
    heroBtnBusiness: 'فرصة عمل',
    heroStat1: 'مكونات نشطة',
    heroStat2: 'الأمراض التي تعالج',
    heroStat3: 'تأسست في جوبا',
    
    // Footer
    footerText: 'مركز نياكورون الثقافي، جوبا',
    footerGlobal: 'متوافق مع Global Life Nutrics Sdn. Bhd. · ماليزيا',
    
    // Disclaimer
    disclaimer: 'إشعار صحي: نيوتريكا هو مكمل غذائي وظيفي. هذه المعلومات تعليمية ولا تشكل نصيحة طبية. استشر مقدم الرعاية الصحية الخاص بك قبل الاستخدام إذا كنت تعاني من حالات طبية موجودة أو تتناول أدوية موصوفة.'
  },
  
  fr: {
    // Nav
    navHome: 'Accueil',
    navProducts: 'Produits',
    navIngredients: 'Ingrédients',
    navBusiness: 'Affaires',
    navPackages: 'Forfaits',
    navResources: 'Ressources',
    navJoin: 'Rejoindre',
    
    // Hero
    heroEyebrow: 'Life Nutrics Soudan du Sud Hub International',
    heroTitle: 'Élever des Vies',
    heroSub: 'Santé · Richesse · Mode de Vie',
    heroDesc: 'Une entreprise de bien-être de premier plan enracinée dans les aliments fonctionnels naturels, dédiée à la transformation des communautés à travers le Soudan du Sud et au-delà.',
    heroBtnProducts: 'Explorer les Produits',
    heroBtnBusiness: 'Opportunité d\'Affaires',
    heroStat1: 'Ingrédients Actifs',
    heroStat2: 'Affections Traitées',
    heroStat3: 'Établi à Juba',
    
    // Footer
    footerText: 'Centre Culturel Nyakuron, Juba',
    footerGlobal: 'Aligné avec Global Life Nutrics Sdn. Bhd. · Malaisie',
    
    // Disclaimer
    disclaimer: 'Avis de Santé : Nutrika est un complément alimentaire fonctionnel. Ces informations sont éducatives et ne constituent pas un avis médical. Consultez votre professionnel de santé avant utilisation si vous avez des conditions médicales existantes ou si vous prenez des médicaments sur ordonnance.'
  }
};

// ============================================================
// LANGUAGE UTILITY FUNCTIONS
// ============================================================

// Get current language from localStorage or default
function getCurrentLanguage() {
  return localStorage.getItem('preferredLanguage') || 'en';
}

// Set language and apply immediately without reload
function setLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('preferredLanguage', lang);
    
    // Set RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }
    
    // Apply translations
    applyTranslations();
    
    // Update UI
    updateLanguageUI();
    
    // Close dropdown
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('open');
  }
}

// Get translation for a specific key
function t(key) {
  const lang = getCurrentLanguage();
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key;
    }
  }
  return value || key;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation && translation !== key) {
      // Handle different element types
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('data-i18n-placeholder')) {
          el.placeholder = translation;
        } else {
          el.value = translation;
        }
      } else if (el.tagName === 'IMG' && el.hasAttribute('data-i18n-alt')) {
        el.alt = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
}

// Update language switcher UI
function updateLanguageUI() {
  const lang = getCurrentLanguage();
  const currentLangSpan = document.getElementById('currentLang');
  const langOptions = document.querySelectorAll('.lang-option');
  
  const langNames = {
    en: 'English',
    sw: 'Kiswahili',
    ar: 'العربية',
    fr: 'Français'
  };
  
  const langFlags = {
    en: '🇬🇧',
    sw: '🇹🇿',
    ar: '🇸🇦',
    fr: '🇫🇷'
  };
  
  if (currentLangSpan) {
    currentLangSpan.textContent = langNames[lang] || 'English';
  }
  
  // Update toggle flag
  const toggleFlag = document.querySelector('.lang-toggle .lang-flag');
  if (toggleFlag) {
    toggleFlag.textContent = langFlags[lang] || '🌍';
  }
  
  langOptions.forEach(option => {
    const dataLang = option.getAttribute('data-lang');
    if (dataLang === lang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

// ============================================================
// INITIALIZE ON PAGE LOAD
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  // Set initial RTL for Arabic
  const currentLang = getCurrentLanguage();
  if (currentLang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = currentLang;
  }
  
  // Apply translations
  applyTranslations();
  
  // Update language UI
  updateLanguageUI();
  
  // Language toggle click - open/close dropdown
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });
  }
  
  // Language option click - select language
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const lang = this.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('langDropdown');
    const toggle = document.getElementById('langToggle');
    if (dropdown && toggle) {
      if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    }
  });
});