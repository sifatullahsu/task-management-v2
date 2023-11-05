/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdEditNote } from 'react-icons/md'

const Card = ({ task }: { task: Record<string, any> }) => {
  return (
    <div className="text-sm bg-neutral p-3 group rounded-lg relative border-2 border-transparent hover:border-neutral-content cursor-pointer">
      <MdEditNote className="text-2xl hidden group-hover:block absolute top-2 right-2 bg-neutral text-primary pb-1 pl-1" />
      <p>{task.title}</p>
    </div>
  )
}

export default Card
