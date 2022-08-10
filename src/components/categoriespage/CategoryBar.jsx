import { useTranslation } from 'next-i18next';
import React from 'react';

function CategoryBar({ product }) {
  const { content: productContent, slug: productSlug } = product;
  const { categories: postCategories } = productContent;
  const { t } = useTranslation();
  return (
    <div className="grid w-full max-w-xs grid-cols-1 place-content-start place-items-start">
      <ul>
        {postCategories.map(
          ({ slug: prodCategorySlug, label: prodCategoryLabel }) => (
            <li key={`${productSlug}-${prodCategorySlug}`}>
              {t(prodCategoryLabel)}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default CategoryBar;
