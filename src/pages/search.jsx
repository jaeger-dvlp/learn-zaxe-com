import React from 'react';
import { useRouter } from 'next/router';
import Content from '@/src/content/Content';
import { BiInfoCircle } from 'react-icons/bi';
import { useTranslation } from 'next-i18next';
import PostHandler from '@/src/utils/postHandler';
import PostBlock from '@/src/components/misc/PostBlock';
import SearchBar from '@/src/components/categoriespage/SearchBar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';
import { MdArticle, MdVideoLibrary } from 'react-icons/md';

function Search({ posts: Posts }) {
  const router = useRouter();
  const { t } = useTranslation();
  const [posts] = React.useState(Posts);
  const { q: searchQuery } = router.query;
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  const GetQueriedPosts = async ({ queries }) => {
    const queriedPosts = await queries
      .map((query) =>
        posts.filter(({ tags }) =>
          tags.find(
            (tag) =>
              tag.toLowerCase() === query || tag.toLowerCase().includes(query)
          )
        )
      )
      .flat();

    return queriedPosts;
  };

  const ClearDuplicatedArray = async (DuplicatedArray) => {
    const uniqueArray = [];
    await DuplicatedArray.map((post) => {
      if (uniqueArray.find(({ id }) => id === post.id) === undefined) {
        return uniqueArray.push(post);
      }
      return null;
    });

    return uniqueArray;
  };

  const FilterPostsByQuery = async (queries) => {
    const QueriedPosts = await GetQueriedPosts({ queries });
    const ClearedPosts = await ClearDuplicatedArray(QueriedPosts);
    setFilteredPosts(ClearedPosts);
  };

  React.useEffect(() => {
    if (searchQuery) {
      FilterPostsByQuery(searchQuery.toLowerCase().split(' '));
    }
  }, [searchQuery, router]);

  return (
    <section className="pt-[20vh] font-zaxe w-full flex flex-wrap justify-center items-start">
      <section className="grid w-full grid-cols-1 p-5 gap-14 max-w-app place-content-start place-items-center">
        <SearchBar value={searchQuery || null} />
        <section className="grid w-full grid-cols-1 pb-10 gap-7 place-content-start place-items-center">
          <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
            <MdArticle />
            <span>{t('common:search.articles')}</span>
          </h2>
          <nav className="relative flex flex-wrap items-center justify-center w-full gap-14">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostBlock
                  key={`post-${post.id}`}
                  props={{
                    postSlug: post.slug,
                    postCategory: post['category-slug'],
                    postTitle: { [router.locale]: post.title },
                    postThumbnail: post.thumbnail,
                    queryProduct: post['product-slug'],
                    queryPCategory: post['product-category'],
                    Categories: Content.products.find(
                      ({ slug }) => slug === post['product-slug']
                    ).content.categories,
                  }}
                />
              ))
            ) : (
              <NoContent />
            )}
          </nav>
        </section>
        <section className="grid w-full grid-cols-1 pb-10 gap-7 place-content-start place-items-center">
          <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
            <MdVideoLibrary />
            <span>{t('common:search.videos')}</span>
          </h2>
          <nav className="relative flex flex-wrap items-center justify-center w-full gap-14">
            <NoContent />
          </nav>
        </section>
        <section className="grid w-full grid-cols-1 pb-10 gap-7 place-content-start place-items-center">
          <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
            <BsFillFileEarmarkArrowDownFill />
            <span>{t('common:search.downloads')}</span>
          </h2>
          <nav className="relative flex flex-wrap items-center justify-center w-full gap-14">
            <NoContent />
          </nav>
        </section>
      </section>
    </section>
  );
}

function NoContent() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-wrap items-start justify-center w-full py-5 font-zaxe">
      <article className="grid grid-cols-1 gap-2 place-content-start place-items-center">
        <BiInfoCircle className="w-10 h-10 p-2 rounded-full text-md text-zinc-400 bg-zinc-200" />
        <p className="font-semibold text-center text-md text-zinc-400">
          {t('common:search.no-query-content')}
        </p>
      </article>
    </section>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'content-zxxdesktop',
      'content-zxz3',
      'content-zxx3',
    ])),
    posts: await PostHandler.getAllPosts({ locale }),
  },
});

export default Search;
