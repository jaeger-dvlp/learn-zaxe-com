import React from 'react';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import { BiLinkExternal } from 'react-icons/bi';

function QuickNavigation() {
  const [quickNavItems] = React.useState(Content.components.quickNavigation);
  const { t } = useTranslation();

  return (
    <div className="grid w-full grid-cols-1 px-0 bg-white xl:px-5 lg:px-5 font-zaxe py-28 place-content-start place-items-center">
      <div className="grid w-full grid-cols-1 p-5 py-10 rounded-none xl:max-w-app lg:max-w-app md:max-w-xl bg-zinc-200 xl:p-20 lg:p-20 xl:py-20 lg:qu xl:rounded-2xl lg:rounded-2xl md:rounded-2xl place-content-start place-items-center">
        <div className="grid w-full grid-cols-1 pl-12 gap-14 place-content-start place-items-start xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
          {quickNavItems.map((item) => (
            <div
              key={`quick-nav-${item.title.toLowerCase()}`}
              className="relative grid w-full grid-cols-1 gap-3 place-content-start place-items-center"
            >
              <h1 className="relative w-full grid grid-cols-1 gap-3 p-0 text-2xl font-semibold text-[#111111] ">
                <item.Icon className="absolute w-8 h-8 -left-0 -translate-x-[130%] top-1/2 -translate-y-1/2" />
                <span>{t(item.title)}</span>
              </h1>
              <ul className="grid w-full grid-cols-1 gap-2 place-content-start place-items-start">
                {item.links.map((link) => (
                  <li
                    key={`quick-nav-${item.title.toLowerCase()}-${link.title.toLowerCase()}`}
                  >
                    <a
                      href={link.link}
                      className="relative flex group justify-start items-center gap-2 transition-all duration-100 after:absolute after:-bottom-1 after:h-[1px] after:w-0 after:bg-zaxe after:left-0 hover:after:w-full after:transition-all after:duration-[300ms] decoration-gray-600 hover:text-zaxe"
                    >
                      <span>{link.title}</span>
                      <BiLinkExternal className="text-sm transition-all duration-200 text-zinc-500 group-hover:text-current" />
                    </a>
                  </li>
                ))}
                <li className="flex items-center justify-start">
                  <a
                    href={item.allURL}
                    className="p-2 px-4 mt-5 font-semibold text-white transition-all duration-150 rounded-lg shadow-lg text-md shadow-black/30 bg-zaxe hover:bg-black hover:text-white"
                  >
                    {t('components.quick-navigation.buttons.view-all')}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickNavigation;
