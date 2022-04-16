// import Image from 'next/image'
import Link from "next/link"
import styles from "../components/layouts/MainLayout.module.css"
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from "../components/layouts/DarkLayout"


export default function About() {
  return (
    <>

      <h1 className={'title'}>
          {/* Ir a <a href="/">home</a> */}
       Ir a<Link href="/">
            Home
          </Link>
      </h1>

      <p className={'description'}>
          estamos en el about{' '}
          <code className={styles.codse}>pages/index.js</code>
      </p>

    </>
  )
}


About.getLayout = function getLayout(page){
  return(

    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
