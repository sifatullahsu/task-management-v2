import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'
import { signIn } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const LoginPage: NextLayout = () => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    signIn('credentials', {
      ...data,
      redirect: true,
      callbackUrl: '/profile/tasks'
    })
  }

  return (
    <div className="container py-10">
      <h1 className="text-xl mb-5">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="text" className="input input-bordered" {...register('email', { required: true })} />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            {...register('password', { required: true })}
          />
        </div>

        <button className="btn btn-primary btn-sm mt-5">Login</button>
      </form>
    </div>
  )
}

LoginPage.getLayout = page => <MainLayout>{page}</MainLayout>

export default LoginPage
