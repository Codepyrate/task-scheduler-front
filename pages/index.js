import Head from 'next/head'
import Header from '../Search_topics/Header'
import Search_topics from '../Search_topics/Search_topics'
import Footer from '../Search_topics/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Search_topics/>
      <Footer/>
    
    </div>
  )
}
