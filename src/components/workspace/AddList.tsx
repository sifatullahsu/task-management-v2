import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'

const AddList = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  const handleAddList = () => {
    if (title.length > 0) {
      setOpen(false)
      setTitle('')
    }
  }

  return (
    <div>
      {open ? (
        <div>
          <input
            type="text"
            name="title"
            placeholder="Enter list title..."
            className="px-3 py-2 text-sm bg-neutral w-full rounded"
            onChange={e => setTitle(e.target.value)}
          />
          <div className="space-x-2 mt-2 flex align-middle">
            <button className="btn btn-primary btn-sm" onClick={handleAddList}>
              Add list
            </button>
            <button type="button" className="btn btn-ghost btn-sm btn-square" onClick={() => setOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={() => setOpen(true)} className="btn btn-neutral w-full">
          <BsPlusLg /> Add a new list
        </button>
      )}
    </div>
  )
}

export default AddList
