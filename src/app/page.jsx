import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Search from './components/Search.jsx'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className='bg-secondary rounded-2 p-4'>
        <Search />
      </main>
      <Footer />
    </>
  )
}
