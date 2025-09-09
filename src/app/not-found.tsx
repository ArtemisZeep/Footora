import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.notFoundContainer}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>Страница не найдена</h1>
          <p className={styles.description}>
            Извините, но запрашиваемая страница не существует или была перемещена.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.homeButton}>
              Вернуться на главную
            </Link>
            <Link href="/services" className={styles.servicesButton}>
              Наши услуги
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 