import Image from "next/image";
import Hero from "@/app/components/Hero"
import Description from "./components/Description";

import Link from 'next/link'
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <div className="relative">
      {/* Grid Background */}
      <div 
        className="absolute bottom-0 left-0 right-0 top-0 opacity-20 -z-10
        bg-[linear-gradient(to_right,#FFD1DC_1px,#B4A7D6_1px,transparent_1px),linear-gradient(to_bottom,#FFD1DC_1px,#B4A7D6_1px,transparent_1px)] 
        bg-[size:32px_32px] 
        [mask-image:radial-gradient(ellipse_60%_25%_at_50%_0%,#2E2E3A_40%,transparent_100%)]"></div>
      


      <Hero />
      <Description />

      <section className="px-4 my-10 sm:px-24 sm:mt-36 flex gap-6">
        <div className="flex-1">
          <h2 className="text-3xl font-bold tracking-tight w-11/18">Why We&apos;re Building the Future of Therapy</h2>
          <p className="text-xl leading-7 pt-2">
            Mental health care is in crisis. Millions of people face barriers to therapy due to cost, access, and stigma.
            We're here to change that by providing affordable, secure, and accessible AI-powered therapy for everyone.
          </p>
          <div className="mt-10">
            <Link href="" className="px-6 py-4 border border-blue-500 rounded-full">Read Our Purpose</Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 leading-8 pl-16 border-l">
          <p>1 in 5 U.S. adults experience mental illness each year</p>
          <p>1 in 20 U.S. adults experience serious mental illness each year</p>
          <p>1 in 6 U.S. youth aged 6-17 experience a mental health disorder each year</p>
          <p>50% of all lifetime mental illness begins by age 14, and 75% by age 24</p>
          <p>Suicide is the 2nd leading cause of death among people aged 10-14</p>
        </div>
      </section>

      <WaitlistForm />
    </div>
  );
}
