import AddList from '@/components/workspace/AddList'
import Column from '@/components/workspace/Column'
import TaskLayout from '@/layouts/TaskLayout'
import { useGetListsWithTaskQuery } from '@/redux/api/listApi'
import { NextLayout } from '@/types'

const TasksPage: NextLayout = () => {
  const { data } = useGetListsWithTaskQuery(undefined)
  console.log(data)

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
