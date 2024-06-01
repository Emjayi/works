/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vvBsltKc82P
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Home() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Unlock Your Trading Potential with Emjay Prop Firm
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Emjay Prop Firm is a leading trading firm that provides cutting-edge trading programs and mentorship
                                        to help traders of all levels achieve their financial goals.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Learn More
                                    </Link>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                            <img
                                alt="Hero"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="/placeholder.svg"
                                width="550"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Track Record
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Proven Performance</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Emjay Prop Firm has a proven track record of delivering consistent returns for our traders. Our
                                    rigorous risk management and data-driven approach have helped our traders achieve their financial
                                    goals.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                alt="Performance"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="/placeholder.svg"
                                width="550"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Consistent Returns</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our traders have consistently achieved returns that exceed industry benchmarks.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Rigorous Risk Management</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our proprietary risk management strategies ensure that our traders are well-protected from
                                                market volatility.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Cutting-Edge Technology</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our traders have access to the latest trading technologies and tools to enhance their
                                                performance.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Team</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Experts</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Our team of experienced traders and market analysts are dedicated to helping our clients achieve their
                                    financial goals. With years of industry experience and a deep understanding of the markets, our team
                                    is uniquely positioned to provide our traders with the guidance and support they need to succeed.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <img
                                    alt="Team Member"
                                    className="rounded-full"
                                    height="150"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "150/150",
                                        objectFit: "cover",
                                    }}
                                    width="150"
                                />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">John Doe</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Head Trader</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <img
                                    alt="Team Member"
                                    className="rounded-full"
                                    height="150"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "150/150",
                                        objectFit: "cover",
                                    }}
                                    width="150"
                                />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Jane Smith</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Senior Analyst</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <img
                                    alt="Team Member"
                                    className="rounded-full"
                                    height="150"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "150/150",
                                        objectFit: "cover",
                                    }}
                                    width="150"
                                />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Michael Johnson</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Head of Research</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Trading Programs
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Trading Potential</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Emjay Prop Firm offers a range of trading programs designed to help traders of all levels achieve their
                                    financial goals. Whether you&apos;re a beginner or an experienced trader, we have a program that can help
                                    you take your trading to the next level.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                alt="Trading Programs"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="/placeholder.svg"
                                width="550"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Beginner Program</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our beginner program is designed to help new traders develop the skills and knowledge they need
                                                to succeed in the markets.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Intermediate Program</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our intermediate program is designed to help experienced traders take their trading to the next
                                                level with advanced strategies and tools.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Advanced Program</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our advanced program is designed for experienced traders who are looking to maximize their
                                                returns and achieve their financial goals.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Apply Now
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Emjay Trading Prop Firm. All rights reserved.</p>
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