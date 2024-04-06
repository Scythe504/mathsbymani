import { BackgroundBoxesDemo } from "@/components/background";
import ContactCard from "@/components/contact-card";
import CourseCarousel from "@/components/sliding-courses";
import { CarouselWindow } from "@/components/sliding-windows";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import mapQr from "../../public/mapslocation.jpg"


export default function Home() {
  return (
    <div className={"translate-y-12 bg-slate-900 overflow-hidden"}>
      <Boxes/>
      <BackgroundBoxesDemo/>
      <div className="overflow-hidden w-full">
        <CarouselWindow/>
      </div>
      <CourseCarousel/>
      <div className="flex flex-col items-center justify-center gap-2 pt-2">
        <div>
        <ContactCard/>
        </div>
        <div>
          <Image src={mapQr} alt="location qr code" height="256" width="256"/>
        </div>
        <div className="text-white text-center">
          Address: NEW MAKCHUND TOLI, ROAD NO-05 NEAR ANGIRA INTERNATIONAL KIDS SCHOOL, CHUTIA RANCHI JHARKHAND-834001 <br/>
          Landmark: AANGAN PALACE 
        </div>
      </div>
    </div>
  )
}
