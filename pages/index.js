import Head from 'next/head'
import Header from '../components/Header'
import LoginForm from './LoginForm'
import { AuthProvider } from '../contexts/auth'
import Footer from '../components/Footer'


export default function Home() {
  return (
   <>
   <Head>
   
        <title>Task Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <AuthProvider>
    <LoginForm/>
    </AuthProvider>
    <Footer/>

     
    
   </>

  )
}
