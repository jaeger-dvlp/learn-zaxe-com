import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({ value }) {
  const router = useRouter();
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
      router.push(`/search?q=${searchInput.value}`);
    };

    barForm.addEventListener('submit', HandleSearch);

    return () => barForm && barForm.removeEventListener('submit', HandleSearch);
  }, []);
  return (
    <div className="grid w-full grid-cols-1 place-content-start place-items-center gap-7">
      <h1 className="xl:text-4xl lg:text-4xl text-xl font-bold text-[#585858] text-center">
        {t('searchbar.categories.heading')}
      </h1>
      <form className="relative flex items-center justify-center w-full max-w-md overflow-hidden transition-all duration-150 rounded-2xl main-search-bar ring-2 ring-transparent focus-within:ring-zaxe xl:h-[60px] lg:h-[60px] h-14">
        <input
          placeholder={searchBarPHs.placeHolders[searchBarPHs.active]}
          className=" bg-[#F5F5F5] xl:text-lg lg:text-lg text-sm placeholder-slate-300
        outline-none p-1 px-4 pr-0 relative w-full h-full text-center"
          type="text"
          required
          defaultValue={value}
        />
        <button
          type="submit"
          className="w-14 bg-[#F5F5F5] transition-all duration-100 hover:bg-zinc-200
        active:bg-zaxe active:text-white text-zaxe h-full p-0 m-0 flex flex-wrap
        justify-center items-center"
        >
          <AiOutlineSearch className="text-2xl" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
