import { FC } from 'react'
import Head from 'next/head'

type LayoutProps = {
    title: string,
    description: string
}

const Layout: FC<LayoutProps> = ({title, description, children}) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name={'description'} content={description} key={'description'} />
            <meta name={'viewport'} content={'width=device-width, initial-scale=1'} key={'viewport'} />
            <link rel={'icon'} href={'/favicon.ico'} />
            <link rel={'apple-touch-icon'} href={'/favicon.png'} />
            <link rel={'stylesheet'} href={'https://rsms.me/inter/inter.css'} />
        </Head>
        {children}
    </>
)

export default Layout
