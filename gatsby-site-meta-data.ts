export default {
  /**
   * basic Information
   */
  title: `myeong-uk.com`,
  description: `개발자 이명욱`,
  language: `ko`,
  siteUrl: `https://myeonguk.netlify.app/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `myeonguklee/myeonguk-gatsby-blog`, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `이명욱`,
    nickname: `명욱`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `muk525@icloud.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: '서울교육대학교 초등교육과(심화 전공:컴퓨터) (2016.03-2022.02)',
      // bachelorDegree: 'Kyunghee Univ. Computer Engineering (2018.03-2022.02)',
    },
    social: {
      github: `https://github.com/myeonguklee`,
      linkedIn: ``, //https://www.linkedin.com/in/myeong-uk/
      resume: `https://my.surfit.io/w/1344468926`,
    },
    dropdown: {
      tistory: '',
      velog: '',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'Dev',
      category: 'featured-dev',
    },
    {
      title: 'TypeScript',
      category: 'featured-typescript',
    },
    {
      title: 'JavaScript',
      category: 'featured-javascript',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    // {
    //   category: 'Career',
    //   date: '2022.01.04 - NOW',
    //   en: 'A Corp.',
    //   kr: 'A 회사',
    //   info: 'A 팀',
    //   link: '',
    // },
    // {
    //   category: 'Career',
    //   date: '2021.01.04 - 2022.01.04',
    //   en: 'B Corp.',
    //   kr: 'B 회사',
    //   info: 'B 팀',
    //   link: '',
    // },
    {
      category: 'Activity',
      date: '2024.01 - 2024.12',
      en: 'SSAFY',
      kr: '삼성 청년 SW 아카데미',
      info: '11기 수료',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'NewStock',
      description: '경제 뉴스로 투자 안목을 키우고, 모의 투자로 실전 감각까지 다지는 빅데이터 플랫폼',
      techStack: ['React', 'Typescript'],
      thumbnailUrl: 'newstock.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/myeonguklee/newstock',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: '공기밥',
      description: '공공기관 업무추진비 기반 맛집 추천 서비스',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: 'gonggibap.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/myeonguklee/gonggibap-client',
        demo: 'https://gonggibap.co.kr/',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
