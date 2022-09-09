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
  }, [allChildren]);

  return (
    <div className="flex flex-wrap w-full gap-10 my-5 gap-y-5 post-column xl:flex-nowrap lg:flex-nowrap">
      {children && (
        <section className="w-full -order-1 xl:w-[40%] lg:w-[40%] max-w-full">
          {children}
        </section>
      )}
      {codes && (
        <section className="w-full xl:max-w-[60%] lg:max-w-[60%] p-0">
          {codes}
        </section>
      )}
    </div>
  );
}

export default ColumnCode;
