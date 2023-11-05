/* eslint-disable @typescript-eslint/no-explicit-any */
import AddList from '@/components/workspace/AddList'
import Column from '@/components/workspace/Column'
import TaskLayout from '@/layouts/TaskLayout'
import { useGetListsWithTaskQuery } from '@/redux/api/listApi'
import { NextLayout } from '@/types'

const TasksPage: NextLayout = () => {
  const { data, isLoading } = useGetListsWithTaskQuery(undefined)

  if (isLoading) return <div>Loading</div>

  return (
    <div className="relative">
      <div>
        <ol className="workspace">
          {data?.data?.map((list: any) => <Column key={list._id} list={list} />)}
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
