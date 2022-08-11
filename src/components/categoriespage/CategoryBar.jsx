import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function CategoryBar({ product }) {
  const router = useRouter();
  const [selectedProdCategory, setSelectedProdCategory] = React.useState(null);
  const { c: postCategory } = router.query || null;
  const { t } = useTranslation();

  const {
    content: { categories: postCategories },
    category: productCategory,
    slug: productSlug,
  } = product;

  useEffect(() => {
    setSelectedProdCategory(
      postCategories.find(({ slug }) => slug === postCategory || null)
    );
  }, [postCategory]);

  return (
    product && (
      <div className="grid p-5 w-full max-w-full grid-cols-1 xl:max-w-[18rem] lg:max-w-[18rem] place-content-start place-items-start">
        <div className="flex items-center justify-between w-full xl:hidden lg:hidden">
          <span
            className="!text-zaxe w-1/2 text-left !font-medium
           text-xl transition-all duration-200"
          >
            {selectedProdCategory
              ? t(selectedProdCategory.label)
              : t('common:product-page-components.categories.all-categories')}
          </span>
          <CategorySelectBox
            props={{ router, productCategory, productSlug, postCategories, t }}
          />
        </div>
        <ul className="hidden grid-cols-1 gap-3 xl:grid lg:grid place-content-start place-items-start">
          <li
            className={`${
              !selectedProdCategory && '!text-zaxe !font-medium'
            } text-2xl text-[#868686] hover:text-zaxe transition-all duration-200`}
          >
            <button
              type="button"
              onClick={() => {
                router.push(
                  `/products/${productCategory.slug}/${product.slug}/categories`
                );
              }}
            >
              {t('common:product-page-components.categories.all-categories')}
            </button>
          </li>
          {postCategories.map(
            ({ slug: prodCategorySlug, label: prodCategoryLabel }) => (
              <li
                className={`${
                  selectedProdCategory &&
                  selectedProdCategory.slug === prodCategorySlug &&
                  '!text-zaxe !font-medium'
                } text-2xl text-[#868686] hover:text-zaxe transition-all duration-200`}
                key={`${productSlug}-${prodCategorySlug}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    router.push(
                      `/products/${productCategory.slug}/${product.slug}/categories?c=${prodCategorySlug}`
                    );
                  }}
                >
                  {t(prodCategoryLabel)}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    )
  );
}

function CategorySelectBox({ props }) {
  const { router, productCategory, productSlug, postCategories, t } = props;
  return (
    <select
      onChange={(e) => {
        const { value: prodCatSlug } = e.target;
        if (prodCatSlug === 'all') {
          router.push(
            `/products/${productCategory.slug}/${productSlug}/categories`
          );
        } else if (prodCatSlug !== 0) {
          router.push(
            `/products/${productCategory.slug}/${productSlug}/categories?c=${prodCatSlug}`
          );
        }
        e.target.value = 0;
      }}
      defaultValue={0}
      className="w-1/2 text-xl text-right bg-white !outline-none !border-none text-[#C0C0C0]"
    >
      <option value={0} disabled>
        {t('common:product-page-components.categories.select-category')}
      </option>
      <option value="all">
        {t('common:product-page-components.categories.all-categories')}
      </option>
      {postCategories.map(
        ({ slug: prodCategorySlug, label: prodCategoryLabel }) => (
          <option
            key={`${prodCategorySlug}-mobile-selector`}
            value={prodCategorySlug}
          >
            {t(prodCategoryLabel)}
          </option>
        )
      )}
    </select>
  );
}

export default CategoryBar;
