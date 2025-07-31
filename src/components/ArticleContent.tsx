import React from 'react';
import Image from 'next/image';
import { ArticleBlock } from '../types/article';
import styles from './ArticleContent.module.css';

interface ArticleContentProps {
  blocks: ArticleBlock[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({ blocks }) => {
  const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
      case 'text':
        return (
          <div key={block.id} className={styles.textBlock}>
            {block.content.title && (
              <h2 className={styles.blockTitle}>{block.content.title}</h2>
            )}
            {block.content.text && (
              <p className={styles.blockText}>{block.content.text}</p>
            )}
          </div>
        );

      case 'image':
        // Пропускаем блоки изображений без изображения
        if (!block.content.image || !block.content.image.src) {
          return null;
        }
        return (
          <div key={block.id} className={styles.imageBlock}>
            <figure className={styles.figure}>
              <div className={styles.imageContainer}>
                <Image
                  src={block.content.image.src}
                  alt={block.content.image.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              {block.content.image.caption && (
                <figcaption className={styles.caption}>
                  {block.content.image.caption}
                </figcaption>
              )}
            </figure>
          </div>
        );

      case 'text-image':
        return (
          <div key={block.id} className={styles.textImageBlock}>
            <div className={styles.textColumn}>
              {block.content.title && (
                <h2 className={styles.blockTitle}>{block.content.title}</h2>
              )}
              {block.content.text && (
                <p className={styles.blockText}>{block.content.text}</p>
              )}
            </div>
            {block.content.image && block.content.image.src && (
              <div className={styles.imageColumn}>
                <figure className={styles.figure}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={block.content.image.src}
                      alt={block.content.image.alt}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  {block.content.image.caption && (
                    <figcaption className={styles.caption}>
                      {block.content.image.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            )}
          </div>
        );

      case 'image-text':
        return (
          <div key={block.id} className={styles.imageTextBlock}>
            {block.content.image && block.content.image.src && (
              <div className={styles.imageColumn}>
                <figure className={styles.figure}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={block.content.image.src}
                      alt={block.content.image.alt}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  {block.content.image.caption && (
                    <figcaption className={styles.caption}>
                      {block.content.image.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            )}
            <div className={styles.textColumn}>
              {block.content.title && (
                <h2 className={styles.blockTitle}>{block.content.title}</h2>
              )}
              {block.content.text && (
                <p className={styles.blockText}>{block.content.text}</p>
              )}
            </div>
          </div>
        );

      case 'quote':
        return (
          <div key={block.id} className={styles.quoteBlock}>
            {block.content.quote && (
              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>"{block.content.quote.text}"</p>
                {block.content.quote.author && (
                  <cite className={styles.quoteAuthor}>— {block.content.quote.author}</cite>
                )}
              </blockquote>
            )}
          </div>
        );

      case 'list':
        return (
          <div key={block.id} className={styles.listBlock}>
            {block.content.title && (
              <h2 className={styles.blockTitle}>{block.content.title}</h2>
            )}
            {block.content.list && (
              <>
                {block.content.list.ordered ? (
                  <ol className={styles.orderedList}>
                    {block.content.list.items.map((item, index) => (
                      <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className={styles.unorderedList}>
                    {block.content.list.items.map((item, index) => (
                      <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        );

      case 'gallery':
        return (
          <div key={block.id} className={styles.galleryBlock}>
            {block.content.title && (
              <h2 className={styles.blockTitle}>{block.content.title}</h2>
            )}
            {block.content.images && block.content.images.length > 0 && (
              <div className={`${styles.gallery} ${styles[block.content.layout || 'grid-2']}`}>
                {block.content.images.map((image: any, index: number) => (
                  <figure key={index} className={styles.galleryItem}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={image.src}
                        alt={image.alt || ''}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className={styles.caption}>
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>
        );

      case 'video':
        return (
          <div key={block.id} className={styles.videoBlock}>
            {block.content.title && (
              <h2 className={styles.blockTitle}>{block.content.title}</h2>
            )}
            {block.content.videoUrl && (
              <div className={styles.videoContainer}>
                <iframe
                  src={block.content.videoUrl}
                  title={block.content.title || 'Видео'}
                  allowFullScreen
                  className={styles.video}
                />
              </div>
            )}
            {block.content.description && (
              <p className={styles.videoDescription}>{block.content.description}</p>
            )}
          </div>
        );

      case 'cta':
        return (
          <div key={block.id} className={styles.ctaBlock}>
            {block.content.title && (
              <h2 className={styles.ctaTitle}>{block.content.title}</h2>
            )}
            {block.content.description && (
              <p className={styles.ctaDescription}>{block.content.description}</p>
            )}
            {block.content.buttonText && block.content.buttonUrl && (
              <a
                href={block.content.buttonUrl}
                className={`${styles.ctaButton} ${styles[block.content.style || 'primary']}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {block.content.buttonText}
              </a>
            )}
          </div>
        );

      case 'divider':
        return (
          <div key={block.id} className={styles.dividerBlock}>
            <div className={`${styles.divider} ${styles[block.content.style || 'line']} ${styles[block.content.size || 'medium']}`} />
          </div>
        );

      case 'alert':
        return (
          <div key={block.id} className={`${styles.alertBlock} ${styles[block.content.type || 'info']}`}>
            {block.content.title && (
              <h3 className={styles.alertTitle}>{block.content.title}</h3>
            )}
            {block.content.message && (
              <p className={styles.alertMessage}>{block.content.message}</p>
            )}
          </div>
        );

      case 'faq':
        return (
          <div key={block.id} className={styles.faqBlock}>
            {block.content.title && (
              <h2 className={styles.blockTitle}>{block.content.title}</h2>
            )}
            {block.content.items && block.content.items.length > 0 && (
              <div className={styles.faqItems}>
                {block.content.items.map((item: any, index: number) => (
                  <details key={index} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{item.question}</summary>
                    <div className={styles.faqAnswer}>{item.answer}</div>
                  </details>
                ))}
              </div>
            )}
          </div>
        );

      case 'table':
        return (
          <div key={block.id} className={styles.tableBlock}>
            {block.content.title && (
              <h2 className={styles.blockTitle}>{block.content.title}</h2>
            )}
            {block.content.headers && block.content.rows && (
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      {block.content.headers.map((header: string, index: number) => (
                        <th key={index} className={styles.tableHeader}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.content.rows.map((row: string[], rowIndex: number) => (
                      <tr key={rowIndex}>
                        {row.map((cell: string, cellIndex: number) => (
                          <td key={cellIndex} className={styles.tableCell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'code':
        return (
          <div key={block.id} className={styles.codeBlock}>
            {block.content.title && (
              <h2 className={styles.blockTitle}>{block.content.title}</h2>
            )}
            {block.content.code && (
              <pre className={styles.codeContainer}>
                <code className={`${styles.code} language-${block.content.language || 'text'}`}>
                  {block.content.code}
                </code>
              </pre>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article className={styles.articleContent}>
      <div className={styles.container}>
        {blocks.map(renderBlock)}
      </div>
    </article>
  );
};

export default ArticleContent;