import { useDeleteTaskMutation, useGetTaskQuery, useUpdateTaskMutation } from '@/redux/api/taskApi'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { HiBars3BottomLeft } from 'react-icons/hi2'

type Inputs = {
  title: string
  description: string
  priority: string
}

const Details = ({
  _id,
  open,
  setOpen
}: {
  _id: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<Inputs>()
  const [titleOpen, setTitleOpen] = useState(false)
  const { data, isLoading } = useGetTaskQuery({ id: _id })

  const [deleteConfirmation, setDeleteConfirmation] = useState(false)
  // const [isDeleting, setIsDeleting] = useState(false)
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation()
  const deleteHandler = async () => {
    // setIsDeleting(true)
    const res = await deleteTask({ id: _id }).unwrap()

    if (res.status) {
      toast.success(res.message)
      // setIsDeleting(false)
      setOpen(false)
    } else {
      toast.error(res.message)
      // setIsDeleting(false)
    }
  }

  const [updateTask] = useUpdateTaskMutation()
  const onSubmit: SubmitHandler<Inputs> = async data => {
    const res = await updateTask({ id: _id, data }).unwrap()

    if (res.status) {
      toast.success(res.message)
      setTitleOpen(false)
    } else {
      toast.error(res.message)
    }
  }

  if (isLoading) return <div></div>

  return (
    <dialog className={`modal ${open ? 'modal-open' : ''}`}>
      <div className="modal-box min-w-[700px] bg-neutral-focus">
        <form onSubmit={handleSubmit(onSubmit)}>
          {!titleOpen ? (
            <div className="relative group">
              <h3 className="font-bold text-lg cursor-pointer " onClick={() => setTitleOpen(true)}>
                {data?.data.title}
              </h3>
              <BiEdit className="absolute hidden top-0 right-8 text-primary group-hover:inline bg-neutral-focus p-1 text-2xl" />
            </div>
          ) : (
            <>
              <div className="font-semibold mb-3">
                <HiBars3BottomLeft className="inline text-2xl mr-2" /> Title
              </div>
              <input
                type="text"
                placeholder="Enter list title..."
                className="px-3 py-2 font-bold text-lg bg-neutral w-full rounded input-md"
                defaultValue={data?.data.title}
                autoFocus={true}
                {...register('title', { required: true })}
              />
            </>
          )}

          <div className="mt-7">
            <div className="font-semibold">
              <HiBars3BottomLeft className="inline text-2xl mr-2" /> Description
            </div>
            <textarea
              rows={3}
              placeholder="Add a more details description..."
              className="px-3 py-2 text-sm bg-neutral w-full rounded mt-5"
              defaultValue={data?.data.description}
              {...register('description')}
            />
            <div className="space-x-2 mt-5">
              <span>
                <input
                  type="radio"
                  id="High"
                  defaultChecked={data?.data.priority === 'High'}
                  value="High"
                  className="radio radio-xs mr-1"
                  {...register('priority', { required: true })}
                />
                <label htmlFor="High">High</label>
              </span>

              <span>
                <input
                  type="radio"
                  id="Medium"
                  defaultChecked={data?.data.priority === 'Medium'}
                  value="Medium"
                  className="radio radio-xs mr-1"
                  {...register('priority', { required: true })}
                />
                <label htmlFor="Medium">Medium</label>
              </span>

              <span>
                <input
                  type="radio"
                  id="Low"
                  defaultChecked={data?.data.priority === 'Low'}
                  value="Low"
                  className="radio radio-xs mr-1"
                  {...register('priority', { required: true })}
                />
                <label htmlFor="Low">Low</label>
              </span>
            </div>
          </div>
          <div className="flex mt-5">
            <button className="btn btn-primary btn-sm" disabled={isSubmitting}>
              {isSubmitting && <span className="loading loading-spinner"></span>}
              Update
            </button>
            <button
              type="button"
              className="btn btn-outline btn-sm ml-5"
              onClick={() => setDeleteConfirmation(true)}
              disabled={isSubmitting}
            >
              <AiOutlineDelete /> Delete the task
            </button>
          </div>
        </form>
        {deleteConfirmation && (
          <dialog className={`modal ${deleteConfirmation ? 'modal-open' : ''}`}>
            <div className="modal-box bg-neutral-focus">
              <h3 className="font-bold text-lg">Are you sure you want to delete this item?</h3>
              <p className="py-4 text-sm">
                This action is irreversible. Are you certain you want to proceed with the deletion? Once
                deleted, this item will be permanently removed and cannot be recovered.
              </p>
              <div className="modal-action space-x-3">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => deleteHandler()}
                  disabled={isDeleting}
                >
                  {isDeleting && <span className="loading loading-spinner"></span>}
                  Yes Delete
                </button>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => setDeleteConfirmation(false)}
                  disabled={isDeleting}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
        <div className="modal-action">
          <button
            className="btn btn-neutral btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default Details
