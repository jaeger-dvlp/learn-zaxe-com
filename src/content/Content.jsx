/* eslint-disable react/react-in-jsx-scope */

const { v4: uuidV4 } = require('uuid');
const { FaCompass, FaTools } = require('react-icons/fa');
const {
  BsApple,
  BsWindows,
  BsFillFileEarmarkArrowDownFill,
} = require('react-icons/bs');

const { CDNURL } = process.env;

const OSIcons = {
  win: <BsWindows />,
  mac: <BsApple />,
};

const Suggestions = [
  {
    text: {
      en: 'Basic 3D Printing Safety',
      tr: 'Temel 3D Baskı Güvenliği',
    },
    keys: ['safety', 'basic', 'güvenlik', 'temel'],
  },
  {
    text: {
      en: 'Keeping Your Zaxe Z3 Clean',
      tr: "Zaxe Z3'ünüzü Temiz Tutma",
    },
    keys: ['clean', 'temiz', 'temizlemek', 'cleaning'],
  },
  {
    text: {
      en: 'Keeping Your Zaxe X3 Clean',
      tr: "Zaxe X3'ünüzü Temiz Tutma",
    },
    keys: ['clean', 'temiz', 'temizlemek', 'cleaning'],
  },
];

const GlobalPosts = [
  {
    title: {
      tr: 'Temel 3D Baskı Güvenliği',
      en: 'Basic 3D Printing Safety',
    },
    slug: 'basic-3d-printing-safety',
    category: 'general',
    thumbnail: `${CDNURL}posts/basic-3d-printing-safety/img/zaxe-3d-printing-safety-moving-parts.webp`,
  },
  {
    title: {
      tr: 'Kullanışlı 3D Baskı Araçları ve Aksesuarları',
      en: 'Useful 3D Printing Tools and Accessories',
    },
    slug: 'useful-3d-printing-tools-and-accessories',
    category: 'general',
    thumbnail: `${CDNURL}posts/useful-3d-printing-tools-and-accessories/img/useful-3d-printing-tools-screwdriver-set.webp`,
  },
];

const ProductPosts = [
  [
    {
      title: {
        tr: "Zaxe Z3'ünüzü Temiz Tutmak",
        en: 'Keeping Your Zaxe Z3 Clean',
      },
      slug: 'keeping-your-zaxe-z3-clean',
      category: 'maintenance',
      thumbnail: `${CDNURL}posts/keeping-your-zaxe-z3-clean/zaxe-z3-cleaning-printing-table.webp`,
    },
    {
      title: {
        tr: 'Zaxe Z3 3D Yazıcınız ile İlk Kalibrasyonunuz',
        en: 'Your First Bed Calibration with Zaxe Z3 3D Printer',
      },
      slug: 'your-first-bed-calibration-with-zaxe-z3-3d-printer',
      category: 'maintenance',
      thumbnail: `${CDNURL}posts/your-first-bed-calibration-with-zaxe-z3-3d-printer/zaxe-z3-calibration-lines.webp`,
    },
  ],

  [
    {
      title: {
        tr: "Zaxe X3'ünüzü Temiz Tutmak",
        en: 'Keeping Your Zaxe X3 Clean',
      },
      slug: 'keeping-your-zaxe-x3-clean',
      category: 'maintenance',
      thumbnail: `${CDNURL}posts/keeping-your-zaxe-x3-clean/zaxe-x3-cleaning-printing-table.webp`,
    },
  ],
  [
    {
      title: {
        tr: 'xDesktop Hakkında',
        en: 'About xDesktop',
      },
      slug: 'about-xdesktop',
      category: 'start',
      thumbnail: `${CDNURL}posts/about-xdesktop/img/zaxe-xdesktop-ui.webp`,
    },
  ],
];

