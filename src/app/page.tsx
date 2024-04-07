import { HeroSection } from "@/components/background";
import ContactCard from "@/components/contact-card";
import CourseCarousel from "@/components/course-cards";
import { FeatureList } from "@/components/features";
import Image from "next/image";
import mapQr from "../../public/location.png"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600","700","800","900"]
})

export default function Home() {
  return (
    <main className="flex flex-col 
    items-center
    justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-slate-800 to-slate-950 min-h-screen min-w-screen pb-24"
     >
    <div className={"bg-transparent overflow-hidden"}>
      <HeroSection/>
      <div className=" w-full">
        <FeatureList/>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 pt-2" id="CourseId">
        <h1 className={cn("text-white font-bold text-5xl pb-6",
        font.className
        )}>
          Courses
        </h1>
        <CourseCarousel/>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 pt-2 mt-8" id="ContactId">
      <h1 className={cn("text-white font-bold text-5xl pb-6",
        font.className
        )}>
          Contact
        </h1>
        <div>
        <ContactCard/>
        </div>
        <div className="py-4">
          <Image src={mapQr} alt="location qr code" height="256" width="256"/>
        </div>
        <div className="text-white text-center">
          Address: NEW MAKCHUND TOLI, ROAD NO-05 NEAR ANGIRA INTERNATIONAL KIDS SCHOOL, CHUTIA RANCHI JHARKHAND-834001 <br/>
          Landmark: AANGAN PALACE 
        </div>
      </div>
    </div>
    </main>

  )
}
