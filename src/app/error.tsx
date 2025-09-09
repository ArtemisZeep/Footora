'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/not-found.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логируем ошибку в консоль для отладки
    console.error('Application error:', error)
  }, [error])

  return (
    <>
      <Header />
      <main className={styles.notFoundContainer}>
        <div className={styles.content}>
          <div className={styles.errorCode}>500</div>
          <h1 className={styles.title}>Что-то пошло не так</h1>
          <p className={styles.description}>
            Произошла техническая ошибка. Мы уже работаем над её устранением.
          </p>
          <div className={styles.actions}>
            <button 
              onClick={reset}
              className={styles.homeButton}
            >
              Попробовать снова
            </button>
            <Link href="/" className={styles.servicesButton}>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 