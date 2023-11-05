import { iChildren } from '@/types'

const ListCol = ({ children }: iChildren) => {
  return (
    <li>
      <div>{children}</div>
    </li>
  )
}

export default ListCol
