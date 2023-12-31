/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd'
import { MdEditNote } from 'react-icons/md'
import Details from './Details'

const Card = ({ task }: { task: Record<string, any> }) => {
  const [open, setOpen] = useState(false)
  return (
    <Draggable index={task.position} draggableId={`tasks:${task._id}:${task.position}`}>
      {(provided: DraggableProvided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div
            onClick={() => setOpen(true)}
            className="text-sm bg-neutral p-3 group rounded-lg relative border-2 border-transparent hover:border-neutral-content cursor-pointer"
          >
            <MdEditNote className="text-2xl hidden group-hover:block absolute top-2 right-2 bg-neutral text-primary pb-1 pl-1" />
            <p>{task.title}</p>
          </div>
          {open && <Details _id={task._id} open={open} setOpen={setOpen} />}
        </div>
      )}
    </Draggable>
  )
}

export default Card
