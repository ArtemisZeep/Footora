import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import styles from './MDXComponents.module.css'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Заголовки
    h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
    
    // Параграфы
    p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    
    // Изображения с автоматическим размером
    img: ({ src, alt, ...props }) => (
      <div className={styles.imageContainer}>
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className={styles.image}
          {...props}
        />
        {alt && <p className={styles.caption}>{alt}</p>}
      </div>
    ),
    
    // Списки
    ul: ({ children }) => <ul className={styles.unorderedList}>{children}</ul>,
    ol: ({ children }) => <ol className={styles.orderedList}>{children}</ol>,
    li: ({ children }) => <li className={styles.listItem}>{children}</li>,
    
    // Цитаты
    blockquote: ({ children }) => (
      <blockquote className={styles.blockquote}>{children}</blockquote>
    ),
    
    // Код
    code: ({ children }) => <code className={styles.inlineCode}>{children}</code>,
    pre: ({ children }) => <pre className={styles.codeBlock}>{children}</pre>,
    
    // Кастомные компоненты
    ImageBlock: ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
      <div className={styles.fullImageBlock}>
        <div className={styles.fullImageContainer}>
          <Image
            src={src}
            alt={alt}
            fill
            className={styles.fullImage}
          />
        </div>
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    ),
    
    Quote: ({ children, author }: { children: React.ReactNode; author?: string }) => (
      <div className={styles.quoteBlock}>
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>"{children}"</p>
          {author && <cite className={styles.quoteAuthor}>— {author}</cite>}
        </blockquote>
      </div>
    ),
    
    ...components,
  }
}