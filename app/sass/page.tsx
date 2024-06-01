import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BackgroundGradientAnimation } from "@/components/fancy/background-gradient-animation"
import HeaderSass from "./header"

export default function Page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <HeaderSass />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
                    <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Streamline Your Business with Our SAAS Platform
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                                    Our cutting-edge SAAS solution empowers you to automate workflows, analyze data, and scale your
                                    operations with ease.
                                </p>
                                <div className="space-x-4 mt-6">
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Start Free Trial
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-start -mt-12">
                                <img
                                    src="/humaaan.png"
                                    alt="Hero"
                                    className="mx-auto max-h-[400px] overflow-hidden rounded-xl object-contain object-center sm:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
                    <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div className="flex flex-col items-start -mt-12">
                                <img
                                    src="/humaaan 2.png"
                                    alt="Hero"
                                    className="mx-auto max-h-[400px] overflow-hidden rounded-xl object-contain object-center sm:w-full"
                                />
                            </div>
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Streamline Your Business with Our SAAS Platform
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                                    Our cutting-edge SAAS solution empowers you to automate workflows, analyze data, and scale your
                                    operations with ease.
                                </p>
                                <div className="space-x-4 mt-6">
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Start Free Trial
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
                    <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Streamline Your Business with Our SAAS Platform
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                                    Our cutting-edge SAAS solution empowers you to automate workflows, analyze data, and scale your
                                    operations with ease.
                                </p>
                                <div className="space-x-4 mt-6">
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Start Free Trial
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-start -mt-12">
                                <img
                                    src="/humaaan 1.png"
                                    alt="Hero"
                                    className="mx-auto max-h-[400px] overflow-hidden rounded-xl object-contain object-center sm:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <BackgroundGradientAnimation>
                    <section className="w-full py-12 md:py-24 lg:py-32 text-zinc-200 ">
                        <div className="container space-y-12 px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-zinc-800 dark:bg-gray-800">
                                        Key Features
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Powerful Tools to Streamline Your Business
                                    </h2>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Our SAAS platform offers a comprehensive suite of tools to help you automate workflows, analyze data,
                                        and scale your operations with ease.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Workflow Automation</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Streamline your business processes with our powerful workflow automation tools.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Data Analytics</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Gain valuable insights from your data with our advanced analytics capabilities.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Easily scale your operations as your business grows with our robust infrastructure.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Collaboration Tools</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Empower your team to work together seamlessly with our collaboration tools.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Customizable Dashboards</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Tailor your dashboard to your specific business needs for maximum efficiency.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-bold">Secure Data Storage</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Keep your data safe and secure with our robust data storage solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </section>
                </BackgroundGradientAnimation>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Experience the Power of Our SAAS Platform
                            </h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our cutting-edge SAAS solution is designed to help businesses of all sizes streamline their operations
                                and scale with ease.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="flex space-x-2">
                                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                                <Button type="submit">Start Free Trial</Button>
                            </form>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Sign up to get started with our SAAS platform.
                                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                                    Terms &amp; Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <div>

            </div>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Acme SAAS. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
