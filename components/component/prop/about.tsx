/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5klcMLS3EGb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function About() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:gap-12 justify-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2 flex flex-col items-center">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        About Emjay Trading Prop Firm
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                                        Emjay Trading Prop Firm is a leading trading firm that provides cutting-edge trading programs and
                                        mentorship to help traders of all levels achieve their financial goals. Our team of experienced
                                        traders and market analysts are dedicated to helping our clients succeed in the markets.
                                    </p>
                                </div>
                                <div className="flex justify-center gap-2 min-[400px]:flex-row">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Our History
                                    </Link>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Our Mission
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Values</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Guiding Principles</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    At Emjay Trading Prop Firm, we are guided by a set of core values that inform everything we do. These
                                    values are the foundation of our success and the key to our ability to consistently deliver
                                    exceptional results for our clients.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <InfinityIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Integrity</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We are committed to the highest standards of ethics and transparency in all our dealings.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <AwardIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Excellence</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We strive for excellence in everything we do, from our trading strategies to our client service.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <InfinityIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Innovation</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We are constantly exploring new ways to improve our trading programs and stay ahead of the curve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Our History
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Legacy of Success</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Emjay Trading Prop Firm was founded in 2010 with the goal of providing traders with the tools and
                                    support they need to achieve their financial goals. Over the past decade, we have grown to become one
                                    of the leading trading firms in the industry, with a proven track record of delivering consistent
                                    returns for our clients.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                alt="History"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="/placeholder.svg"
                                width="550"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Humble Beginnings</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Emjay Trading Prop Firm was founded in a small office with just a handful of traders. Our focus
                                                on cutting-edge trading strategies and rigorous risk management quickly helped us gain a
                                                reputation as a leading firm in the industry.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Rapid Growth</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Over the past decade, we have expanded our operations and now have offices in multiple cities
                                                around the world. Our team of experienced traders and market analysts has grown to over 100
                                                professionals, all dedicated to helping our clients achieve their financial goals.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Commitment to Innovation</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                At Emjay Trading Prop Firm, we are constantly exploring new ways to improve our trading programs
                                                and stay ahead of the curve. We have invested heavily in cutting-edge trading technologies and
                                                tools to ensure that our traders have the resources they need to succeed.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Our Mission
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowering Traders to Succeed</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    At Emjay Trading Prop Firm, our mission is to empower traders of all levels to achieve their financial
                                    goals. We believe that with the right tools, support, and guidance, anyone can become a successful
                                    trader. That's why we've dedicated ourselves to providing our clients with the resources they need to
                                    thrive in the markets.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                alt="Mission"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="/placeholder.svg"
                                width="550"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Comprehensive Training</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our training programs are designed to provide traders with the knowledge and skills they need to
                                                succeed in the markets. From beginner to advanced, we offer a range of courses and workshops to
                                                help our clients reach their full potential.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Personalized Mentorship</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Each of our clients is assigned a dedicated mentor who works closely with them to develop a
                                                customized trading plan and provide ongoing support and guidance. Our mentors are experienced
                                                traders who have a proven track record of success.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Cutting-Edge Technology</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                We provide our traders with access to the latest trading technologies and tools, including
                                                advanced charting software, automated trading systems, and real-time market data. This ensures
                                                that our clients have the resources they need to make informed trading decisions.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
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

function AwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx="12" cy="8" r="6" />
        </svg>
    )
}


function InfinityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
        </svg>
    )
}


