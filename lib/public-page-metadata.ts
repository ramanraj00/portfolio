export const publicPageMetadata = {
  home: {
    zh: {
      title: 'Raman Raj',
      description: 'सॉफ्टवेयर इंजीनियर',
      ogDescription: 'सॉफ्टवेयर इंजीनियर',
    },
    en: {
      title: 'Raman Raj',
      description: 'Software Engineer.',
      ogDescription: 'Software Engineer.',
    },
  },
  blog: {
    zh: {
      title: 'आर्टिकल्स',
      description: 'डिजाइन, इंजीनियरिंग, प्रोडक्ट्स और काम के आइडियाज़ पर मेरे लिखे आर्टिकल्स और एसेज।',
    },
    en: {
      title: 'Writing',
      description:
        'Essays by Raman about design, engineering, products, and the people and ideas that matter along the way.',
    },
  },
  photos: {
    zh: { title: 'फोटोज़', description: 'मेरी ज़िंदगी, काम और सफर के दौरान क्लिक की गई कुछ बेहतरीन यादें और तस्वीरें।' },
    en: {
      title: 'Photos',
      description: 'Moments Raman has kept from work, life, and everywhere in between.',
    },
  },
  projects: {
    zh: {
      title: 'प्रोजेक्ट्स',
      description:
        'पिछले कुछ सालों में बनाए गए मेरे प्रोडक्ट्स, टूल्स और कुछ छोटे-मोटे एक्सपेरिमेंट। इनमें से कुछ बहुत काम के हैं और कुछ सिर्फ मजे के लिए बनाए हैं, लेकिन सब में मैंने अपना 100% दिया है।',
    },
    en: {
      title: 'Projects',
      description:
        'Products, open-source tools, and small experiments I have made over the years. Some useful, some playful, all made with care.',
    },
  },
  ama: {
    zh: {
      title: 'एएमए (AMA)',
      description:
        'प्रोडक्ट डिजाइन, इंजीनियरिंग, करियर, AI और स्टार्टअप्स पर वन-टू-वन बात करने का मौका।',
    },
    en: {
      title: 'AMA',
      description:
        'A one-to-one conversation about AI-native work, product strategy, engineering, startups, career moves, and building products.',
    },
  },
} as const

export type PublicSection = Exclude<keyof typeof publicPageMetadata, 'home'>
