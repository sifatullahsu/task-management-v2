import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'

const AddCard = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  const handleAddList = () => {
    if (title.length > 0) {
      setOpen(false)
      setTitle('')
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
