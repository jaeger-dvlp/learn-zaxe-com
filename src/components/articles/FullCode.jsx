import React from 'react';

function FullCode({ children }) {
  return (
    <section className="flex flex-wrap w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <article className="w-full max-w-full">{children}</article>
    </section>
  );
}

export default FullCode;
