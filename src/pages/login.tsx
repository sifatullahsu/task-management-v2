import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

const LoginPage: NextLayout = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = data => {
    setLoading(true)
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

        <button className="btn btn-primary btn-sm mt-5" disabled={loading}>
          {loading && <span className="loading loading-spinner"></span>}
          Login
        </button>
      </form>
      <div>
        <p className="text-lg font-semibold mt-5">Want to Testing?</p>
        <div>
          email: <span className="text-accent">personal.sifat@gmail.com</span>
        </div>
        <div>
          password: <span className="text-accent">12345</span>
        </div>
      </div>
    </div>
  )
}

LoginPage.getLayout = page => <MainLayout>{page}</MainLayout>

export default LoginPage
