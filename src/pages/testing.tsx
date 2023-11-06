import { useCallback } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const Testing = () => {
  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, [])
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, [])
  const onDragStart = useCallback(() => {
    /*...*/
  }, [])
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, [])
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, [])
  return (
    <div>
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <div>Hello world</div>
      </DragDropContext>
    </div>
  )
}

export default Testing
