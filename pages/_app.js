import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Navbar></Navbar>
        {

          <Component key={router.asPath} {...pageProps} />
        }
        <Footer></Footer>
      </Provider>
      </SessionProvider>

    </>



  )

}
