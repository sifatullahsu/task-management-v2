import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const HomePage: NextLayout = () => {
  return (
    <div>
      <div>Home Page</div>
    </div>
  )
}

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>

export default HomePage
