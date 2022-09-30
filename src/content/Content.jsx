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

const DateOfToday = () => {
  const todayDate = new Date();

  return `${String(todayDate.getDate()).padStart(2, '0')}${String(
    todayDate.getMonth() + 1
  ).padStart(2, '0')}${todayDate.getFullYear().toString().slice(2)}`;
};

// ? Template of suggestions
/*

{
text: {
en: '',
tr: '',
},
keys: [''],
},

*/
const Suggestions = [
  {
    text: {
      en: 'Guide to Getting Your First Print Using xDesktop',
      tr: 'xDesktop Kullanarak İlk Baskınızı Alma Kılavuzu',
    },
    keys: ['guide', 'kılavuz', 'xdesktop', 'first', 'ilk', 'baskı'],
  },
  {
    text: {
      en: 'The New xDesktop 2.3.14 Version is Live!',
      tr: 'Yeni xDesktop 2.3.14 Versiyonu Yayında!',
    },
    keys: [
      'xdesktop',
      'update',
      'güncelleme',
      'versiyon',
      'yeni',
      'new',
      '2.3.14',
    ],
  },
  {
    text: {
      en: 'How to Get Faster Prints with Your Zaxe Z3',
      tr: "Zaxe Z3'ünüzle Nasıl Daha Hızlı Baskı Alınır",
    },
    keys: ['z3', 'faster', 'fast', 'hızlı', 'daha', 'speed', 'hız'],
  },
  {
    text: {
      en: 'How to Get Faster Prints with Your Zaxe X3',
      tr: "Zaxe X3'ünüzle Nasıl Daha Hızlı Baskı Alınır",
    },
    keys: ['x3', 'faster', 'fast', 'hızlı', 'daha', 'speed', 'hız'],
  },
  {
    text: {
      en: 'Know Your Zaxe Z3 3D Printer',
      tr: 'Zaxe Z3 3D Yazıcınızı Tanıyın',
    },
    keys: [
      'z3',
      'core',
      'xy',
      'spool',
      'swing',
      'door',
      'nfc',
      'sensor',
      'power',
      'loss',
      'design',
      'passive',
      'heated',
      'chamber',
    ],
  },
  {
    text: {
      en: 'Know Your Zaxe X3 3D Printer',
      tr: 'Zaxe X3 3D Yazıcınızı Tanıyın',
    },
    keys: [
      'x3',
      'core',
      'xy',
      'spool',
      'swing',
      'door',
      'nfc',
      'sensor',
      'power',
      'loss',
      'design',
      'passive',
      'heated',
      'chamber',
    ],
  },
  {
    text: {
      en: 'Doing Basic Maintenance on Your Zaxe Z3 3D Printer',
      tr: 'Zaxe Z3 3D Yazıcınızda Temel Bakım Yapımı',
    },
    keys: [
      'z3',
      'maintenance',
      'bakım',
      'basic',
      'temel',
      'lubrication',
      'yağlama',
      'adjustment',
      'ayar',
      'belt',
      'tension',
      'gerginlik',
      'hepa',
      'filtre',
      'nozül',
      'nozzle',
      'değiştirme',
    ],
  },
  {
    text: {
      en: 'Doing Basic Maintenance on Your Zaxe X3 3D Printer',
      tr: 'Zaxe X3 3D Yazıcınızda Temel Bakım Yapımı',
    },
    keys: [
      'x3',
      'maintenance',
      'bakım',
      'basic',
      'temel',
      'lubrication',
      'yağlama',
      'adjustment',
      'ayar',
      'belt',
      'tension',
      'gerginlik',
      'hepa',
      'filtre',
      'nozül',
      'nozzle',
      'değiştirme',
    ],
  },
  {
    text: {
      en: 'About xDesktop',
      tr: 'xDesktop Hakkında',
    },
    keys: ['xdesktop'],
  },
  {
    text: {
      en: 'About xCloud',
      tr: 'xCloud Hakkında',
    },
    keys: ['xcloud'],
  },
  {
    text: {
      en: 'Replacing the HEPA Filter',
      tr: 'HEPA Filtre Değişimi',
    },
    keys: [
      'hepa',
      'filter',
      'filtre',
      'replace',
      'replacing',
      'carbon',
      'karbon',
      'değişim',
      'değişimi',
      'değişimler',
      'değişimleri',
    ],
  },
  {
    text: {
      en: 'How to Change Your Nozzle',
      tr: 'Nozül Nasıl Değiştirilir',
    },
    keys: [
      'change',
      'nozzle',
      'nozül',
      'değiştirme',
      'değiştirilir',
      'replace',
    ],
  },
  {
    text: {
      en: 'How to Adjust Belt Tension',
      tr: 'Kemer Gerginliği Nasıl Ayarlanır',
    },
    keys: [
      'adjust',
      'belt',
      'tension',
      'kemer',
      'gerginligi',
      'ayarlamak',
      'ayarlanır',
    ],
  },
  {
    text: {
      en: 'How to Grease the Rails',
      tr: 'Raylar Nasıl Yağlanır',
    },
    keys: [
      'grease',
      'greasing',
      'yağlama',
      'yağlanır',
      'yağ',
      'raylar',
      'rails',
      'lubrication',
      'lubricating',
    ],
  },
  {
    text: {
      en: 'How to Fix Bad Overhangs',
      tr: 'Çıkıntı Sorunları Nasıl Çözülür',
    },
    keys: [
      'overhang',
      'çıkıntı',
      'köprü',
      'bridge',
      'overhangs',
      'slope',
      'slopes',
    ],
  },
  {
    text: {
      en: 'How to Fix Layer Shifting',
      tr: 'Katman Kayması Nasıl Çözülür',
    },
    keys: ['layer', 'shifting', 'shift', 'kayma', 'katman'],
  },
  {
    text: {
      en: 'How to Fix Ghosting',
      tr: 'Dalgalanma Sorunu Nasıl Çözülür',
    },
    keys: ['ghosting', 'dalgalanma', 'ringing'],
  },
  {
    text: {
      en: 'How to Fix Clogged Nozzle',
      tr: 'Tıkalı Nozül Nasıl Açılır',
    },
    keys: ['clogged', 'nozzle', 'nozül', 'tıkalı', 'tıkandı'],
  },
  {
    text: {
      en: 'How to Fix Stringing',
      tr: 'İpliklenme Nasıl Çözülür',
    },
    keys: ['stringing', 'string', 'ipliklenme'],
  },
  {
    text: {
      en: 'How to Fix No Extrusion',
      tr: 'Ekstrüzyon Durdu Sorunu Nasıl Çözülür',
    },
    keys: ['extrusion', 'ekstrüzyon', 'durdu', 'stopped', 'no'],
  },
  {
    text: {
      en: 'How to Fix Delamination or Layer Separation',
      tr: 'Delaminasyon veya Katman Ayrılması Nasıl Çözülür',
    },
    keys: [
      'delamination',
      'delaminasyon',
      'katman',
      'ayrılma',
      'seperation',
      'layer',
    ],
  },
  {
    text: {
      en: 'How to Fix Warping',
      tr: 'Büzülme Sorunu Nasıl Çözülür',
    },
    keys: [
      'warping',
      'büzülme',
      'köşe',
      'corner',
      'köşeler',
      'corners',
      'kalkma',
      'rise',
    ],
  },
  {
    text: {
      en: 'How to Achieve Better Dimensional Accuracy in Your 3D Prints',
      tr: '3D Baskılarınızda Daha İyi Boyutsal Doğruluk Nasıl Elde Edilir',
    },
    keys: [
      'dimensional',
      'boyut',
      'accuracy',
      'doğruluk',
      'stability',
      'tutarlılık',
    ],
  },
  {
    text: {
      en: 'Guide to Infill Settings in 3D Printing ',
      tr: '3D Baskıda Dolgu Ayarları Rehberi',
    },
    keys: [
      'infill',
      'doluluk',
      'dolgu',
      'pattern',
      'desen',
      'rehber',
      'grid',
      'lines',
      'triangle',
      'triangles',
      'honeycomb',
      'gyroid',
      'hexagon',
      'cross',
      'concentric',
      'çizgiler',
      'üçgen',
      'kare',
      'altıgen',
      'çapraz',
      'çaprazlar',
      'balpeteği',
    ],
  },
  {
    text: {
      en: 'How to Make 3D Printed Parts More Durable and Stronger',
      tr: '3D Baskılı Parçaları Daha Dayanıklı ve Daha Güçlü Hale Getirme',
    },
    keys: [
      'stronger',
      'güçlü',
      'durable',
      'dayanıklı',
      'longevity',
      'sağlam',
      'sturdy',
    ],
  },
  {
    text: {
      en: 'How OctoPi Can Make 3D Printing Better for You',
      tr: 'OctoPi 3D Baskıyı sizin için nasıl daha iyi hale getirir?',
    },
    keys: ['octo', 'pi', 'octopi', 'octoprint', 'plugin'],
  },
  {
    text: {
      en: 'What is Klipper and How It Makes Your Zaxe 3D Printer Better?',
      tr: 'Klipper Nedir ve Zaxe 3D Yazıcınızı Nasıl Daha İyi Hale Getirir?',
    },
    keys: ['klipper', 'input', 'shaper', 'shape', 'shaping', 'inputshaper'],
  },
  {
    text: {
      en: 'Useful 3D Printing Tools and Accessories',
      tr: 'Kullanışlı 3D Baskı Araçları ve Aksesuarları',
    },
    keys: ['useful', 'kullanışlı', 'tools', 'tool', 'araç', 'aksesuar', 'alet'],
  },
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
    keys: [
      'filament',
      'filaments',
      'guide',
      'abs',
      'pla',
      'petg',
      'flex',
      'asa',
      'pc',
      'pc-abs',
    ],
  },
  {
    text: {
      en: 'How to Change Filament on Your Zaxe Z3',
      tr: "Zaxe Z3'de Nasıl Filament Değiştirilir?",
    },
    keys: ['filament', 'change', 'değiştirme'],
  },
  {
    text: {
      en: 'How to Change Filament on Your Zaxe X3',
      tr: "Zaxe X3'de Nasıl Filament Değiştirilir?",
    },
    keys: ['filament', 'change', 'değiştirme'],
  },
  {
    text: {
      en: 'Keeping Your Zaxe Z3 Clean',
      tr: "Zaxe Z3'ünüzü Temiz Tutma",
    },
    keys: ['clean', 'temiz', 'temizlemek', 'cleaning', 'maintenance'],
  },
  {
    text: {
      en: 'Keeping Your Zaxe X3 Clean',
      tr: "Zaxe X3'ünüzü Temiz Tutma",
    },
    keys: ['clean', 'temiz', 'temizlemek', 'cleaning', 'maintenance'],
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
    keys: ['calibration', 'kalibrasyon', 'bed', 'yatak'],
  },
  {
    text: {
      en: 'Your First Bed Calibration with Zaxe X3 3D Printer',
      tr: 'Zaxe X3 3D Yazıcınız ile İlk Kalibrasyonunuz',
    },
    keys: ['calibration', 'kalibrasyon', 'bed', 'yatak'],
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
      'fix',
      'çözme',
      'çözümü',
      'sorun',
      'troubleshooting',
      'failed',
      'prints',
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
        '*',
        'unbox',
        'unboxing',
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
      tags: ['*', 'z3'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-calibration-z3',
      label: 'content-zxz3:starterVideos.2.label',
      videoURL: `${CDNURL}videos/zaxe-z3/calibration.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/calibration.webp`,
      category: 'maintenance',
      tags: [
        '*',
        'calibration',
        'calibrate',
        'how to calibrate',
        'kalibrasyon',
        'kalibre',
      ],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-z-probe-adjustment-z3',
      label: 'content-zxz3:starterVideos.3.label',
      videoURL: `${CDNURL}videos/zaxe-z3/z-probe-adjustment.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/z-probe-adjustment.webp`,
      category: 'maintenance',
      tags: ['*', 'z', 'probe', 'adjustment', 'değiştirme'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-sd-card-replacement-z3',
      label: 'content-zxz3:starterVideos.4.label',
      videoURL: `${CDNURL}videos/zaxe-z3/sd-card-replacement.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/sd-card-replacement.webp`,
      category: 'maintenance',
      tags: ['*', 'sd', 'card', 'replacement', 'hafıza', 'kart', 'değiştirme'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-tube-replacement-z3',
      label: 'content-zxz3:starterVideos.5.label',
      videoURL: `${CDNURL}videos/zaxe-z3/tube-replacement.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/tube-replacement.webp`,
      category: 'repair',
      tags: ['*', 'tube', 'replacement', 'boru', 'teflon', 'değiştirme'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-motherboard-replacement-z3',
      label: 'content-zxz3:starterVideos.6.label',
      videoURL: `${CDNURL}videos/zaxe-z3/motherboard-replacement.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/motherboard-replacement.webp`,
      category: 'repair',
      tags: ['*', 'motherboard', 'anakart', 'replacement', 'değiştirme'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-hotend-replacement-z3',
      label: 'content-zxz3:starterVideos.7.label',
      videoURL: `${CDNURL}videos/zaxe-z3/hotend-replacement.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/hotend-replacement.webp`,
      category: 'repair',
      tags: ['*', 'hotend', 'replacement', 'değiştirme'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-fan-replacement-z3',
      label: 'content-zxz3:starterVideos.8.label',
      videoURL: `${CDNURL}videos/zaxe-z3/fan-replacement.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/fan-replacement.webp`,
      category: 'maintenance',
      tags: ['*', 'fan', 'replacement', 'değiştirme'],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-disasemble-head-z3',
      label: 'content-zxz3:starterVideos.9.label',
      videoURL: `${CDNURL}videos/zaxe-z3/disasemble-head.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/disasemble-head.webp`,
      category: 'maintenance',
      tags: [
        '*',
        'head',
        'kafa',
        'extruder',
        'baskı kafası',
        'baskı',
        'dissemble',
        'disasemble',
        'sökme',
        'değiştirme',
      ],
    },
    {
      product: 'zaxe-z3',
      slug: 'zxz3-disasamble-latch-z3',
      label: 'content-zxz3:starterVideos.10.label',
      videoURL: `${CDNURL}videos/zaxe-z3/disasemble-latch.mp4`,
      thumbnail: `${CDNURL}videos/zaxe-z3/thumbnails/disasemble-latch.webp`,
      category: 'maintenance',
      tags: [
        '*',
        'latch',
        'mandal',
        'dissemble',
        'disasemble',
        'sökme',
        'değiştirme',
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
    tags: ['*', 'z3', 'handbook', 'user', 'manual', 'kılavuz', 'kullanım'],
  },
  {
    slug: 'x3-user-manual',
    title: 'content-zxx3:downloads.2.title',
    updateDate: '2022-01-01',
    type: 'doc',
    link: `${CDNURL}docs/global/zaxe-x3-user-manual.pdf`,
    showLastUpdate: true,
    description: "Zaxe X3's Handbook",
    tags: ['*', 'x3', 'handbook', 'user', 'manual', 'kılavuz', 'kullanım'],
  },
  {
    slug: 'x3-firmware',
    title: 'content-zxx3:downloads.0.title',
    updateDate: '2022-01-01',
    type: 'firmware',
    link: `https://d.zaxe.com/x3en?d=${DateOfToday()}`,
    showLastUpdate: true,
    description: "Zaxe X3's Firmware",
    tags: ['*', 'x3', 'firmware', 'yazılım'],
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
    tags: ['*', 'xdesktop'],
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
    tags: ['*', 'xdesktop', 'older-version'],
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
    tags: ['*', 'xdesktop', 'older-version'],
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
    tags: ['*', 'xdesktop', 'older-version'],
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
    tags: ['*', 'xdesktop', 'older-version'],
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
    allVideos: ProductVideos[0],
    starterVideos: [
      ProductVideos[0].find(({ slug }) => slug === 'zxz3-unboxing-z3'),
      ProductVideos[0].find(({ slug }) => slug === 'zxz3-explore-z3'),
      ProductVideos[0].find(({ slug }) => slug === 'zxz3-calibration-z3'),
    ],
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
    allVideos: ProductVideos[1],
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
    allVideos: ProductVideos[2],
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
        link: `https://d.zaxe.com/x3en?d=${DateOfToday()}`,
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
