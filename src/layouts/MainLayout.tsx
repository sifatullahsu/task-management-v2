import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { iChildren } from '@/types'

const MainLayout = ({ children }: iChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
