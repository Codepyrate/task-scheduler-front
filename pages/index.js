import Head from 'next/head'
import Header from '../components/Header'
import LoginForm from './LoginForm'



export default function Home() {
  return (
   <>
   <Head>
   <LoginForm/>
        <title>Task Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
     

     
    
   </>

  )
}
