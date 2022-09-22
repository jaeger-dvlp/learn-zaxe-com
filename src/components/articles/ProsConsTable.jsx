import React from 'react';

function ProsConsTable({ pros, cons, className }) {
  return (
    <div
      className={`${className} !text-left mt-6 p-5 pt-3 gap-5 bg-zinc-50 border-zinc-100 border  rounded-xl grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2`}
    >
      <div className="grid w-full grid-cols-1 place-content-start place-items-start">
        <h4 className="text-lg text-lime-600">
          <strong>Pros</strong>
        </h4>
        <ul className="!list-none text-sm !p-0 mt-1">
          {pros.map((pro) => (
            <li key={pro}>
              <p>
                <strong className="mr-1 text-lime-600">+</strong> {pro}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid w-full grid-cols-1 place-content-start place-items-start">
        <h4 className="text-lg text-red-500">
          <strong>Cons</strong>
        </h4>
        <ul className="!list-none text-sm !p-0 mt-1">
          {cons.map((con) => (
            <li key={con}>
              <p>
                <strong className="mr-1 text-red-600">-</strong> {con}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProsConsTable;
