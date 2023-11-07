/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draggable, DraggableProvided, DroppableProvided } from 'react-beautiful-dnd'
import StrictModeDroppable from '../dnd/StrictModeDroppable'
import Card from './Card'
import ColumnFooter from './ColumnFooter'
import ColumnHeader from './ColumnHeader'

const Column = ({ list }: { list: Record<string, any> }) => {
  return (
    <Draggable index={list.position} draggableId={`rr_column_${list.position}`}>
      {(provided: DraggableProvided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className="bg-neutral-focus p-3 rounded-lg">
            <ColumnHeader _id={list._id} title={list.title} />
            <StrictModeDroppable
              droppableId={`rr_column_${list.position}_row`}
              type="ROW"
              direction="vertical"
            >
              {(provided: DroppableProvided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="mt-5 space-y-2">
                  {list?.tasks?.map((task: any) => <Card key={task._id} task={task} />)}
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
            <ColumnFooter listId={list._id} />
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Column
