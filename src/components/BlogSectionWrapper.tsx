import React from 'react';
import { getPublishedArticles } from '../lib/blogApi';
import BlogSectionClient from './BlogSection';

const BlogSectionWrapper: React.FC = async () => {
  // Получаем 4 последние статьи из Sanity
  const allArticles = await getPublishedArticles();
  const latestArticles = allArticles.slice(0, 4);

  return <BlogSectionClient articles={latestArticles} />;
};

export default BlogSectionWrapper;