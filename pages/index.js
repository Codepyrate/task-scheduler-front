import Head from 'next/head'
import FormNote from '../note_folder/FormNote'
import Note from '../note_folder/Note'

export default function Home() {
  return (
    // className="flex flex-col items-center justify-center min-h-screen py-2"
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Note/> */}
      <FormNote/>
    </div>
  )
}
