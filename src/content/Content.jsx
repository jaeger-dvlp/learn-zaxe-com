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
const Content = { products: Products, productCategories: ProductCategories };
export default Content;
