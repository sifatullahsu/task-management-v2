import AddList from '@/components/workspace/AddList'
import Column from '@/components/workspace/Column'
import TaskLayout from '@/layouts/TaskLayout'
import { NextLayout } from '@/types'
import { useSession } from 'next-auth/react'

const TasksPage: NextLayout = () => {
  const { data: session } = useSession()

  console.log(session)

  return (
    <div className="relative">
      <div>
        <ol className="workspace">
          <Column />
          <Column />
          <Column />
          <li>
            <AddList />
          </li>
        </ol>
      </div>
    </div>
  )
}
TasksPage.getLayout = page => <TaskLayout>{page}</TaskLayout>

export default TasksPage
