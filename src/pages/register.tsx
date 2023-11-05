import MainLayout from '@/layouts/MainLayout'
import { useCreateUserMutation } from '@/redux/api/usersApi'
import { NextLayout } from '@/types'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type Inputs = {
  name: string
  email: string
  password: string
}

const RegisterPage: NextLayout = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const [loading, setLoading] = useState(false)
  const [userRegistration] = useCreateUserMutation()
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true)
    const res = await userRegistration({ data }).unwrap()

    if (res.status) {
      toast.success('Registration successful, please login.')
      setLoading(false)
      router.push('/login')
    } else {
      setLoading(false)
      toast.error(res.message)
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-xl mb-5">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" className="input input-bordered" {...register('name', { required: true })} />
        </div>
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
          Register
        </button>
      </form>
    </div>
  )
}

RegisterPage.getLayout = page => <MainLayout>{page}</MainLayout>

export default RegisterPage
