import Header from '@/components/Header'
import { iChildren } from '@/types'

const TaskLayout = ({ children }: iChildren) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default TaskLayout
