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
    <section
      className={`flex xl:flex-nowrap lg:flex-nowrap flex-wrap border rounded-lg items-center justify-between w-full gap-3 p-3 relative top-5 ${AlertClass}`}
    >
      <span className="flex items-center justify-center w-full xl:w-20 lg:w-20">
        <IoWarningOutline className="text-5xl text-center text-current" />
      </span>
      <section className="w-full p-1 py-3 text-xs text-left text-current alert-text">
        {children}
      </section>
    </section>
  );
}

export default AlertBox;
