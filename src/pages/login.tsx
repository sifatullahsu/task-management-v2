import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const LoginPage: NextLayout = () => {
  return (
    <div>
      <div>Login page</div>
    </div>
  )
}

LoginPage.getLayout = page => <MainLayout>{page}</MainLayout>

export default LoginPage
