import Image from 'next/image'
import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth'
import { PlusCircle, LogOut, LogIn } from 'lucide-react'

const Navbar = async () => {
  const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans text-black">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <PlusCircle className="size-6 sm:hidden" />
              </Link>
              <form
                action={async () => {
                  'use server'
                  await signOut({ redirectTo: '/' })
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout </span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`} className="flex gap-2">
                <span className="max-sm:hidden">{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn('github')
              }}
            >
              <button type="submit" className="flex items-center">
                Login
                <LogIn />
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
