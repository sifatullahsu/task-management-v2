import { useSession } from 'next-auth/react'

const ProfilePage = () => {
  const { data: session } = useSession()

  console.log(session)

  return (
    <div>
      <div>Profile page</div>
    </div>
  )
}

export default ProfilePage
