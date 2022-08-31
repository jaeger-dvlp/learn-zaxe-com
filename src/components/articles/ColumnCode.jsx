import React from 'react';

function ColumnCode({ children: allChildren }) {
  const [codes, setCodes] = React.useState(null);
  const [children, setChildren] = React.useState(null);

  React.useEffect(() => {
    if (allChildren.length > 1) {
      setChildren(allChildren.filter(({ type }) => type !== 'pre'));
      setCodes(allChildren.filter(({ type }) => type === 'pre'));
    } else if (allChildren.type === 'pre') {
      setCodes(allChildren);
    } else {
      setChildren(allChildren);
    }
  }, []);

  return (
    <section className="flex flex-wrap w-full gap-10 my-5 gap-y-5 post-column xl:flex-nowrap lg:flex-nowrap">
      {children && (
        <article className="w-full relative -order-1 xl:w-[40%] lg:w-[40%] max-w-full">
          {children}
        </article>
      )}
      {codes && (
        <section className="relative w-full xl:max-w-[60%] lg:max-w-[60%] p-0">
          {codes}
        </section>
      )}
    </section>
  );
}

export default ColumnCode;
