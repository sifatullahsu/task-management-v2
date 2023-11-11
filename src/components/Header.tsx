import logo from '@/assets/task-logo.png'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const { data: session } = useSession()

  const list = () => {
    return (
      <>
        {session ? (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/profile/tasks">Tasks workspace</Link>
            </li>
            <li>
              <button onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </>
        )}
      </>
    )
  }

  return (
    <>
      <header className="bg-neutral text-neutral-content">
        <div className="container p-0 lg:px-[15px]">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {list()}
                </ul>
              </div>
              <Link href="/">
                <Image
                  src={logo}
                  alt=""
                  width={120}
                  className="bg-neutral-content px-2 py-1 rounded-lg"
                  priority={true}
                />
              </Link>
            </div>
            <div className="navbar-end hidden lg:flex justify-end">
              <ul className="menu menu-horizontal px-1">{list()}</ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
