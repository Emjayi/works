import Link from 'next/link'
import React from 'react'

const HeaderSass = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme SAAS</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="/sass/features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Features
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Pricing
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}

export default HeaderSass


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