import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPost = async (slug, category) => {
  const fileContents = fs.readFileSync(
    path.join(`src/posts/${category}/${slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default { getPost };
