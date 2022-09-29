import React from 'react';
import Icon from '@/src/images/Icons';
import { BsGrid } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

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

  React.useEffect(() => {
    setSelectedProdCategory(
      postCategories.find(({ slug }) => slug === postCategory || null)
    );
  }, [postCategory]);

  return (
    product && (
      <div className="grid xl:sticky lg:sticky xl:top-2 lg:top-2 p-5 w-full max-w-full grid-cols-1 xl:max-w-[18rem] lg:max-w-[18rem] place-content-start place-items-start">
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
          <li className="text-2xl text-[#868686] w-full hover:text-zaxe transition-all duration-200">
            <button
              type="button"
              onClick={() => {
                router.push(
                  `/products/${productCategory.slug}/${product.slug}/categories`
                );
              }}
              className={`${
                !selectedProdCategory && '!bg-zaxe !text-white !hover:bg-zaxe'
              } flex items-center justify-start w-full gap-5 p-3 px-5 transition-all duration-150 bg-zaxe/10 text-zaxe hover:bg-zaxe/30 active:scale-90 rounded-xl`}
            >
              <BsGrid className="w-10 h-10" />
              <span className="text-xl font-semibold text-center xl:text-left lg:text-left group-hover:font-semibold">
                {t('common:product-page-components.categories.all-categories')}
              </span>
            </button>
          </li>
          {postCategories.map(
            ({ slug: prodCategorySlug, label: prodCategoryLabel, icon }) => (
              <li
                className="text-2xl text-[#868686] w-full hover:text-zaxe transition-all duration-200"
                key={`${productSlug}-${prodCategorySlug}`}
              >
                <button
                  type="button"
                  className={`${
                    selectedProdCategory &&
                    selectedProdCategory.slug === prodCategorySlug &&
                    '!bg-zaxe !text-white !hover:bg-zaxe'
                  } flex items-center justify-start w-full gap-5 p-3 px-5 transition-all duration-150 bg-zaxe/10 text-zaxe hover:bg-zaxe/30 active:scale-90 rounded-xl`}
                  onClick={() => {
                    router.push(
                      `/products/${productCategory.slug}/${product.slug}/categories?c=${prodCategorySlug}`
                    );
                  }}
                >
                  <span className="w-10 h-10 text-current">
                    <Icon name={icon} className="text-current" />
                  </span>
                  <span className="text-xl font-semibold text-center xl:text-left lg:text-left group-hover:font-semibold">
                    {t(prodCategoryLabel)}
                  </span>
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
