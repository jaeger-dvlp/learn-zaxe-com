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
      en: 'Basic Filaments Guide',
      tr: 'Temel Filamentler Kılavuzu',
    },
    keys: ['filament', 'filaments', 'guide'],
  },
  {
    text: {
      en: 'How to Change Filament on Your Zaxe Z3',
      tr: "Zaxe Z3'de Nasıl Filament Değiştirilir?",
    },
    keys: ['filament', 'change'],
  },
  {
    text: {
      en: 'How to Change Filament on Your Zaxe X3',
      tr: "Zaxe X3'de Nasıl Filament Değiştirilir?",
    },
    keys: ['filament', 'change'],
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
  {
    text: {
      en: 'How to Use OctoPi on Your Zaxe Z3 Printer',
      tr: 'Zaxe Z3 Yazıcınızda OctoPi Nasıl Kullanılır',
    },
    keys: ['octo', 'pi', 'octopi', 'use', 'kullanmak', 'kullanılır', 'açılır'],
  },
  {
    text: {
      en: 'Your First Bed Calibration with Zaxe Z3 3D Printer',
      tr: 'Zaxe Z3 3D Yazıcınız ile İlk Kalibrasyonunuz',
    },
    keys: ['calibration', 'kalibrasyon'],
  },
  {
    text: {
      en: 'Your First Bed Calibration with Zaxe X3 3D Printer',
      tr: 'Zaxe X3 3D Yazıcınız ile İlk Kalibrasyonunuz',
    },
    keys: ['calibration', 'kalibrasyon'],
  },
  {
    text: {
      en: 'How to Create a Digital Model for 3D Printing',
      tr: '3D Baskı İçin Nasıl Dijital Model Oluşturulur',
    },
    keys: ['digital', 'dijital', 'model', 'oluşturmak', 'oluşturulur'],
  },
  {
    text: {
      en: 'Common 3D Printing Problems and How to Troubleshoot Them',
      tr: 'Yaygın 3D Baskı Sorunları ve Nasıl Giderilir',
    },
    keys: [
      'büzüşme',
      'büzülme',
      'nozzle',
      'nozül',
      'tıkandı',
      'tıkanmış',
      'tıkanma',
      'ipliklenme',
      'iplenme',
      'katman ayrımı',
      'ghosting',
      'overhang',
      'layer shifting',
      'katman kaydırma',
      'kayıyor',
      'warping',
      'warp',
      'clogged',
      'clog',
      'stringing',
      'delamination',
      'ghosting',
      'overhang',
      'layer shifting',
      'shifting',
    ],
  },
];

const GlobalPosts = require('@/src/content/posts/global.posts.json');

const ProductPosts = require('@/src/content/posts/product.posts.json');

const ProductVideos = [
  [
    {
      product: 'zaxe-z3',
      slug: 'zxz3-unboxing-z3',
      label: 'content-zxz3:starterVideos.0.label',
      videoURL: `${CDNURL}videos/zaxe-z3/unboxing.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/unboxing.webp`,
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
      slug: 'zxz3-explore-z3',
      label: 'content-zxz3:starterVideos.1.label',
      videoURL: `${CDNURL}videos/zaxe-z3/explore.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/explore.webp`,
      category: 'tips-tricks',
      tags: ['z3'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-calibration-z3',
      label: 'content-zxz3:starterVideos.2.label',
      videoURL: `${CDNURL}videos/zaxe-z3/calibration.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/calibration.webp`,
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
  [],
  [],
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
    version: '2.1.6',
    tags: ['xdesktop', 'older-version'],
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
    version: '2.1.5',
    tags: ['xdesktop', 'older-version'],
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
    version: '2.1.4',
    tags: ['xdesktop', 'older-version'],
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
    version: '2.0.0-win32',
    tags: ['xdesktop', 'older-version'],
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
        title: 'components.quick-navigation.columns.0.links.0',
        link: '/products/3dprinters/zaxe-z3/article/how-to-get-faster-prints-with-your-zaxe-z3',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.0.links.1',
        link: '/articles/common-3d-printing-problems-and-how-to-troubleshoot-them',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.0.links.2',
        link: '/products/3dprinters/zaxe-z3/article/keeping-your-zaxe-z3-clean',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.0.links.3',
        link: '/products/3dprinters/zaxe-z3/article/your-first-bed-calibration-with-zaxe-z3-3d-printer',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.0.links.4',
        link: '/articles/basic-3d-printing-safety',
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
        link: '/articles/useful-3d-printing-tools-and-accessories',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.1.links.1',
        link: '/products/3dprinters/zaxe-x3/article/your-first-bed-calibration-with-zaxe-x3-3d-printer',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.1.links.2',
        link: '/products/3dprinters/zaxe-x3/article/keeping-your-zaxe-x3-clean',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.1.links.3',
        link: '/products/3dprinters/zaxe-z3/article/doing-basic-maintenance-on-your-zaxe-z3-3d-printer',
        isExternal: false,
      },
      {
        title: 'components.quick-navigation.columns.1.links.4',
        link: '/products/3dprinters/zaxe-z3/article/how-to-change-filament-on-your-zaxe-z3',
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
