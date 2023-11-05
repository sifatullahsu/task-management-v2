import AddListButton from '@/components/workspace/AddListButton'
import ListCol from '@/components/workspace/ListCol'
import TaskLayout from '@/layouts/TaskLayout'
import { NextLayout } from '@/types'

const TasksPage: NextLayout = () => {
  return (
    <div className="relative">
      <div>
        <ol className="workspace">
          <ListCol>
            <AddListButton />
          </ListCol>
        </ol>
      </div>
    </div>
  )
}
TasksPage.getLayout = page => <TaskLayout>{page}</TaskLayout>

export default TasksPage
