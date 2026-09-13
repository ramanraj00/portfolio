export const publicPageMetadata = {
  home: {
    zh: {
      title: 'Raman Raj',
      description: '软件工程师',
      ogDescription: '软件工程师',
    },
    en: {
      title: 'Raman Raj',
      description: 'Software Engineer.',
      ogDescription: 'Software Engineer.',
    },
  },
  blog: {
    zh: {
      title: '写作',
      description: 'Raman 关于设计、工程、产品，以及一路上在意的人和事的文章。',
    },
    en: {
      title: 'Writing',
      description:
        'Essays by Raman about design, engineering, products, and the people and ideas that matter along the way.',
    },
  },
  photos: {
    zh: { title: '照片', description: 'Raman 在工作、生活和旅途中留下的一些瞬间。' },
    en: {
      title: 'Photos',
      description: 'Moments Raman has kept from work, life, and everywhere in between.',
    },
  },
  projects: {
    zh: {
      title: '项目',
      description:
        '这些年做过的产品、开源工具和小实验。有些实用，有些只是好玩，但每一个我都认真做过。',
    },
    en: {
      title: 'Projects',
      description:
        'Products, open-source tools, and small experiments I have made over the years. Some useful, some playful, all made with care.',
    },
  },
  ama: {
    zh: {
      title: '一对一',
      description:
        '从产品设计、工程、职业到独立开发、创业、出海、英语学习与 AI 工作流，用一小时聊清楚怎么判断、怎么取舍、下一步做什么。',
    },
    en: {
      title: 'AMA',
      description:
        'A one-to-one conversation about AI-native work, product strategy, engineering, startups, career moves, and building products.',
    },
  },
} as const

export type PublicSection = Exclude<keyof typeof publicPageMetadata, 'home'>
