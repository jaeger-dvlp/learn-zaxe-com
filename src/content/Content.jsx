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
      thumbnail: `${CDNURL}/img/mockpostthumbnail4.webp`,
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
      thumbnail: `${CDNURL}/img/mockpostthumbnail9.webp`,
    },
  ],
];

const ProductVideos = [
  [
    {
      label: 'content-zxz3:starterVideos.0.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/Z3_front.webp`,
      tags: [
        'unbox',
        'unboxing',
        'z3',
        'zaxe z3 unbox',
        'zaxe z3 unboxing',
        'kutu açılımı',
        'z3 kutu açılımı',
      ],
    },
    {
      label: 'content-zxz3:starterVideos.1.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/Z3_screen.webp`,
      tags: ['z3'],
    },
    {
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
      label: 'content-zxx3:starterVideos.0.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/X3_printtable.webp`,
      tags: [
        'unbox',
        'unboxing',
        'x3',
        'zaxe x3 unbox',
        'zaxe x3 unboxing',
        'kutu açılımı',
        'x3 kutu açılımı',
      ],
    },
    {
      label: 'content-zxx3:starterVideos.1.label',
      videoURL: `${CDNURL}video/mock-video.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/X3_screen.webp`,
      tags: ['x3'],
    },
    {
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
      label: 'content-zxxdesktop:starterVideos.0.label',
      videoURL: `${CDNURL}video/mock-video-xdesktop.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/xdesktop_ui.webp`,
      tags: ['xdesktop', 'ui', 'user interface', 'kullanıcı arayüzü', 'arayüz'],
    },
    {
      label: 'content-zxxdesktop:starterVideos.1.label',
      videoURL: `${CDNURL}video/mock-video-xdesktop.mp4`,
      thumbnail: `${CDNURL}img/thumbnail/xdesktop_shortcuts.webp`,
      tags: ['xdesktop', 'shortcuts', 'kısayollar'],
    },
  ],
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
      {
        slug: 'xdesktop',
        title: 'content-zxz3:downloads.1.title',
        updateDate: '2022-01-01',
        platforms: ['win', 'mac'],
        links: {
          win: 'https://d.zaxe.com/xdesktopwin',
          mac: 'https://d.zaxe.com/xdesktopmac',
        },
        showLastUpdate: false,
      },
      {
        slug: 'z3-handbook',
        title: 'content-zxz3:downloads.2.title',
        updateDate: '2022-01-01',
        type: 'PDF',
        link: 'https://zaxe.com',
        showLastUpdate: true,
      },
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
      {
        slug: 'x3-firmware',
        title: 'content-zxx3:downloads.0.title',
        updateDate: '2022-01-01',
        link: 'https://zaxe.com',
        showLastUpdate: true,
      },
      {
        slug: 'xdesktop',
        title: 'content-zxx3:downloads.1.title',
        updateDate: '2022-01-01',
        platforms: ['win', 'mac'],
        links: {
          win: 'https://d.zaxe.com/xdesktopwin',
          mac: 'https://d.zaxe.com/xdesktopmac',
        },
        showLastUpdate: false,
      },
      {
        slug: 'x3-handbook',
        title: 'content-zxx3:downloads.2.title',
        updateDate: '2022-01-01',
        type: 'PDF',
        link: 'https://zaxe.com',
        showLastUpdate: true,
      },
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
    downloads: [
      {
        slug: 'xdesktop',
        title: 'content-zxxdesktop:downloads.0.title',
        updateDate: '2022-01-01',
        platforms: ['win', 'mac'],
        links: {
          win: 'https://d.zaxe.com/xdesktopwin',
          mac: 'https://d.zaxe.com/xdesktopmac',
        },
        showLastUpdate: false,
      },
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
  {
    name: {
      tr: 'Güvenlik ve Teknik Veri Sayfaları',
      en: 'Safety and Technical Data Sheets',
    },
    url: 'doc.zaxe',
  },
  {
    name: {
      tr: 'Uygunluk Belgesi',
      en: 'Certificate of Compliance',
    },
    url: 'doc.zaxe',
  },
  {
    name: {
      tr: 'Dilimleyici için ABS Profili',
      en: 'ABS Profile for Slicer',
    },
    url: 'doc.zaxe',
  },
  {
    name: {
      tr: "Dilimlemeyi xDesktop'a Aktarma",
      en: 'How to Import Slicing to xDesktop',
    },
    url: 'doc.zaxe',
  },
  {
    name: {
      tr: 'Çoklu Malzeme Uyumluluğu',
      en: 'Multimaterial Compatibility',
    },
    url: 'doc.zaxe',
  },
  {
    name: {
      tr: 'NFC Özellikleri',
      en: 'NFC Specs',
    },
    url: 'doc.zaxe',
  },
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
  OSIcons,
};
export default Content;
