/* eslint-disable @typescript-eslint/no-explicit-any */
import AddCard from './AddCard'
import Card from './Card'
import CardHeader from './CardHeader'

const Column = ({ list }: { list: Record<string, any> }) => {
  return (
    <li>
      <div>
        <div className="bg-neutral-focus p-3 rounded-lg">
          <CardHeader _id={list._id} title={list.title} />
          <div className="mt-5 space-y-2">
            {list?.tasks?.map((task: any) => <Card key={task._id} task={task} />)}
          </div>
          <AddCard listId={list._id} />
        </div>
      </div>
    </li>
  )
}

export default Column
