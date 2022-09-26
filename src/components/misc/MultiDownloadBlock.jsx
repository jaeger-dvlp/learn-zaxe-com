import React from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { useAppContext } from '@/src/components/contexts/AppContext';

function MultiDownloadBlock({ downloads }) {
  const { activateDownloadListPopup } = useAppContext();

  return (
    <div className="relative grid w-full h-full max-w-xs grid-cols-1 gap-5 p-5 m-0 bg-white border shadow-xl rounded-2xl group place-content-between border-zinc-100 place-items-center">
      <div className="grid w-full h-full grid-cols-1 gap-2 place-content-start place-items-center">
        <h2 className="text-center grid grid-cols-1 place-content-start place-items-center text-[#6F6F6F] font-medium text-2xl">
          Other Versions
        </h2>
      </div>
      <button
        type="button"
        onClick={() => activateDownloadListPopup(downloads)}
        className="w-full gap-3 transition-all duration-200 flex justify-center items-center max-w-[14rem] p-2 text-sm text-white border-2 rounded-2xl bg-zaxe hover:bg-white hover:text-zaxe border-zaxe text-center"
      >
        <BsCaretDownFill className="text-2xl" />
        <span>Select Version</span>
      </button>
    </div>
  );
}

export default MultiDownloadBlock;
