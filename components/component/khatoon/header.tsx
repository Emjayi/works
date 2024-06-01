import { Toggle } from '@/components/ui/toggle'
import Link from 'next/link'
import React from 'react'

const HeaderKhatoon = () => {
    return (
        <header className="flex items-center justify-between px-4 lg:px-6 h-14 bg-none">
            <Link className="flex items-center justify-center" href="#">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Khatoon Agency</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Services
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Work
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    About
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Contact
                </Link>
                <Toggle aria-label="Toggle theme" size="sm">
                    <MoonIcon className="h-4 w-4" />
                </Toggle>
            </nav>
        </header>
    )
}

export default HeaderKhatoon

function MoonIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}


function MountainIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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