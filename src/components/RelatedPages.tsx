import React from 'react';
import Link from 'next/link';
import { getRelatedPages } from '@/lib/internalLinks';

interface RelatedPagesProps {
  currentPage: string;
  className?: string;
}

const RelatedPages: React.FC<RelatedPagesProps> = ({ currentPage, className = '' }) => {
  const relatedPages = getRelatedPages(currentPage);

  if (relatedPages.length === 0) {
    return null;
  }

  return (
    <section 
      className={`related-pages ${className}`}
      style={{
        marginTop: '40px',
        padding: '30px 0',
        borderTop: '1px solid #eee',
        backgroundColor: '#f9f9f9'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '400',
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: '#283433',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Связанные разделы
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          {relatedPages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              style={{
                display: 'block',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                border: '1px solid #eee'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <h4 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#283433',
                marginBottom: '10px',
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}>
                {page.title}
              </h4>
              
              <p style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.5',
                margin: 0
              }}>
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages; 