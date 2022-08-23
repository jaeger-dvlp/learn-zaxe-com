import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Content from '../content/Content';

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

const getAllPosts = async ({ locale }) => {
  const Products = Content.products;
  const allPosts = Promise.all(
    Products.map(async ({ slug: productSlug, content: { posts } }) =>
      Promise.all(
        posts.map(async ({ slug: postSlug }) => {
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
        })
      )
    )
  );

  return allPosts;
};

export default { getPost, getAllPosts };
