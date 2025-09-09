import React from 'react';
import Link from 'next/link';
import { generateBreadcrumbs } from '@/lib/internalLinks';

interface BreadcrumbsProps {
  currentPage: string;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, className = '' }) => {
  const breadcrumbs = generateBreadcrumbs(currentPage);

  if (breadcrumbs.length <= 1) {
    return null; // Не показываем breadcrumbs на главной странице
  }

  return (
    <nav 
      className={`breadcrumbs ${className}`}
      aria-label="Навигационная цепочка"
      style={{
        padding: '10px 0',
        fontSize: '14px',
        color: '#666',
        borderBottom: '1px solid #eee',
        marginBottom: '20px'
      }}
    >
      <ol style={{ 
        listStyle: 'none', 
        display: 'flex', 
        margin: 0, 
        padding: 0,
        flexWrap: 'wrap'
      }}>
        {breadcrumbs.map((crumb, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {crumb.href ? (
              <Link 
                href={crumb.href}
                style={{
                  color: '#4D5C4D',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#283433';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#4D5C4D';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                {crumb.text}
              </Link>
            ) : (
              <span style={{ color: '#283433', fontWeight: '500' }}>
                {crumb.text}
              </span>
            )}
            
            {index < breadcrumbs.length - 1 && (
              <span style={{ 
                margin: '0 8px', 
                color: '#999',
                fontSize: '12px'
              }}>
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 