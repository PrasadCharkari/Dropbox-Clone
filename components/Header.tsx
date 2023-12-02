import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'

function Header() {
    return (
        <header className='flex items-center justify-between '>
            <Link href="/" className='flex gap-x-2 items-center'>
                <div className='bg-[#0160FE] w-fit'>
                    <Image
                        src="https://brandslogos.com/wp-content/uploads/images/large/dropbox-logo-black-and-white.png"

                        alt="dropbox-logo"
                        className="invert p-1"
                        height={50}
                        width={50}
                    />
                </div>
                <h1 className='font-bold text-xl'>Dropbox</h1>
            </Link>
            <div className='flex gap-x-2 px-3 items-center'>
                <ThemeToggler />
                <UserButton afterSignOutUrl='/' />
                <SignedOut>
                    <SignInButton afterSignInUrl='/dashboard' mode="modal" />
                </SignedOut>
            </div>
        </header>
    )
}

export default Header