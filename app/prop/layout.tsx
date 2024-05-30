import Home from '@/components/component/prop/home'
import Link from 'next/link'
import React, { SVGProps } from 'react'

const Layout = ({ children }: any) => {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <header className="px-4 lg:px-6 h-14 flex items-center sticky">
                    <Link className="flex items-center justify-center" href="/prop">
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Emjay Trading Prop Firm</span>
                    </Link>
                    <nav className="ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/prop/about">
                            About
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/prop/programs">
                            Programs
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/prop/team">
                            Team
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/prop/contact">
                            Contact
                        </Link>
                    </nav>
                </header>
                {children}
            </div>
        </>
    )
}

export default Layout



function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}