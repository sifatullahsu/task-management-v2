import { useDeleteListMutation, useUpdateListMutation } from '@/redux/api/listApi'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsGrid1X2, BsThreeDotsVertical } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'

const CardHeader = ({ _id, title }: { _id: string; title: string }) => {
  const [edit, setEdit] = useState('')
  const [updateList] = useUpdateListMutation()
  const handleUpdate = async () => {
    const res = await updateList({ id: _id, data: { title: edit } }).unwrap()

    if (res.status) {
      setEdit('')
    } else {
      toast.error(res.message)
    }
  }

  const [deleteConfirmation, setDeleteConfirmation] = useState(false)
  const [deleteList] = useDeleteListMutation()
  const deleteHandler = async () => {
    const res = await deleteList({ id: _id }).unwrap()

    if (res.status) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <div className="flex justify-between align-middle">
      <div className="text-sm font-medium min-w-[200px] cursor-pointer">
        {!edit ? (
          <div onClick={() => setEdit(title)}>
            <BsGrid1X2 className="inline mr-2 text-xs" />
            {title}
          </div>
        ) : (
          <>
            <BsGrid1X2 className="inline mr-2 text-xs" />
            <input
              type="text"
              placeholder="Enter list title..."
              className="px-3 py-2 text-sm bg-neutral rounded"
              defaultValue={title}
              onChange={e => setEdit(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleUpdate()}
              onBlur={handleUpdate}
              autoFocus={true}
            />
          </>
        )}
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0}>
          <BsThreeDotsVertical className="h-6 w-6 p-[6px] cursor-pointer rounded-full hover:bg-neutral marker:hidden" />
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <button onClick={() => setEdit(title)}>
              <TbEdit /> Edit title
            </button>
            <button onClick={() => setDeleteConfirmation(true)}>
              <AiOutlineDelete /> Delete the list
            </button>
          </li>
        </ul>
      </div>
      {deleteConfirmation && (
        <dialog className={`modal ${deleteConfirmation ? 'modal-open' : ''}`}>
          <div className="modal-box bg-neutral-focus">
            <h3 className="font-bold text-lg">Are you sure you want to delete this list?</h3>
            <p className="py-4 text-sm">
              This action is irreversible. Are you certain you want to proceed with the deletion? Once
              deleted, all tasks associated with this list will also be permanently removed and cannot be
              recovered.
            </p>
            <div className="modal-action space-x-3">
              <button className="btn btn-warning btn-sm" onClick={() => deleteHandler()}>
                Yes Delete
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => setDeleteConfirmation(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  )
}

export default CardHeader
