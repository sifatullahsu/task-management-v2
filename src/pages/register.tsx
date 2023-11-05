import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'

const RegisterPage: NextLayout = () => {
  return (
    <div>
      <div>Register Page</div>
    </div>
  )
}

RegisterPage.getLayout = page => <MainLayout>{page}</MainLayout>

export default RegisterPage
