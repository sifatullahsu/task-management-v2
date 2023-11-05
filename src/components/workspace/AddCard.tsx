import { useCreateTaskMutation } from '@/redux/api/taskApi'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineClose } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'

const AddCard = ({ listId }: { listId: string }) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  const [createTask] = useCreateTaskMutation()

  const handleAddList = async () => {
    if (title.length > 0) {
      const res = await createTask({ data: { title, list: listId } }).unwrap()

      if (res.status) {
        toast.success(res.message)
        setOpen(false)
        setTitle('')
      } else {
        toast.error(res.message)
      }
    }
  }

  return (
    <div className="mt-10">
      {open ? (
        <div>
          <textarea
            name="card"
            rows={3}
            placeholder="Enter a title for this card..."
            className="px-3 py-2 text-sm bg-neutral w-full rounded"
            onChange={e => setTitle(e.target.value)}
          />
          <div className="space-x-2 mt-2 flex align-middle">
            <button className="btn btn-primary btn-sm" onClick={handleAddList}>
              Add card
            </button>
            <button type="button" className="btn btn-ghost btn-sm btn-square" onClick={() => setOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={() => setOpen(true)} className="btn btn-neutral w-full btn-sm">
          <BsPlusLg /> Add a new card
        </button>
      )}
    </div>
  )
}

export default AddCard
