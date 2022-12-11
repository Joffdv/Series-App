import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Meta from './Meta'

export default function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}