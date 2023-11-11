/* eslint-disable @typescript-eslint/no-explicit-any */
import StrictModeDroppable from '@/components/dnd/StrictModeDroppable'
import Column from '@/components/workspace/Column'
import LastColumn from '@/components/workspace/LastColumn'
import TaskLayout from '@/layouts/TaskLayout'
import { useGetListsWithTaskQuery, useUpdateListMutation } from '@/redux/api/listApi'
import { useUpdateTaskMutation } from '@/redux/api/taskApi'
import { NextLayout } from '@/types'
import { useEffect, useState } from 'react'
import { DragDropContext, DroppableProvided, OnDragEndResponder } from 'react-beautiful-dnd'
import toast from 'react-hot-toast'

const TasksPage: NextLayout = () => {
  const [data, setData] = useState([])
  const { data: listWithTask, isFetching } = useGetListsWithTaskQuery(undefined)

  useEffect(() => {
    if (listWithTask?.status) {
      setData(listWithTask.data)
    }
  }, [listWithTask])

  const [updateList, { isLoading: isListLoading }] = useUpdateListMutation()
  const [updateTask, { isLoading: isTaskLoading }] = useUpdateTaskMutation()

  if (isFetching || isListLoading || isTaskLoading) return <div>Loading</div>

  const handleDragEnd: OnDragEndResponder = async event => {
    if (!event.destination) return

    const id = event.draggableId.split(':')[1]

    if (event.type === 'column_lists') {
      if (event.source.index === event.destination.index) return

      const res = await updateList({
        id,
        data: { position: event.destination.index }
      }).unwrap()

      if (res.status) {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    }

    if (event.type === 'row_tasks') {
      if (
        event.source.droppableId === event.destination.droppableId &&
        event.source.index === event.destination.index
      )
        return

      const res = await updateTask({
        id,
        data: {
          list: event.destination.droppableId.split(':')[1],
          position: event.destination.index !== 0 ? event.destination.index : 1
        }
      }).unwrap()

      if (res.status) {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StrictModeDroppable droppableId="rr_columns" type="column_lists" direction="horizontal">
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="workplace">
            {data.map((list: any, index: number) => (
              <Column key={index} list={list} />
            ))}
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
