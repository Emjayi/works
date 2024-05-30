/**
 * v0 by Vercel.
 * @see https://v0.dev/t/u2G0sN3zAvz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

export default function Team() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Team</div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Meet the Acme Trading Prop Firm Team
                                </h1>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Our team of experienced traders and market analysts are dedicated to helping our clients achieve their
                                    financial goals. Get to know the people behind Acme Trading Prop Firm.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage alt="John Doe" src="/avatars/01.png" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">John Doe</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Founder and CEO</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage alt="Jane Smith" src="/avatars/02.png" />
                                    <AvatarFallback>JS</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Jane Smith</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Chief Trading Officer</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage alt="Michael Johnson" src="/avatars/03.png" />
                                    <AvatarFallback>MJ</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Michael Johnson</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Head of Research</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage alt="Emily Davis" src="/avatars/04.png" />
                                    <AvatarFallback>ED</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Emily Davis</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Director of Operations</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage alt="David Lee" src="/avatars/05.png" />
                                    <AvatarFallback>DL</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">David Lee</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Head of Client Relations</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage alt="Sarah Kim" src="/avatars/06.png" />
                                    <AvatarFallback>SK</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Sarah Kim</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Lead Trader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Trading Prop Firm. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </>
    )
}

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