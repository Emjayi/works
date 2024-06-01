import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

export function Nomore() {
  return (

    <div className="z-10 font-mono text-sm ">
      <div className=" min-h-screen w-screen justify-center items-center flex">
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 py-8 w-full justify-center items-center">
          <Link href="/"><Button className="fixed top-5 left-5 bg-green-800" >Back</Button></Link>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid gap-8">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Days Smoke-Free</CardTitle>
                  <CalendarIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">42</div>
                  <p className="text-gray-500 dark:text-gray-400">You&apos;ve been smoke-free for 42 days.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Cigarettes Not Smoked</CardTitle>
                  <CigaretteIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">840</div>
                  <p className="text-gray-500 dark:text-gray-400">You&apos;ve saved 840 cigarettes from being smoked.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Money Saved</CardTitle>
                  <DollarSignIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$420</div>
                  <p className="text-gray-500 dark:text-gray-400">You&apos;ve saved $420 by not buying cigarettes.</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-8">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Benefits of Quitting</CardTitle>
                  <LeafIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <HeartIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                      <div>
                        <h3 className="font-semibold">Improved Heart Health</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Quitting smoking can significantly reduce your risk of heart disease and stroke.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <AirVentIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                      <div>
                        <h3 className="font-semibold">Healthier Lungs</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Your lungs will start to heal and function better after you quit smoking.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <WalletIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                      <div>
                        <h3 className="font-semibold">Financial Savings</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          You&apos;ll save a significant amount of money by not buying cigarettes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <PenIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                      <div>
                        <h3 className="font-semibold">Note Writer</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          You can add your own notes to the benefits section.
                        </p>
                        <div className="mt-2">
                          <Textarea
                            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:border-gray-800"
                            placeholder="Add your own note here..."
                          />
                          <Button className="mt-2 w-full bg-[#2C7A7B] hover:bg-[#265E5F] text-white">Add Note</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Milestones</CardTitle>
                <TrophyIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#2C7A7B] text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
                    <div>
                      <h3 className="font-semibold">1 Week Smoke-Free</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Congratulations! You&apos;ve made it through the first week.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#2C7A7B] text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
                    <div>
                      <h3 className="font-semibold">1 Month Smoke-Free</h3>
                      <p className="text-gray-500 dark:text-gray-400">Great job! You&apos;ve reached the 1 month milestone.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#2C7A7B] text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>
                    <div>
                      <h3 className="font-semibold">3 Months Smoke-Free</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Incredible! You&apos;ve reached the 3 month milestone.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Set Your Goal</CardTitle>
                <TargetIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div>
                    <Label htmlFor="goal">Your Goal</Label>
                    <Input id="goal" placeholder="Enter your goal" />
                  </div>
                  <div>
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input id="deadline" type="date" />
                  </div>
                  <Button className="w-full bg-[#2C7A7B] hover:bg-[#265E5F] text-white" type="submit">
                    Set Goal
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Tips for Managing Cravings</CardTitle>
                <FlameIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <GlassWaterIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                    <div>
                      <h3 className="font-semibold">Drink Water</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Sipping on water can help distract you from cravings and keep your hands busy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ActivityIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                    <div>
                      <h3 className="font-semibold">Get Moving</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Physical activity can help reduce the intensity of cravings and improve your mood.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ContactIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                    <div>
                      <h3 className="font-semibold">Talk to Someone</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Reaching out to a friend or family member can provide support and distraction during a craving.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Celebrate Your Progress</CardTitle>
                <SnowflakeIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <CakeIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                    <div>
                      <h3 className="font-semibold">Treat Yourself</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Celebrate your milestones with a small reward, like a special treat or activity you enjoy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ThumbsUpIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                    <div>
                      <h3 className="font-semibold">Share Your Success</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Tell your friends and family about your progress to stay motivated and receive their support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <SparklesIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                    <div>
                      <h3 className="font-semibold">Celebrate Small Wins</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Don&apos;t forget to celebrate the small victories along the way, like a day or week without smoking.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Connect with Others</CardTitle>
                <UsersIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B]" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <ContactIcon className="h-6 w-6 text-[#2C7A7B] dark:text-[#2C7A7B] mt-1" />
                    <div>
                      <h3 className="font-semibold">Join a Support Group</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Connecting with others who are also quitting can provide valuable support and encouragement.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function ActivityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function AirVentIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
      <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
    </svg>
  )
}


function CakeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h0.01" />
      <path d="M12 4h0.01" />
      <path d="M17 4h0.01" />
    </svg>
  )
}


function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CigaretteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 12H2v4h16" />
      <path d="M22 12v4" />
      <path d="M7 12v4" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
    </svg>
  )
}


function ContactIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function FlameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function GlassWaterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  )
}


function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function PenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}


function SnowflakeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  )
}


function SparklesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  )
}


function TargetIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function ThumbsUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function TrophyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
