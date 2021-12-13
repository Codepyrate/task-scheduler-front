import Head from 'next/head'
import StartApp from './StartApp'



export default function Home() {
  return (
   <>
   <Head>
        <title>Task Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <StartApp/>

     
    
   </>

  )
}
