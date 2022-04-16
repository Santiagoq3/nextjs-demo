import Link from "next/link"
import { MainLayout } from '../components/layouts/MainLayout'
import styles from "../components/layouts/MainLayout.module.css"

export default function Home() {
  return (
    <MainLayout>
      <h1 className={'title'}>
          Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        estamos en el Home{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
