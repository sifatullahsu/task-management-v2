/* eslint-disable @typescript-eslint/no-unused-vars */
import { BsGrid1X2, BsThreeDotsVertical } from 'react-icons/bs'

const CardHeader = ({ _id, title }: { _id: string; title: string }) => {
  return (
    <div className="flex justify-between align-middle">
      <div className="text-sm font-medium">
        <BsGrid1X2 className="inline mr-2 text-xs" /> {title}
      </div>
      <BsThreeDotsVertical className="h-6 w-6 p-[6px] cursor-pointer rounded-full hover:bg-neutral" />
    </div>
  )
}

export default CardHeader
