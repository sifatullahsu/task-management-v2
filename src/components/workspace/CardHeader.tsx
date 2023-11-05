/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUpdateListMutation } from '@/redux/api/listApi'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BsGrid1X2, BsThreeDotsVertical } from 'react-icons/bs'

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
      <BsThreeDotsVertical className="h-6 w-6 p-[6px] cursor-pointer rounded-full hover:bg-neutral" />
    </div>
  )
}

export default CardHeader
