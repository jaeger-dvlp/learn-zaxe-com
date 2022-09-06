import React from 'react';
import Content from '@/src/content/Content';

function QuickNavigation() {
  const [quickNavItems] = React.useState(Content.components.quickNavigation);

  return (
    <div className="grid w-full grid-cols-1 px-0 bg-white xl:px-5 lg:px-5 font-zaxe py-28 place-content-start place-items-center">
      <div className="grid w-full grid-cols-1 p-5 py-10 rounded-none xl:max-w-app lg:max-w-app md:max-w-xl bg-zinc-200 xl:p-20 lg:p-20 xl:py-20 lg:qu xl:rounded-2xl lg:rounded-2xl md:rounded-2xl place-content-start place-items-center">
        <div className="grid w-full grid-cols-1 gap-14 place-content-start place-items-start xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
          {quickNavItems.map((item) => (
            <div
              key={`quick-nav-${item.title.toLowerCase()}`}
              className="relative grid w-full grid-cols-1 gap-3 place-content-start place-items-center"
            >
              <h1 className="relative w-full grid grid-cols-1 gap-3 p-0 text-2xl font-semibold text-[#111111] ">
                {item.icon}
                <span>{item.title}</span>
              </h1>
              <ul className="grid w-full grid-cols-1 gap-2 place-content-start place-items-start">
                {item.links.map((link) => (
                  <li
                    key={`quick-nav-${item.title.toLowerCase()}-${link.title.toLowerCase()}`}
                  >
                    <a
                      href={link.link}
                      className="underline transition-all duration-100 underline-offset-2 decoration-gray-600 hover:text-zaxe"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li className="flex items-center justify-start">
                  <a
                    href={item.allURL}
                    className="p-2 px-4 mt-5 font-semibold text-white transition-all duration-150 rounded-lg shadow-lg text-md shadow-black/30 bg-zaxe hover:bg-black hover:text-white"
                  >
                    See all
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