const ProductVideos = [
  [
    {
      product: 'zaxe-z3',
      slug: 'zxz3-unboxing-z3',
      label: 'content-zxz3:starterVideos.0.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/Z3_front.webp`,
      category: 'tips-tricks',
      tags: [
        'unbox',
        'unboxing',
        'z3',
        'z3 unbox',
        'z3 unboxing',
        'kutu açılımı',
        'z3 kutu açılımı',
      ],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-meet-z3',
      label: 'content-zxz3:starterVideos.1.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/Z3_screen.webp`,
      category: 'tips-tricks',
      tags: ['z3'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-calibration-z3',
      label: 'content-zxz3:starterVideos.2.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/Z3_printtable.webp`,
      category: 'maintenance',
      tags: [
        'z3',
        'calibration',
        'calibrate',
        'how to calibrate',
        'kalibrasyon',
        'kalibre',
      ],
    },
  ],
  [
    {
      product: 'zaxe-x3',
      slug: 'zxx3-unboxing-x3',
      label: 'content-zxx3:starterVideos.0.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/X3_printtable.webp`,
      category: 'tips-tricks',
      tags: [
        'unbox',
        'unboxing',
        'x3',
        'x3 unbox',
        'x3 unboxing',
        'kutu açılımı',
        'x3 kutu açılımı',
      ],
    },
    {
      product: 'zaxe-x3',
      slug: 'zxx3-meet-x3',
      label: 'content-zxx3:starterVideos.1.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/X3_screen.webp`,
      category: 'tips-tricks',
      tags: ['x3'],
    },
    {
      product: 'zaxe-x3',
      slug: 'zxx3-calibration-x3',
      label: 'content-zxx3:starterVideos.2.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/X3_corexy.webp`,
      category: 'maintenance',
      tags: [
        'x3',
        'calibration',
        'calibrate',
        'how to calibrate',
        'kalibrasyon',
        'kalibre',
      ],
    },
  ],
  [
    {
      product: 'zaxe-xdesktop',
      slug: 'zxxdesktop-userinterface-xdesktop',
      label: 'content-zxxdesktop:starterVideos.0.label',
      videoURL: `${CDNURL}video/mock-video-xdesktop.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/xdesktop_ui.webp`,
      category: 'tips-tricks',
      tags: ['xdesktop', 'ui', 'user interface', 'kullanıcı arayüzü', 'arayüz'],
    },
    {
      product: 'zaxe-xdesktop',
      slug: 'zxxdesktop-shortcuts-xdesktop',
      label: 'content-zxxdesktop:starterVideos.1.label',
      videoURL: `${CDNURL}video/mock-video-xdesktop.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/xdesktop_shortcuts.webp`,
      category: 'tips-tricks',
      tags: ['xdesktop', 'shortcuts', 'kısayollar'],
    },
  ],
];

const Downloadables = [
  {
    slug: 'z3-user-manual',
    title: 'content-zxz3:downloads.2.title',
    updateDate: '2022-01-01',
    type: 'doc',
    link: `${CDNURL}docs/global/zaxe-z3-user-manual.pdf`,
    showLastUpdate: true,
    description: "Zaxe Z3's User Manual",
    tags: ['z3', 'handbook', 'user', 'manual', 'kılavuz', 'kullanım'],
  },
  {
    slug: 'x3-user-manual',
    title: 'content-zxx3:downloads.2.title',
    updateDate: '2022-01-01',
    type: 'doc',
    link: `${CDNURL}docs/global/zaxe-x3-user-manual.pdf`,
    showLastUpdate: true,
    description: "Zaxe X3's Handbook",
    tags: ['x3', 'handbook', 'user', 'manual', 'kılavuz', 'kullanım'],
  },
  {
    slug: 'x3-firmware',
    title: 'content-zxx3:downloads.0.title',
    updateDate: '2022-01-01',
    type: 'firmware',
    link: `${CDNURL}docs/global/zaxe-x3-user-manual.pdf`,
    showLastUpdate: true,
    description: "Zaxe X3's Firmware",
    tags: ['x3', 'firmware', 'yazılım'],
  },
  {
    slug: 'xdesktop-latest',
    title: 'content-zxxdesktop:downloads.0.title',
    updateDate: '2022-01-01',
    type: 'app',
    platforms: ['win', 'mac'],
    links: {
      win: 'https://d.zaxe.com/xdesktopwin',
      mac: 'https://d.zaxe.com/xdesktopmac',
    },
    showLastUpdate: false,
    description: 'Zaxe xDesktop Download',
    tags: ['xdesktop'],
  },
  {
    slug: 'xdesktop-2-1-6',
    title: 'content-zxxdesktop:downloads.1.title',
    updateDate: '2022-01-01',
    type: 'app',
    platforms: ['win', 'mac'],
    links: {
      win: 'https://zaxe-static.s3.eu-central-1.amazonaws.com/xdesktop/release/XDesktop-2.1.6-win64.exe',
      mac: 'https://zaxe-static.s3.eu-central-1.amazonaws.com/xdesktop/release/XDesktop-2.1.6-Darwin.dmg',
    },
    showLastUpdate: false,
    description: 'Zaxe xDesktop Download',
    tags: ['xdesktop'],
  },
  {
    slug: 'xdesktop-2-1-5',
    title: 'content-zxxdesktop:downloads.2.title',
    updateDate: '2022-01-01',
    type: 'app',
    platforms: ['win', 'mac'],
    links: {
      win: 'https://zaxe-static.s3.eu-central-1.amazonaws.com/xdesktop/release/XDesktop-2.1.5-win64.exe',
      mac: 'https://zaxe-static.s3.eu-central-1.amazonaws.com/xdesktop/release/XDesktop-2.1.5-Darwin.dmg',
    },
    showLastUpdate: false,
    description: 'Zaxe xDesktop Download',
    tags: ['xdesktop'],
  },
  {
    slug: 'xdesktop-2-1-4',
    title: 'content-zxxdesktop:downloads.3.title',
    updateDate: '2022-01-01',
    type: 'app',
    platforms: ['win', 'mac'],
    links: {
      win: 'https://zaxe-static.s3.eu-central-1.amazonaws.com/xdesktop/release/XDesktop-2.1.4-win64.exe',
      mac: 'https://zaxe-static.s3.eu-central-1.amazonaws.com/xdesktop/release/XDesktop-2.1.4-Darwin.dmg',
    },
    showLastUpdate: false,
    description: 'Zaxe xDesktop Download',
    tags: ['xdesktop'],
  },
  {
    slug: 'xdesktop-2-0-0',
    title: 'content-zxxdesktop:downloads.4.title',
    updateDate: '2022-01-01',
    type: 'app',
    platforms: ['win'],
    links: {
      win: 'https://www.dropbox.com/s/z0v4id8knotxdzs/XDesktop-2.0.0-win32.exe?dl=0',
    },
    showLastUpdate: false,
    description: 'Zaxe xDesktop Download',
    tags: ['xdesktop'],
  },
  {
    slug: 'safety-and-technical-data-sheet',
    title: {
      tr: 'Güvenlik ve Teknik Veri Sayfaları',
      en: 'Safety and Technical Data Sheets',
    },
    updateDate: '2022-01-01',
    type: 'doc',
    links: {
      en: `${CDNURL}docs/en/mock-doc.pdf`,
      tr: `${CDNURL}docs/tr/mock-doc.pdf`,
    },
    showLastUpdate: false,
    description: 'Mock Download',
    tags: [
      'safety',
      'technical',
      'data',
      'sheet',
      'güvenlik',
      'teknik',
      'veri',
      'sayfa',
    ],
  },
  {
    slug: 'certificate-of-compliance',
    title: {
      tr: 'Uygunluk Belgesi',
      en: 'Certificate of Compliance',
    },
    updateDate: '2022-01-01',
    type: 'doc',
    links: {
      en: `${CDNURL}docs/en/mock-doc.pdf`,
      tr: `${CDNURL}docs/tr/mock-doc.pdf`,
    },
    showLastUpdate: false,
    description: 'Mock Download',
    tags: ['certificate', 'compliance', 'uygunluk', 'serfitika'],
  },
  {
    slug: 'abs-profile-for-slicer',
    title: {
      tr: 'Dilimleyici için ABS Profili',
      en: 'ABS Profile for Slicer',
    },
    type: 'doc',
    updateDate: '2022-01-01',
    links: {
      en: `${CDNURL}docs/en/mock-doc.pdf`,
      tr: `${CDNURL}docs/tr/mock-doc.pdf`,
    },
    showLastUpdate: false,
    description: 'Mock Download',
    tags: ['abs', 'profile', 'slicer', 'dilimleyici', 'profil'],
  },
  {
    slug: 'multimaterial-compatibility',
    title: {
      tr: 'Çoklu Malzeme Uyumluluğu',
      en: 'Multimaterial Compatibility',
    },
    type: 'doc',
    updateDate: '2022-01-01',
    links: {
      en: `${CDNURL}docs/en/mock-doc.pdf`,
      tr: `${CDNURL}docs/tr/mock-doc.pdf`,
    },
    showLastUpdate: false,
    description: 'Mock Download',
    tags: ['multimaterial', 'compatibility', 'uyumluluk', 'malzeme'],
  },
  {
    slug: 'nfc-specs',
    title: {
      tr: 'NFC Özellikleri',
      en: 'NFC Specs',
    },
    type: 'doc',
    updateDate: '2022-01-01',
    links: {
      en: `${CDNURL}docs/en/mock-doc.pdf`,
      tr: `${CDNURL}docs/tr/mock-doc.pdf`,
    },
    showLastUpdate: false,
    description: 'Mock Download',
    tags: ['nfc', 'specs', 'özellikler'],
  },
];

const PostCategories = [
  {
    for: 'product',
    product: 'zaxe-z3',
    categories: [
      {
        label: 'content-zxz3:categories.1.label',
        slug: 'repair',
        icon: 'repair',
      },
      {
        label: 'content-zxz3:categories.2.label',
        slug: 'maintenance',
        icon: 'maintenance',
      },
      {
        label: 'content-zxz3:categories.3.label',
        slug: 'tips-tricks',
        icon: 'tips-tricks',
      },

      {
        label: 'content-zxz3:categories.5.label',
        slug: 'software',
        icon: 'software',
      },
      {
        label: 'content-zxz3:categories.6.label',
        slug: 'troubleshooting',
        icon: 'printer-troubleshooting',
      },
    ],
  },
  {
    for: 'product',
    product: 'zaxe-x3',
    categories: [
      {
        label: 'content-zxx3:categories.1.label',
        slug: 'repair',
        icon: 'repair',
      },
      {
        label: 'content-zxx3:categories.2.label',
        slug: 'maintenance',
        icon: 'maintenance',
      },
      {
        label: 'content-zxx3:categories.3.label',
        slug: 'tips-tricks',
        icon: 'tips-tricks',
      },
      {
        label: 'content-zxx3:categories.5.label',
        slug: 'software',
        icon: 'software',
      },
      {
        label: 'content-zxx3:categories.6.label',
        slug: 'troubleshooting',
        icon: 'printer-troubleshooting',
      },
    ],
  },
  {
    for: 'product',
    product: 'zaxe-xdesktop',
    categories: [
      {
        label: 'content-zxxdesktop:categories.0.label',
        slug: 'start',
        icon: 'start',
      },
      {
        label: 'content-zxxdesktop:categories.1.label',
        slug: 'tips-tricks',
        icon: 'tips-tricks',
      },
      {
        label: 'content-zxxdesktop:categories.3.label',
        slug: 'troubleshooting',
        icon: 'pc-troubleshooting',
      },
    ],
  },
  {
    for: 'general',
    categories: [
      {
        label: 'content-global:categories.0.label',
        slug: 'repair',
        icon: 'repair',
      },
    ],
  },
];

const ProductCategories = [
  {
    name: { tr: '3D Yazıcılar', en: '3D Printers' },
    slug: '3dprinters',
  },
  {
    name: { tr: 'Yazılımlar', en: 'Softwares' },
    slug: 'softwares',
  },
];

const ProductContents = [
  {
    navButtons: [
      {
        label: 'content-zxz3:navButtons.0.label',
        slug: 'printable-parts',
        isLink: true,
        linkData: {
          isExternal: false,
          url: '/',
        },
      },
      {
        label: 'content-zxz3:navButtons.1.label',
        slug: 'forum',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
      {
        label: 'content-zxz3:navButtons.2.label',
        slug: 'spare-parts',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
      {
        label: 'content-zxz3:navButtons.3.label',
        slug: 'z3-video',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
    ],
    starterVideos: ProductVideos[0],
    categories: PostCategories[0].categories,
    posts: ProductPosts[0],
    downloads: [
      Downloadables.find(({ slug }) => slug === 'z3-user-manual'),
      Downloadables.find(({ slug }) => slug === 'xdesktop-latest'),
    ],
  },
  {
    navButtons: [
      {
        label: 'content-zxx3:navButtons.0.label',
        slug: 'printable-parts',
        isLink: true,
        linkData: {
          isExternal: false,
          url: '/',
        },
      },
      {
        label: 'content-zxx3:navButtons.1.label',
        slug: 'forum',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
      {
        label: 'content-zxx3:navButtons.2.label',
        slug: 'spare-parts',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://store.zaxe.com',
        },
      },
      {
        label: 'content-zxx3:navButtons.3.label',
        slug: 'x3-video',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
    ],
    starterVideos: ProductVideos[1],
    categories: PostCategories[1].categories,
    posts: ProductPosts[1],
    downloads: [
      Downloadables.find(({ slug }) => slug === 'x3-user-manual'),
      Downloadables.find(({ slug }) => slug === 'x3-firmware'),
      Downloadables.find(({ slug }) => slug === 'xdesktop-latest'),
    ],
  },
  {
    navButtons: [
      {
        label: 'content-zxxdesktop:navButtons.0.label',
        slug: 'slicer-props',
        isLink: true,
        linkData: {
          isExternal: false,
          url: '/',
        },
      },
      {
        label: 'content-zxxdesktop:navButtons.1.label',
        slug: 'forum',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
      {
        label: 'content-zxxdesktop:navButtons.2.label',
        slug: '_3d-printings',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
      {
        label: 'content-zxxdesktop:navButtons.3.label',
        slug: 'xdekstop-video',
        isLink: true,
        linkData: {
          isExternal: true,
          url: 'https://zaxe.com',
        },
      },
    ],
    starterVideos: ProductVideos[2],
    categories: PostCategories[2].categories,
    posts: ProductPosts[2],
    downloads: [
      Downloadables.find(({ slug }) => slug === 'xdesktop-latest'),
      Downloadables.find(({ slug }) => slug === 'xdesktop-2-1-6'),
      Downloadables.find(({ slug }) => slug === 'xdesktop-2-1-5'),
      Downloadables.find(({ slug }) => slug === 'xdesktop-2-1-4'),
      Downloadables.find(({ slug }) => slug === 'xdesktop-2-0-0'),
    ],
  },
];

const Products = [
  {
    name: 'Zaxe Z3',
    slug: 'zaxe-z3',
    model: 'Z3',
    category: ProductCategories[0],
    images: {
      main: {
        img: require('../images/3dprinters/main/z3.webp'),
        alt: 'Zaxe Z3',
      },
    },
    content: ProductContents[0],
  },
  {
    name: 'Zaxe X3',
    slug: 'zaxe-x3',
    model: 'X3',
    category: ProductCategories[0],
    images: {
      main: {
        img: require('../images/3dprinters/main/x3.webp'),
        alt: 'Zaxe X3',
      },
    },
    content: ProductContents[1],
  },
  {
    name: 'Zaxe xDesktop',
    slug: 'zaxe-xdesktop',
    model: 'xDesktop',
    category: ProductCategories[1],
    images: {
      main: {
        img: require('../images/softwares/main/xdesktop.webp'),
        alt: 'Zaxe xDesktop',
      },
    },
    content: ProductContents[2],
  },
];

const QuickViewerContent = [
  {
    slug: 'quick-view',
    name: 'components.quick-viewer.subjects.0',
    substances: [
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.0.heading',
        description: 'components.quick-viewer.substances.0.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.1.heading',
        description: 'components.quick-viewer.substances.1.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.2.heading',
        description: 'components.quick-viewer.substances.2.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.3.heading',
        description: 'components.quick-viewer.substances.3.description',
      },
    ],
  },
  {
    slug: 'documents',
    name: 'components.quick-viewer.subjects.1',
    substances: [
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.0.heading',
        description: 'components.quick-viewer.substances.0.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.1.heading',
        description: 'components.quick-viewer.substances.1.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.2.heading',
        description: 'components.quick-viewer.substances.2.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.3.heading',
        description: 'components.quick-viewer.substances.3.description',
      },
    ],
  },
  {
    slug: 'videos',
    name: 'components.quick-viewer.subjects.2',
    substances: [
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.0.heading',
        description: 'components.quick-viewer.substances.0.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.1.heading',
        description: 'components.quick-viewer.substances.1.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.2.heading',
        description: 'components.quick-viewer.substances.2.description',
      },
      {
        id: uuidV4(),
        heading: 'components.quick-viewer.substances.3.heading',
        description: 'components.quick-viewer.substances.3.description',
      },
    ],
  },
];

const DownloadDocuments = [
  Downloadables.find(({ slug }) => slug === 'safety-and-technical-data-sheet'),
  Downloadables.find(({ slug }) => slug === 'certificate-of-compliance'),
  Downloadables.find(({ slug }) => slug === 'abs-profile-for-slicer'),
  Downloadables.find(({ slug }) => slug === 'multimaterial-compatibility'),
  Downloadables.find(({ slug }) => slug === 'nfc-specs'),
];

const QuickNavigationHome = [
  {
    title: 'components.quick-navigation.columns.0.heading',
    Icon: ({ className }) => <FaCompass className={`text-3xl ${className}`} />,
    allURL: null,
    links: [
      {
        title: 'Metal Expansion Kit',
        link: '#',
        isExternal: false,
      },
      {
        title: 'PVA Removal Station',
        link: '#',
        isExternal: false,
      },
      {
        title: 'Print Cores',
        link: '#',
        isExternal: false,
      },
      {
        title: 'Spare Parts',
        link: '#',
        isExternal: false,
      },
      {
        title: 'Maintenance Kits',
        link: '#',
        isExternal: false,
      },
      {
        title: 'Advanced 3D Printer Tips',
        link: '#',
        isExternal: false,
      },
    ],
  },
  {
    title: 'components.quick-navigation.columns.1.heading',
    Icon: ({ className }) => <FaTools className={`text-3xl ${className}`} />,
    allURL: null,
    links: [
      {
        title: 'components.quick-navigation.columns.1.links.0',
        link: '/articles/basic-3d-printing-safety',
        isExternal: false,
      },
      {
        title: 'How to fix stringing',
        link: '#',
        isExternal: false,
      },
      {
        title: 'How to fix pillowing',
        link: '#',
        isExternal: false,
      },
      {
        title: 'How to fix under-extrusion',
        link: '#',
        isExternal: false,
      },
      {
        title: 'How to feed filament loader',
        link: '#',
        isExternal: false,
      },
      {
        title: 'How to fix feed issues',
        link: '#',
        isExternal: false,
      },
    ],
  },
  {
    title: 'components.quick-navigation.columns.2.heading',
    Icon: ({ className }) => (
      <BsFillFileEarmarkArrowDownFill className={`text-3xl ${className}`} />
    ),
    allURL: '/downloads',
    links: [
      {
        title: 'components.quick-navigation.columns.2.links.0',
        link: `${CDNURL}docs/global/zaxe-z3-user-manual.pdf`,
        isExternal: true,
      },
      {
        title: 'components.quick-navigation.columns.2.links.1',
        link: `${CDNURL}docs/global/zaxe-x3-user-manual.pdf`,
        isExternal: true,
      },
      {
        title: 'components.quick-navigation.columns.2.links.2',
        link: `${CDNURL}docs/global/zaxe-x3-user-manual.pdf`,
        isExternal: true,
      },
      {
        title: 'components.quick-navigation.columns.2.links.3',
        link: `${CDNURL}docs/global/zaxe-x3-user-manual.pdf`,
        isExternal: true,
      },
      {
        title: 'components.quick-navigation.columns.2.links.4',
        link: 'https://d.zaxe.com/xdesktopwin',
        isExternal: true,
      },
      {
        title: 'components.quick-navigation.columns.2.links.5',
        link: 'https://d.zaxe.com/xdesktopmac',
        isExternal: true,
      },
    ],
  },
];

const Content = {
  translations: [
    'common',
    'productmeta',
    'content-zxz3',
    'content-zxx3',
    'content-zxxdesktop',
    'content-global',
  ],

  products: Products,
  productPosts: ProductPosts,
  productVideos: ProductVideos,
  productCategories: ProductCategories,
  productPostCategories: PostCategories,
  globalPosts: GlobalPosts,
  components: {
    quickViewer: QuickViewerContent,
    quickNavigation: QuickNavigationHome,
    downloadDocuments: DownloadDocuments,
  },
  suggestions: Suggestions,
  downloadables: Downloadables,
  OSIcons,
};

module.exports = Content;
