/* eslint-disable react/destructuring-assignment */
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function ProductNav({ product }) {
  const { t } = useTranslation();
  const [searchBarPHs, setSearchBarPHs] = React.useState({
    placeHolders: [
      t('searchbar.placeholders.0'),
      t('searchbar.placeholders.1'),
      t('searchbar.placeholders.2'),
      t('searchbar.placeholders.3'),
      t('searchbar.placeholders.4'),
      t('searchbar.placeholders.5'),
    ],
    active: 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSearchBarPHs({
        ...searchBarPHs,
        active:
          searchBarPHs.placeHolders.length - 1 === searchBarPHs.active
            ? 0
            : searchBarPHs.active + 1,
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [searchBarPHs]);

  React.useEffect(() => {
    const barForm = document.querySelector('form.main-search-bar');
    const HandleSearch = (e) => {
      e.preventDefault();
      const searchInput = barForm.querySelector('input');
      // eslint-disable-next-line no-alert
      alert(
        searchInput.value
          ? `${t('searchbar.searching-for')} ${searchInput.value}`
          : `${t('searchbar.searching-for')} Nothing`
      );
    };

    barForm.addEventListener('submit', HandleSearch);

    return () => barForm && barForm.removeEventListener('submit', HandleSearch);
  }, []);
  return (
    <div
      data-aos="fade"
      data-aos-delay={200}
      data-aos-duration={500}
      className="relative flex flex-wrap items-center justify-start w-full gap-5 p-5 xl:h-full lg:h-full xl:flex-nowrap lg:flex-nowrap xl:max-w-app lg:max-w-app md:max-w-md"
    >
      <div className="grid w-full grid-cols-1 xl:hidden lg:hidden place-content-start place-items-center">
        <span className="text-3xl font-bold text-center text-zaxe">
          {t('product-page-components.product-nav.title')}
        </span>
        <h1 className="text-5xl font-bold text-center xl:text-7xl lg:text-7xl text-zaxe">
          {product.name}
        </h1>
      </div>
      <div className="w-full xl:max-w-[400px] lg:max-w-[400px] max-w-full flex justify-center items-end">
        <Image src={product.images.main.img} alt={product.images.main.alt} />
      </div>
      <div className="h-full gap-4  xl:order-none lg:order-none order-2 grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-2 place-content-end place-items-center w-full xl:max-w-[235px] lg:max-w-[235px] max-w-full">
        <button
          type="button"
          className="w-full bg-[#F5F5F5] p-1 py-2.5 rounded-[20px] text-[#6F6F6F] transition-color
                duration-150 hover:bg-zaxe hover:text-white xl:text-[22px] lg:text-[22px] text-lg min-h-[60px] ring-2 ring-transparent active:ring-sky-300 font-medium"
        >
          Printable Parts
        </button>
        <button
          type="button"
          className="w-full bg-[#F5F5F5] p-1 py-2.5 rounded-[20px] text-[#6F6F6F] transition-color
                duration-150 hover:bg-zaxe hover:text-white xl:text-[22px] lg:text-[22px] text-lg min-h-[60px] ring-2 ring-transparent active:ring-sky-300 font-medium"
        >
          Forum
        </button>
        <button
          type="button"
          className="w-full bg-[#F5F5F5] p-1 py-2.5 rounded-[20px] text-[#6F6F6F] transition-color
                duration-150 hover:bg-zaxe hover:text-white xl:text-[22px] lg:text-[22px] text-lg min-h-[60px] ring-2 ring-transparent active:ring-sky-300 font-medium"
        >
          Spare Parts
        </button>
        <button
          type="button"
          className="w-full bg-[#F5F5F5] p-1 py-2.5 rounded-[20px] text-[#6F6F6F] transition-color
                duration-150 hover:bg-zaxe hover:text-white xl:text-[22px] lg:text-[22px] text-lg min-h-[60px] ring-2 ring-transparent active:ring-sky-300 font-medium"
        >
          Z3 Video
        </button>
      </div>
      <div className="relative grid w-full h-full grid-cols-1 gap-0 place-content-end xl:place-items-start lg:place-items-start place-items-center">
        <span className="hidden text-3xl font-bold text-zaxe xl:block lg:block">
          {t('product-page-components.product-nav.title')}
        </span>
        <h1 className="hidden font-bold text-7xl text-zaxe xl:block lg:block">
          {product.name}
        </h1>
        <p className="w-full xl:text-left lg:text-left text-center text-xl my-5 max-w-md font-medium text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <form className="relative flex items-center justify-center min-h-[60px] w-full max-w-md overflow-hidden transition-all duration-150 rounded-[20px] main-search-bar ring-2 ring-transparent focus-within:ring-zaxe xl:h-12 lg:h-12 h-9">
          <input
            placeholder={searchBarPHs.placeHolders[searchBarPHs.active]}
            className=" bg-[#F5F5F5] xl:text-md lg:text-md text-sm placeholder-slate-300 outline-none p-1 px-4 pr-0 relative w-full h-full text-center"
            type="text"
          />
          <button
            type="submit"
            className="w-14 bg-[#F5F5F5] transition-all duration-100 hover:bg-zinc-200 active:bg-zaxe active:text-white text-zaxe h-full p-0 m-0 flex flex-wrap justify-center items-center"
          >
            <AiOutlineSearch className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductNav;
