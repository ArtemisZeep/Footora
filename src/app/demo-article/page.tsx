import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticleHero from '../../components/ArticleHero';
import ArticleContent from '../../components/ArticleContent';
import { demoArticle } from '../../data/demoArticleData';

const DemoArticlePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <ArticleHero 
          title={demoArticle.title}
          description={demoArticle.description}
          heroImage={demoArticle.heroImage}
          publishedAt={demoArticle.publishedAt}
          author={demoArticle.author}
          readTime={demoArticle.readTime}
        />
        <ArticleContent blocks={demoArticle.blocks} />
      </main>
      <Footer />
    </>
  );
};

export default DemoArticlePage;