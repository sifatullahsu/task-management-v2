/* eslint-disable @typescript-eslint/no-explicit-any */
import StrictModeDroppable from '@/components/dnd/StrictModeDroppable'
import Column from '@/components/workspace/Column'
import LastColumn from '@/components/workspace/LastColumn'
import TaskLayout from '@/layouts/TaskLayout'
import { useGetListsWithTaskQuery } from '@/redux/api/listApi'
import { NextLayout } from '@/types'
import { DragDropContext, DroppableProvided } from 'react-beautiful-dnd'

const TasksPage: NextLayout = () => {
  const { data, isLoading } = useGetListsWithTaskQuery(undefined)

  if (isLoading || !process.browser) return <div>Loading</div>
  const handleDragEnd = (event: any) => {
    console.log(event)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StrictModeDroppable droppableId="rr_columns" type="COLUMN" direction="horizontal">
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="workspace">
            {data?.data?.map((list: any, index: number) => <Column key={index} list={list} />)}
            {provided.placeholder}
            <LastColumn />
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  )
}
TasksPage.getLayout = page => <TaskLayout>{page}</TaskLayout>

export default TasksPage
