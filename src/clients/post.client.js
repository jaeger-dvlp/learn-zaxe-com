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
  const Products = Content.products;
  const allPostsUnfiltered = await Promise.all(
    Products.map(
      async ({
        slug: productSlug,
        content: { posts },
        category: { slug: productCategory },
      }) =>
        Promise.all(
          posts
            .map(async ({ slug: postSlug, thumbnail }) => {
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
                },
              };
            })
            .flat()
        )
    ).flat()
  );

  const AllPosts = allPostsUnfiltered
    .map((posts) => posts.map((postF) => postF.data))
    .flat();

  return AllPosts;
};

module.exports = { getPost, getGlobalPost, getAllPosts };
