import Head from 'next/head'
import StartApp from './StartApp'



<<<<<<< HEAD
export default function Home() {
  return (
   <>
   <Head>
        <title>Task Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <StartApp/>

     
    
=======
import Header from '../Search_topics/Header'
import Search_topics from '../Search_topics/Search_topics'
import Footer from '../Search_topics/Footer'
import FormNote from '../note_folder/FormNote'
import Note from '../note_folder/Note'
import Task from '../Task/Task'
export default function Home() {
  return (
   <>
   <Task />
>>>>>>> 53682209c817c2c7f928318b2a551b385229c6f0
   </>

  )
}
