import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

function ScrollTop() {
  const [scrollTop, setScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`${
        scrollTop
          ? 'translate-y-0 visible pointer-events-auto opacity-100'
          : 'translate-y-full invisible pointer-events-none opacity-0'
      } bg-white text-zaxe  hover:bg-zaxe hover:border-zaxe hover:text-white rounded-xl shadow-xl z-[10] transition-all duration-200 border-2 border-zinc-300 w-14 h-14 flex justify-center items-center fixed right-5 bottom-5`}
    >
      <BsArrowUpShort className="text-4xl" />
    </button>
  );
}

export default ScrollTop;
