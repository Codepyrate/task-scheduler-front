import Head from 'next/head'
import Note from '../note_folder/Note'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Note/>
    </div>
  )
}
