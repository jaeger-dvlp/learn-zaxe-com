import React from 'react';

function FullCode({ children }) {
  return (
    <section className="flex flex-wrap w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section className="w-full max-w-full">{children}</section>
    </section>
  );
}

export default FullCode;
