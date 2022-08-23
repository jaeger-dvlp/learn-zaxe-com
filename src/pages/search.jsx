import React from 'react';
import { useRouter } from 'next/router';
import Content from '@/src/content/Content';
import PostHandler from '@/src/utils/postHandler';
import PostBlock from '@/src/components/misc/PostBlock';
import SearchBar from '@/src/components/categoriespage/SearchBar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Search({ posts: allPosts }) {
  const router = useRouter();
  const { q: searchQuery } = router.query;
  const [posts] = React.useState(allPosts);
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  const filterPostsByQuery = async (queries) => {
    const localFilteredPosts = [];
    const QueriedPosts = await queries
      .map((query) =>
        posts.filter(({ tags }) =>
          tags.find((tag) => tag.toLowerCase() === query)
        )
      )
      .flat();
    await QueriedPosts.map((post) => {
      if (localFilteredPosts.find(({ id }) => id === post.id) === undefined) {
        return localFilteredPosts.push(post);
      }
      return null;
    });

    setFilteredPosts(localFilteredPosts);
  };

  React.useEffect(() => {
    setFilteredPosts([]);
    if (searchQuery) {
      filterPostsByQuery(searchQuery.toLowerCase().split(' '));
    }
  }, [searchQuery, router]);

  React.useEffect(() => console.log(filteredPosts), [filteredPosts, router]);

  return (
    <div className="pt-[20vh] font-zaxe w-full flex flex-wrap justify-center items-start">
      <div className="grid w-full grid-cols-1 gap-10 p-5 max-w-app place-content-start place-items-center">
        <SearchBar value={searchQuery || null} />
        <div className="flex flex-wrap items-start justify-center w-full gap-5">
          {filteredPosts &&
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
            ))}
        </div>
      </div>
    </div>
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
