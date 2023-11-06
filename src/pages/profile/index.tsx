import TaskLayout from '@/layouts/TaskLayout'
import { useUpdateUserMutation } from '@/redux/api/usersApi'
import { NextLayout } from '@/types'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type Inputs = {
  name: string
  email: string
  password: string
}

const ProfilePage: NextLayout = () => {
  const { data: session } = useSession()
  console.log(session)

  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      name: session?.user.name,
      email: session?.user.email
    }
  })
  const [loading, setLoading] = useState(false)
  const [userUpdate] = useUpdateUserMutation()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true)
    const finalData = data.password ? data : { name: data.name, email: data.email }
    const res = await userUpdate({ id: session?.user._id, data: finalData }).unwrap()

    if (res.status) {
      toast.success(res.message)
      setLoading(false)
      reset()
    } else {
      setLoading(false)
      toast.error(res.message)
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-xl mb-5">Change Password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            {...register('name', { required: true })}
            readOnly
          />
          <label className="label">
            <span className="label-text text-neutral-content">Read only field</span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            {...register('email', { required: true })}
            readOnly
          />
          <label className="label">
            <span className="label-text text-neutral-content">Read only field</span>
          </label>
        </div> */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" className="input input-bordered" {...register('password')} />
        </div>

        <button className="btn btn-primary btn-sm mt-5" disabled={loading}>
          {loading && <span className="loading loading-spinner"></span>}
          Update User
        </button>
      </form>
    </div>
  )
}
ProfilePage.getLayout = page => <TaskLayout>{page}</TaskLayout>

export default ProfilePage
