import { BackgroundBoxesDemo } from "@/components/background";
import CourseCarousel from "@/components/sliding-courses";
import { CarouselWindow } from "@/components/sliding-windows";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <div className="text-black translate-y-16 bg-slate-900 overflow-hidden">
      <div className="overflow-hidden w-full">
        <CarouselWindow/>
      </div>
      <BackgroundBoxesDemo/>
      <CourseCarousel/>
    </div>
  )
}
