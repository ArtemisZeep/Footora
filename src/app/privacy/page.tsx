'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './privacy.module.css';

export default function PrivacyPage() {
  const { language, tData } = useLanguage();
  
  const content = tData('privacy.content');
  const servicesTerms = tData('privacy.services');
  const coursesTerms = tData('privacy.courses');

  return (
    <div className={styles.privacyPage}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{content?.title}</h1>
          
          {/* Услуги */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{servicesTerms?.title}</h2>
            <div className={styles.content}>
              <p className={styles.intro}>{servicesTerms?.intro}</p>
              
              {servicesTerms?.sections?.map((section: any, index: number) => (
                <div key={index} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{section.title}</h3>
                  <div className={styles.subsectionContent}>
                    {section.items?.map((item: any, itemIndex: number) => (
                      <div key={itemIndex} className={styles.item}>
                        <span className={styles.itemNumber}>{item.number}</span>
                        <div className={styles.itemContent}>
                          {typeof item.text === 'string' ? (
                            <p>{item.text}</p>
                          ) : (
                            <>
                              <p>{item.text?.main}</p>
                              {item.text?.subitems && (
                                <ul className={styles.subitems}>
                                  {item.text.subitems.map((subitem: string, subIndex: number) => (
                                    <li key={subIndex}>{subitem}</li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Курсы */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{coursesTerms?.title}</h2>
            <div className={styles.content}>
              <p className={styles.intro}>{coursesTerms?.intro}</p>
              
              {coursesTerms?.sections?.map((section: any, index: number) => (
                <div key={index} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{section.title}</h3>
                  <div className={styles.subsectionContent}>
                    {section.items?.map((item: any, itemIndex: number) => (
                      <div key={itemIndex} className={styles.item}>
                        <span className={styles.itemNumber}>{item.number}</span>
                        <div className={styles.itemContent}>
                          {typeof item.text === 'string' ? (
                            <p>{item.text}</p>
                          ) : (
                            <>
                              <p>{item.text?.main}</p>
                              {item.text?.subitems && (
                                <ul className={styles.subitems}>
                                  {item.text.subitems.map((subitem: string, subIndex: number) => (
                                    <li key={subIndex}>{subitem}</li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.footer}>
            <p>{content?.validity}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 