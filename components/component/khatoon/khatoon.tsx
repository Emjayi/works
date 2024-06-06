"use client"
import Link from "next/link"
import HeaderKhatoon from "./header"
import { CanvasRevealEffect } from "./homeLinks"
import React from "react";
import { animate, AnimatePresence, motion, stagger } from "framer-motion";

export function Khatoon() {

  const Khatoon = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

  const slideUp = {
    initial: {
      y: "100%"
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i }
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="flex min-h-[100dvh]" >
      <main className="flex-1 flex from-zinc-400 to-zinc-300 bg-gradient-radial " style={{ backgroundImage: "url(@/public/bg.jpg)" }}>
        <section className="flex-1 flex flex-col items-center justify-end h-[100dvh] ">
          <Card title="Services" desc="We do everything for you. Just sit and enjoy!">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-red-600"
              colors={[
                [255, 255, 255]
              ]}
            />
          </Card>
        </section>
        <section className="flex-1 flex flex-col items-center justify-end h-[100dvh] ">
          <Card title="Work" desc="We do everything for you. Just sit and enjoy!">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
        </section>
        <section className="flex-1 flex flex-col items-center justify-end h-[100dvh] ">
          <Card title="About" desc="We do everything for you. Just sit and enjoy!">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-red-900"
            />
          </Card>
        </section>
        <section className="flex-1 flex flex-col items-center justify-end h-[100dvh] ">
          <Card title="Contact" desc="We do everything for you. Just sit and enjoy!">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-blue-900"
            />
          </Card>
        </section>
        {/* <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{
            duration: .5,
            delay: 0.5,
            when: "beforeChildren", //use this instead of delay
            staggerChildren: 0.2,
          }}
          className="h-[20dvh] fixed bottom-0 w-[100dvw] text-6xl flex justify-center items-center gap-[6%] mix-blend-luminosity text-purple-600">
          <div className="text-bold ">K</div>
          <div className="text-bold ">H</div>
          <div className="text-bold ">A</div>
          <div className="text-bold ">T</div>
          <div className="text-bold ">O</div>
          <div className="text-bold ">O</div>
          <div className="text-bold ">N</div>
        </motion.div> */}
        <h1>
          {
            "Khatoon".split(" ").map((word, index) => {
              return <span key={index}><motion.span variants={slideUp} custom={index} initial={"closed"} animate={"open"} key={index}>{word}</motion.span></span>
            })
          }
        </h1>
      </main>
    </div>
  )
}

const Card = ({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-r-2 border-black/[0.4] group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4 relative h-[100%]"
    >

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="dark:text-white text-xl opacity-100 group-hover/canvas-card:opacity-0 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        {title}
      </h2>
      <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 absolute text-center px-8 z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        {desc}
      </h2>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
