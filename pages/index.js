import Head from 'next/head'
import Header from '../components/Header'
import { AuthProvider } from '../contexts/auth'
import Footer from '../components/Footer'
import Login from './Login'


export default function Home() {
  return (
    <>
      <Head>

        <title>Task Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header/> <LoginForm/> */}
      
      <AuthProvider>
   <Login />
    </AuthProvider>
      <Footer />



    </>

  )
}
