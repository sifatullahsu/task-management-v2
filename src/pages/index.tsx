import hero from '@/assets/hero.png'
import MainLayout from '@/layouts/MainLayout'
import { NextLayout } from '@/types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const HomePage: NextLayout = () => {
  const { data: session } = useSession()

  return (
    <div className="hero container px-6 py-8 md:py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <Image className="w-28 h-28 mb-3 block md:hidden" src={hero} alt="" />
            <h1 className="text-3xl font-bold lg:text-5xl">
              Task Management
              <br /> Web App
            </h1>

            <p className="mt-4">
              Streamline your workflow, boost collaboration, and meet your project deadlines with ease.
              Experience the power of efficient task organization and elevate your productivity today.
            </p>

            {session ? (
              <Link href="/profile/tasks" className="btn btn-primary btn-sm mt-10">
                Go To Tasks
              </Link>
            ) : (
              <Link href="/login" className="btn btn-primary btn-sm mt-10">
                Login Now
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Image className="w-full h-full lg:max-w-3xl px-10 hidden md:block" src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>

export default HomePage
