import Image from "next/image"
import logo from "../../public/logo.png"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400"]
})


export default function NavBar() {

    return <header className="w-full sticky z-40
    top-0 min-h-14 py-2 text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
    from-slate-900 to-slate-950 border-b border-black
    ">
        <div className="flex flex-row items-center justify-center gap-2 px-4 mr-2">
            <a href="/" className="flex items-center justify-start sm:pr-2">
                <div className="rounded-full">
                    <Image src={logo} alt="Logo" height={64} />
                </div>
                <div className={cn("hidden md:block text-white text-xl font-bold",font.className)}>
                    MATHS BY MANI
                </div>
            </a>
            <nav className="flex items-center text-md text-base xl:flex">
                <a href="#CourseId" className="transition-colors hover:text-foreground/80 text-grey/70">
                    Courses
                </a>
            </nav>
            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end pr-2">
                <a href="#ContactId" className="transition-colors hover:text-foreground/80 text-grey/70">
                    Contact us
                </a>
            </div>
        </div>
    </header >
}