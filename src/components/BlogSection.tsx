import React from 'react';
import Image from 'next/image';
import styles from '../styles/Blog.module.css';

type BlogPostProps = {
  date: string;
  title: string;
  description: string;
  image: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ date, title, description, image }) => {
  return (
    <div className={styles.post}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.postImage}
        />
      </div>
      
      <div className={styles.postContent}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postDescription}>{description}</p>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  // Placeholder images (in a real app these would be actual blog post images)
  const blogImages = [
    "/images/podology.jpg", 
    "/images/pedicure.jpg",
    "/images/natalia_2.jpg",
    "/images/team.jpg"
  ];

  return (
    <section className={styles.blog}>
      <div className="container">
        <h2 className={styles.title}>
          Блог
        </h2>
        
        <div className={styles.grid}>
          {[1, 2, 3, 4].map((item, index) => (
            <BlogPost 
              key={index}
              date="12.04.2024"
              title="Заголовок"
              description="Описание на три строки текст текст текст. Описание на три строки текст текст текст. Описание на три строки."
              image={blogImages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 