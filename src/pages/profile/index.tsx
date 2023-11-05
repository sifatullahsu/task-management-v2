import TaskLayout from '@/layouts/TaskLayout'
import { NextLayout } from '@/types'
import { useSession } from 'next-auth/react'

const ProfilePage: NextLayout = () => {
  const { data: session } = useSession()

  console.log(session)

  return (
    <div>
      <div>Profile page</div>
    </div>
  )
}
ProfilePage.getLayout = page => <TaskLayout>{page}</TaskLayout>

export default ProfilePage
