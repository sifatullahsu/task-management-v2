/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draggable, DraggableProvided, DroppableProvided } from 'react-beautiful-dnd'
import StrictModeDroppable from '../dnd/StrictModeDroppable'
import Card from './Card'
import ColumnFooter from './ColumnFooter'
import ColumnHeader from './ColumnHeader'

const Column = ({ list }: { list: Record<string, any> }) => {
  return (
    <Draggable index={list.position} draggableId={`lists:${list._id}:${list.position}`}>
      {(provided: DraggableProvided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="workplace-col"
        >
          <div className="bg-neutral-focus py-3 rounded-lg">
            <ColumnHeader _id={list._id} title={list.title} />
            <div className="px-[6px]">
              <StrictModeDroppable
                droppableId={`lists:${list._id}:${list.position}`}
                type="row_tasks"
                direction="vertical"
              >
                {(provided: DroppableProvided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="tasks px-[6px]">
                    {list?.tasks?.map((task: any) => <Card key={task._id} task={task} />)}
                    {provided.placeholder}
                  </div>
                )}
              </StrictModeDroppable>
            </div>
            <ColumnFooter listId={list._id} />
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Column
