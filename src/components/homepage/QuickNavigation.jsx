import React from 'react';
import { FaCompass, FaTools } from 'react-icons/fa';
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';

function QuickNavigation() {
  const [quickNavItems] = React.useState([
    {
      title: 'Featured',
      icon: <FaCompass className="text-3xl" />,
      allURL: '#',
      links: [
        {
          title: 'Metal Expansion Kit',
          link: '#',
        },
        {
          title: 'PVA Removal Station',
          link: '#',
        },
        {
          title: 'Print Cores',
          link: '#',
        },
        {
          title: 'Spare Parts',
          link: '#',
        },
        {
          title: 'Maintenance Kits',
          link: '#',
        },
        {
          title: 'Advanced 3D Printer Tips',
          link: '#',
        },
      ],
    },
    {
      title: 'Maintenance',
      icon: <FaTools className="text-3xl" />,
      allURL: '#',
      links: [
        {
          title: 'How to fix warping',
          link: '#',
        },
        {
          title: 'How to fix stringing',
          link: '#',
        },
        {
          title: 'How to fix pillowing',
          link: '#',
        },
        {
          title: 'How to fix under-extrusion',
          link: '#',
        },
        {
          title: 'How to feed filament loader',
          link: '#',
        },
        {
          title: 'How to fix feed issues',
          link: '#',
        },
      ],
    },
    {
      title: 'Downloads',
      icon: <BsFillFileEarmarkArrowDownFill className="text-3xl" />,
      allURL: '#',
      links: [
        {
          title: 'Z3 User Manual',
          link: '#',
        },
        {
          title: 'X3 User Manual',
          link: '#',
        },
        {
          title: 'X3 Firmware',
          link: '#',
        },
        {
          title: 'xlite Firmware',
          link: '#',
        },
        {
          title: 'xDesktop 2.3.16',
          link: '#',
        },
      ],
    },
  ]);

  return (
    <div className="grid w-full grid-cols-1 px-0 bg-white xl:px-5 lg:px-5 font-zaxe py-28 place-content-start place-items-center">
      <div className="grid w-full grid-cols-1 p-5 py-10 rounded-none xl:max-w-app lg:max-w-app md:max-w-xl bg-zinc-200 xl:p-20 lg:p-20 xl:py-20 lg:qu xl:rounded-2xl lg:rounded-2xl md:rounded-2xl place-content-start place-items-center">
        <div className="grid w-full grid-cols-1 gap-14 place-content-start place-items-start xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
          {quickNavItems.map((item) => (
            <div className="relative grid w-full grid-cols-1 gap-3 place-content-start place-items-center">
              <h1 className="relative w-full grid grid-cols-1 gap-3 p-0 text-2xl font-semibold text-[#111111] ">
                {item.icon}
                <span>{item.title}</span>
              </h1>
              <ul className="grid w-full grid-cols-1 gap-2 place-content-start place-items-start">
                {item.links.map((link) => (
                  <li>
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
