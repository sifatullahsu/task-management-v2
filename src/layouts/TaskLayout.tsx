import Header from '@/components/Header'
import { iChildren } from '@/types'

const TaskLayout = ({ children }: iChildren) => {
  return (
    <div className="task-layout">
      <Header />
      <div className="workplace-container">{children}</div>
    </div>
  )
}

export default TaskLayout
