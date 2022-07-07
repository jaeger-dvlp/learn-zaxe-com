import { v4 as uuidV4 } from 'uuid';

const ProductCategories = [
  {
    name: { tr: '3D Yazıcılar', en: '3D Printers' },
    slug: '3dprinter',
  },
  {
    name: { tr: 'Yazılımlar', en: 'Softwares' },
    slug: 'software',
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
        img: require('../images/3dprinters/z3.webp'),
        alt: 'Zaxe Z3',
      },
    },
  },
  {
    name: 'Zaxe X3',
    slug: 'zaxe-x3',
    model: 'X3',
    category: ProductCategories[0],
    images: {
      main: {
        img: require('../images/3dprinters/x3.webp'),
        alt: 'Zaxe X3',
      },
    },
  },
  {
    name: 'Zaxe xDesktop',
    slug: 'zaxe-xdesktop',
    model: 'xDesktop',
    category: ProductCategories[1],
    images: {
      main: {
        img: require('../images/softwares/xdesktop.webp'),
        alt: 'Zaxe xDesktop',
      },
    },
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

const Content = {
  products: Products,
  productCategories: ProductCategories,
  components: {
    quickViewer: QuickViewerContent,
  },
};
export default Content;
