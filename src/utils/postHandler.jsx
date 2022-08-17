import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPost = async ({ postSlug, productSlug, locale }) => {
  const fileContents = fs.readFileSync(
    path.join(`src/posts/${productSlug}/${locale}/${postSlug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default { getPost };
