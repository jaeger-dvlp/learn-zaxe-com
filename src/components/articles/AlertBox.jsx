import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

function AlertBox({ children, alertType }) {
  const AlertColors = {
    info: 'border-zaxe text-zaxe',
    warning: 'border-yellow-500 text-yellow-500',
    danger: 'border-red-400 text-red-400',
  };

  const [AlertClass] = React.useState(
    AlertColors[alertType] || 'border-zaxe text-zaxe'
  );

  return (
    <blockquote
      className={`flex xl:flex-nowrap lg:flex-nowrap alert-box flex-wrap border rounded-lg items-center justify-between w-fit gap-3 p-3 relative ${AlertClass}`}
    >
      <span className="flex items-center justify-center w-full xl:w-20 lg:w-20">
        <IoWarningOutline className="text-5xl text-center text-current relative z-[2]" />
      </span>
      <article className="w-full p-1 py-3 text-xs text-left text-current alert-text">
        {children}
      </article>
      <span className="absolute top-0 left-0 flex w-4 h-4 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inline-flex w-full h-full bg-current rounded-full opacity-75 animate-ping" />
        <span className="relative flex items-center justify-center w-4 h-4 transition-all bg-white border border-current rounded-full">
          <span className="w-2 h-2 bg-current rounded-full" />
        </span>
      </span>
    </blockquote>
  );
}

export default AlertBox;
