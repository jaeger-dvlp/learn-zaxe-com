const Content = require('@/src/content/Content');
const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const matter = require('gray-matter');

const getPost = async ({ postSlug, productSlug, locale }) => {
  const { data, content } = matter(
    fs.readFileSync(
      path.join(`src/posts/${productSlug}/${locale}/${postSlug}.mdx`),
      'utf8'
    )
  );
  return {
    data,
    content,
  };
};

const getGlobalPost = async ({ postSlug, locale }) => {
  const { data, content } = matter(
    fs.readFileSync(
      path.join(`src/posts/global/${locale}/${postSlug}.mdx`),
      'utf8'
    )
  );
  return {
    data,
    content,
  };
};

const getAllPosts = async ({ locale }) => {
  const { products, globalPosts } = Content;
  const allGlobalPosts = await Promise.all(
    globalPosts.map(async ({ slug: postSlug, thumbnail }) => {
      const { data } = matter(
        fs.readFileSync(
          path.join(`src/posts/global/${locale}/${postSlug}.mdx`),
          'utf8'
        )
      );
      return {
        data: {
          ...data,
          slug: postSlug,
          id: v4().replace(/-/g, ''),
          url: `/${locale}/articles/${postSlug}`,
          thumbnail,
          'post-type': 'global',
        },
      };
    })
  );
  const allProductPosts = await Promise.all(
    products
      .map(
        async ({
          slug: productSlug,
          content: { posts },
          category: { slug: productCategory },
        }) =>
          Promise.all(
            posts
              .map(async ({ slug: postSlug, thumbnail, type }) => {
                if (type !== 'global') {
                  const { data } = matter(
                    fs.readFileSync(
                      path.join(
                        `src/posts/${productSlug}/${locale}/${postSlug}.mdx`
                      ),
                      'utf8'
                    )
                  );
                  return {
                    data: {
                      ...data,
                      slug: postSlug,
                      id: v4().replace(/-/g, ''),
                      url: `/${locale}/products/${productCategory}/${productSlug}/article/${postSlug}`,
                      thumbnail,
                      'product-slug': productSlug,
                      'product-category': productCategory,
                      'post-type': 'product',
                    },
                  };
                }
                return null;
              })
              .flat()
          )
      )
      .flat()
  );

  const AllPosts = allGlobalPosts
    .concat(allProductPosts.map((post) => post.filter((p) => p !== null)))
    .flat()
    .map((post) => post.data);

  return AllPosts;
};

module.exports = { getPost, getGlobalPost, getAllPosts };
