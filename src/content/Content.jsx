/* eslint-disable react/react-in-jsx-scope */
import { BsApple, BsWindows } from 'react-icons/bs';
import { v4 as uuidV4 } from 'uuid';

const { CDNURL } = process.env;

const OSIcons = {
  win: <BsWindows />,
  mac: <BsApple />,
};

const ProductPosts = [
  [
    {
      title: {
        tr: 'Baskı Kafası Fan Değişimi',
        en: 'Printhead Fan Replacement',
      },
      slug: 'printhead-fan-replacement',
      category: 'repair',
      thumbnail: `${CDNURL}img/mockpostthumbnail4.webp`,
    },
  ],
  [
    {
      title: {
        tr: 'Baskı Kafası Fan Değişimi',
        en: 'Printhead Fan Replacement',
      },
      slug: 'printhead-fan-replacement',
      category: 'repair',
      thumbnail: `${CDNURL}img/mockpostthumbnail4.webp`,
    },
  ],
  [
    {
      title: {
        tr: 'xDesktop Kurulumu',
        en: 'Installing xDesktop',
      },
      slug: 'installing-xdesktop',
      category: 'start',
      thumbnail: `${CDNURL}img/mockpostthumbnail9.webp`,
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
      tags: ['z3'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-calibration-z3',
      label: 'content-zxz3:starterVideos.2.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/Z3_printtable.webp`,
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
      tags: ['x3'],
    },
    {
      product: 'zaxe-x3',
      slug: 'zxx3-calibration-x3',
      label: 'content-zxx3:starterVideos.2.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/X3_corexy.webp`,
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
      tags: ['xdesktop', 'ui', 'user interface', 'kullanıcı arayüzü', 'arayüz'],
    },
    {
      product: 'zaxe-xdesktop',
      slug: 'zxxdesktop-shortcuts-xdesktop',
      label: 'content-zxxdesktop:starterVideos.1.label',
      videoURL: `${CDNURL}video/mock-video-xdesktop.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/xdesktop_shortcuts.webp`,
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
    link: `${CDNURL}firmwares/mock-firmware.zip`,
    showLastUpdate: true,
    description: "Zaxe X3's Firmware",
    tags: ['x3', 'firmware', 'yazılım'],
  },
  {
    slug: 'xdesktop',
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

const ProductPostCategories = [
  {
    product: 'zaxe-z3',
    categories: [
      {
        label: 'content-zxz3:categories.0.label',
        slug: 'start',
      },
      {
        label: 'content-zxz3:categories.1.label',
        slug: 'repair',
      },
      {
        label: 'content-zxz3:categories.2.label',
        slug: 'maintenance',
      },
      {
        label: 'content-zxz3:categories.3.label',
        slug: 'tips-tricks',
      },
      {
        label: 'content-zxz3:categories.4.label',
        slug: 'usingtheprinter',
      },
      {
        label: 'content-zxz3:categories.5.label',
        slug: 'software',
      },
      {
        label: 'content-zxz3:categories.6.label',
        slug: 'troubleshooting',
      },
      {
        label: 'content-zxz3:categories.7.label',
        slug: 'filaments',
      },
    ],
  },
  {
    product: 'zaxe-x3',
    categories: [
      {
        label: 'content-zxx3:categories.0.label',
        slug: 'start',
      },
      {
        label: 'content-zxx3:categories.1.label',
        slug: 'repair',
      },
      {
        label: 'content-zxx3:categories.2.label',
        slug: 'maintenance',
      },
      {
        label: 'content-zxx3:categories.3.label',
        slug: 'tips-tricks',
      },
      {
        label: 'content-zxx3:categories.4.label',
        slug: 'usingtheprinter',
      },
      {
        label: 'content-zxx3:categories.5.label',
        slug: 'software',
      },
      {
        label: 'content-zxx3:categories.6.label',
        slug: 'troubleshooting',
      },
      {
        label: 'content-zxx3:categories.7.label',
        slug: 'filaments',
      },
    ],
  },
  {
    product: 'zaxe-xdesktop',
    categories: [
      {
        label: 'content-zxxdesktop:categories.0.label',
        slug: 'start',
      },
      {
        label: 'content-zxxdesktop:categories.1.label',
        slug: 'tips-tricks',
      },
      {
        label: 'content-zxxdesktop:categories.2.label',
        slug: 'software',
      },
      {
        label: 'content-zxxdesktop:categories.3.label',
        slug: 'troubleshooting',
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
    categories: ProductPostCategories[0].categories,
    posts: ProductPosts[0],
    downloads: [
      Downloadables.find(({ slug }) => slug === 'z3-user-manual'),
      Downloadables.find(({ slug }) => slug === 'xdesktop'),
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
    categories: ProductPostCategories[1].categories,
    posts: ProductPosts[1],
    downloads: [
      Downloadables.find(({ slug }) => slug === 'x3-user-manual'),
      Downloadables.find(({ slug }) => slug === 'x3-firmware'),
      Downloadables.find(({ slug }) => slug === 'xdesktop'),
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
    categories: ProductPostCategories[2].categories,
    posts: ProductPosts[2],
    downloads: [Downloadables.find(({ slug }) => slug === 'xdesktop')],
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

const Content = {
  translations: [
    'common',
    'productmeta',
    'content-zxz3',
    'content-zxx3',
    'content-zxxdesktop',
  ],

  products: Products,
  productPosts: ProductPosts,
  productVideos: ProductVideos,
  productCategories: ProductCategories,
  productPostCategories: ProductPostCategories,
  components: {
    quickViewer: QuickViewerContent,
    downloadDocuments: DownloadDocuments,
  },
  downloadables: Downloadables,
  OSIcons,
};
export default Content;
