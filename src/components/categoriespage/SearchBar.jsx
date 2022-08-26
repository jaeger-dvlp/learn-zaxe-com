import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({ className }) {
  const router = useRouter();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [suggestionPos, setSuggestionPos] = React.useState('bottom');
  const [suggestionBox, setSuggestionBox] = React.useState({
    show: false,
  });
  const [suggestions] = React.useState([
    {
      text: {
        en: 'How to replace fan of Zaxe X3 Printhead ?',
        tr: 'Zaxe X3 Baskı kafası fanı nasıl değiştirilir ?',
      },
      keys: [
        'fan',
        'printhead',
        'replace',
        'change',
        'x3',
        'baskı',
        'kafası',
        'değiştir',
      ],
    },
    {
      text: {
        en: 'How to change Nozzle of Zaxe Z3 ?',
        tr: 'Zaxe Z3 Nozül nasıl değiştirilir ?',
      },
      keys: ['nozzle', 'change', 'z3', 'nozül', 'değiştir'],
    },
    {
      text: {
        en: 'How to install Zaxe xDesktop ?',
        tr: 'Zaxe xDesktop nasıl kurulur ?',
      },
      keys: ['xdesktop', 'install', 'kurulur', 'kur'],
    },
  ]);
  const [toSuggest, setToSuggest] = React.useState([]);

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

  const activateSuggestionBox = () =>
    setSuggestionBox({ ...suggestionBox, show: true });
  const deactivateSuggestions = () =>
    setSuggestionBox({ ...suggestionBox, show: false });

  React.useEffect(() => {
    const { q } = router.query;
    document.querySelector(`form.${className} input`).value = q || '';
    if (q) {
      setSearchQuery(q);
    } else {
      setSearchQuery('');
    }
  }, [router, router.query, router.asPath]);

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
    const barForm = document.querySelector(`form.${className}`);
    const HandleSearch = (e) => {
      e.preventDefault();
      const searchInput = barForm.querySelector('input');
      router.push(`/${router.locale}/search?q=${searchInput.value}`);
    };

    barForm.addEventListener('submit', HandleSearch);

    return () => barForm && barForm.removeEventListener('submit', HandleSearch);
  }, []);

  const DefViewport = () => {
    const formPos = document
      .querySelector(`form.${className}`)
      .getBoundingClientRect();
    const viewPortH =
      (document.documentElement.clientHeight || 0, window.innerHeight || 0);

    if (viewPortH < formPos.top + 500) {
      setSuggestionPos('top');
    } else {
      setSuggestionPos('bottom');
    }
  };

  React.useEffect(() => {
    const HandleScroll = () => DefViewport();
    window.addEventListener('scroll', HandleScroll);

    return () => window.removeEventListener('scroll', HandleScroll);
  }, []);
  React.useEffect(() => {
    const HandleLoad = () => DefViewport();
    window.addEventListener('load', HandleLoad);

    return () => window.removeEventListener('load', HandleLoad);
  }, []);

  React.useEffect(() => DefViewport(), [suggestionBox]);

  const HandleSearchInput = (e) => {
    activateSuggestionBox(e);

    if (e.target.value.length > 1) {
      const queries = e.target.value.toLowerCase().split(' ');
      const uniqueArray = [];

      const duplicatedArray = queries
        .map((query) =>
          suggestions.filter(({ keys }) =>
            keys.find(
              (key) =>
                query.length > 1 &&
                (key.toLowerCase().includes(query) ||
                  key.toLowerCase() === query)
            )
          )
        )
        .flat();

      duplicatedArray.map((value) => {
        if (
          uniqueArray.find(
            ({ text }) => text[router.locale] === value.text[router.locale]
          ) === undefined
        ) {
          return uniqueArray.push(value);
        }
        return null;
      });

      setToSuggest(uniqueArray);
    } else setToSuggest([]);
  };

  return (
    <div className="grid w-full grid-cols-1 place-content-start place-items-center gap-7">
      <h1 className="xl:text-4xl lg:text-4xl text-xl font-bold text-[#585858] text-center">
        {t('searchbar.categories.heading')}
      </h1>
      <form
        className={`relative flex items-center justify-center w-full max-w-md ${className}`}
      >
        <div className="w-full xl:h-[60px] lg:h-[60px] h-14 overflow-hidden ring-2 ring-transparent focus-within:ring-zaxe transition-all duration-150 rounded-2xl flex justify-center items-center">
          <input
            onChange={(e) => HandleSearchInput(e)}
            onFocus={(e) => HandleSearchInput(e)}
            onClick={(e) => HandleSearchInput(e)}
            onBlur={() => setTimeout(() => deactivateSuggestions(), 150)}
            placeholder={searchBarPHs.placeHolders[searchBarPHs.active]}
            className=" bg-[#F5F5F5] xl:text-lg lg:text-lg text-sm placeholder-slate-300
        outline-none p-1 px-4 pr-0 relative w-full h-full text-center"
            type="text"
            required
            defaultValue={searchQuery || ''}
          />
          <button
            type="submit"
            className="w-14 bg-[#F5F5F5] transition-all duration-100 hover:bg-zinc-200
        active:bg-zaxe active:text-white text-zaxe h-full p-0 m-0 flex flex-wrap
        justify-center items-center"
          >
            <AiOutlineSearch className="text-2xl" />
          </button>
        </div>
        <div
          className={`${
            suggestionBox.show
              ? 'opacity-100 visible scale-100'
              : 'opacity-0 invisible scale-75'
          } w-full h-fit max-h-32 hidden-scroll overflow-y-scroll shadow-xl bg-[#F5F5F5] rounded-2xl border-zaxe border-2 transition-all duration-200 absolute left-0 ${
            suggestionPos === 'top' ? 'bottom-full mb-5' : 'top-full mt-5'
          } z-[5]`}
        >
          <ul className="w-full">
            {toSuggest.length > 0 ? (
              <>
                <li className="flex items-center justify-start w-full p-3 text-center">
                  <span className="text-sm font-normal text-zinc-400">
                    {t('searchbar.did-you-mean')}
                  </span>
                </li>
                {toSuggest.map(({ text }) => (
                  <li className="w-full">
                    <button
                      onClick={() => {
                        router.push(
                          `/${router.locale}/search?q=${text[router.locale]}`
                        );
                      }}
                      className="w-full p-3 font-semibold text-left transition-all duration-200 border-t border-b hover:bg-zinc-200 bg-zinc-100 text-zinc-600 border-zinc-300"
                      type="button"
                    >
                      {text[router.locale]}
                    </button>
                  </li>
                ))}
              </>
            ) : (
              <li className="flex items-center justify-center w-full p-3 text-center">
                <span className="text-sm font-semibold text-zinc-400 animate-pulse">
                  {t('searchbar.type-something')}
                </span>
              </li>
            )}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
