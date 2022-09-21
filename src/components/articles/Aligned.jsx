import React from 'react';

function Aligned({ children }) {
  return (
    <span className="grid w-full grid-cols-1 aligned place-content-start place-items-center">
      <section className="w-full max-w-4xl text-justify">{children}</section>
    </span>
  );
}

export default Aligned;
