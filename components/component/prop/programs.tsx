/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qAbSdwq2oka
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"

export default function Component() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Our Programs
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Explore Our Trading Programs
                                </h1>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Acme Trading Prop Firm offers a range of trading programs to suit different experience levels and
                                    investment goals. Learn more about our offerings and find the right fit for you.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
                                <h3 className="text-xl font-bold">Beginner Program</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Our Beginner Program is designed for individuals who are new to the world of trading. You&apos;ll learn the
                                    fundamentals of technical and fundamental analysis, risk management, and trading strategies. Our
                                    experienced instructors will guide you every step of the way, ensuring you have a solid foundation to
                                    build upon.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline">Learn More</Button>
                                    <Button>Join Now</Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
                                <h3 className="text-xl font-bold">Intermediate Program</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    If you&apos;ve already gained some experience in trading, our Intermediate Program is the perfect next
                                    step. You&apos;ll dive deeper into advanced trading strategies, portfolio management, and market analysis.
                                    Our program will help you refine your skills and take your trading to the next level.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline">Learn More</Button>
                                    <Button>Join Now</Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
                                <h3 className="text-xl font-bold">Pro Program</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Our Pro Program is designed for experienced traders who are looking to take their skills to the
                                    highest level. You&apos;ll have access to our exclusive resources, including one-on-one mentorship,
                                    advanced trading tools, and a community of successful traders. This program is for those who are
                                    serious about becoming professional traders.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline">Learn More</Button>
                                    <Button>Join Now</Button>
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