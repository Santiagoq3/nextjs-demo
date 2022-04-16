import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"

export default function Princin(){


    return(

        <MainLayout >

            <h1 className={'title'}>
                    {/* Ir a <a href="/">home</a> */}
                Ir a<Link href="/">
                        Home
                    </Link>
            </h1>

                <p className={'description'}>
                    estamos en el pricing{' '}
                    <code className={'codse'}>pages/index.js</code>
                </p>
        </MainLayout>

    )
}