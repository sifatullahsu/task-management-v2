import { MdEditNote } from 'react-icons/md'

const Card = () => {
  return (
    <div className="text-sm bg-neutral p-3 group rounded-lg relative border-2 border-transparent hover:border-neutral-content">
      <MdEditNote className="text-xl hidden group-hover:block absolute top-2 right-2" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, blanditiis?</p>
    </div>
  )
}

export default Card
