import { i18n } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { BsImage } from 'react-icons/bs';

function DownloadDocuments() {
  const [documents] = React.useState([
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
  ]);
  return (
    <div className="grid w-full grid-cols-1 bg-white font-zaxe place-content-start place-items-center">
      <div className="grid w-full grid-cols-1 px-5 bg-white xl:px-9 lg:px-9 max-w-app place-content-start place-items-center py-28">
        <div className="grid w-full grid-cols-1 gap-1 xl:grid-cols-12 lg:grid-cols-12 place-content-start place-items-center">
          <div className="grid w-full h-full grid-cols-1 col-span-5 py-0 xl:py-3 lg:py-3 place-content-start place-items-start">
            <h1 className="mb-6 text-2xl font-bold xl:text-4xl lg:text-4xl text-zaxe">
              Download Documents
            </h1>
            <ul className="grid w-full grid-cols-1 gap-3 place-content-start place-items-start">
              {documents.map((document) => (
                <li key={document.name.en}>
                  <Link
                    href={`/documents/${i18n.language}/${document.url}`}
                    locale={false}
                    download
                  >
                    <a className="text-xl font-medium transition-all duration-150 hover:text-black xl:text-2xl lg:text-lg text-zaxe">
                      {document.name[i18n.language]}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center justify-center hidden w-full col-span-7 xl:flex lg:flex">
            <div className="w-full flex p-0 m-0 h-full min-h-[349px] rounded-2xl bg-[#313131] overflow-hidden relative">
              <BsImage className="absolute text-4xl bottom-6 right-6 text-zaxe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadDocuments;
