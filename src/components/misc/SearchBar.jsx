import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
  const [searchBarPHs, setSearchBarPHs] = React.useState({
    placeHolders: [
      'How to replace Print Table?',
      'How can i change 0.4mm Nozzle?',
      'Migrating from X2..',
      'is there a way to change the nozzle size?',
      'How to change the nozzle size?',
      'My screen of Zaxe X3 is frozen!',
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
    }, 2500);
    return () => clearInterval(interval);
  }, [searchBarPHs]);

  React.useEffect(() => {
    const barForm = document.querySelector('form.main-search-bar');
    const HandleSearch = (e) => {
      e.preventDefault();
      const searchInput = barForm.querySelector('input');
      // eslint-disable-next-line no-alert
      alert(searchInput.value);
    };

    barForm.addEventListener('submit', HandleSearch);

    return () => barForm.removeEventListener('submit', HandleSearch);
  }, []);

  return (
    <form className="relative main-search-bar w-full max-w-md ring-2 ring-transparent focus-within:ring-zaxe transition-all duration-150 h-12 flex justify-center items-center rounded-md overflow-hidden">
      <input
        placeholder={searchBarPHs.placeHolders[searchBarPHs.active]}
        className=" bg-[#F5F5F5] text-lg placeholder-slate-300 outline-none p-2 px-4 pr-0 relative w-full h-full text-center"
        type="text"
      />
      <button
        type="submit"
        className="w-14 bg-[#F5F5F5] transition-all duration-100 hover:bg-zinc-200 active:bg-zaxe active:text-white text-zaxe h-full p-0 m-0 flex flex-wrap justify-center items-center"
      >
        <AiOutlineSearch className="text-2xl" />
      </button>
    </form>
  );
}
