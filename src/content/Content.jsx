import { v4 as uuidV4 } from 'uuid';

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
    starterVideos: [
      {
        label: 'content-zxz3:starterVideos.0.label',
        videoURL: 'https://',
        thumbnail: require('../images/3dprinters/content/z3/Z3_front.webp'),
      },
      {
        label: 'content-zxz3:starterVideos.1.label',
        videoURL: 'https://',
        thumbnail: require('../images/3dprinters/content/z3/Z3_screen.webp'),
      },
      {
        label: 'content-zxz3:starterVideos.2.label',
        videoURL: 'https://',
        thumbnail: require('../images/3dprinters/content/z3/Z3_printtable.webp'),
      },
    ],
  },
  {
    starterVideos: [
      {
        label: 'content-zxx3:starterVideos.0.label',
        videoURL: 'https://',
        thumbnail: require('../images/3dprinters/content/x3/X3_printtable.webp'),
      },
      {
        label: 'content-zxx3:starterVideos.1.label',
        videoURL: 'https://',
        thumbnail: require('../images/3dprinters/content/x3/X3_screen.webp'),
      },
      {
        label: 'content-zxx3:starterVideos.2.label',
        videoURL: 'https://',
        thumbnail: require('../images/3dprinters/content/x3/X3_corexy.webp'),
      },
    ],
  },
  {
    starterVideos: [
      {
        label: 'content-zxxdesktop:starterVideos.0.label',
        videoURL: 'https://',
        thumbnail: require('../images/softwares/content/xdesktop/xdesktop_ui.webp'),
      },
      {
        label: 'content-zxxdesktop:starterVideos.1.label',
        videoURL: 'https://',
        thumbnail: require('../images/softwares/content/xdesktop/xdesktop_shortcuts.webp'),
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
  products: Products,
  productCategories: ProductCategories,
  components: {
    quickViewer: QuickViewerContent,
    downloadDocuments: DownloadDocuments,
  },
};
export default Content;
