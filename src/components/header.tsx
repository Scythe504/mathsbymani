import Image from "next/image"
import logo from "../../public/logo.png"
export default function Header() {
    return (<header className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2 print:hidden">
        <div className="container flex h-16 items-center max-w-[88rem] mx-auto">
            <div className="mr-4 hidden md:flex">
                <a className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10" href="/">
                    <div className="relative h-8 w-8 md:h-6 md:w-6 border border-slate-800  text-white   flex items-center justify-center rounded-md text-sm antialiased">
                        <div className="relative h-16 w-16 md:h-6 md:w-6 border border-slate-800  text-white   flex items-center justify-center rounded-md text-sm antialiased">
                            <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
                            <div className="text-sm text-emerald-50 relative z-20">
                                <Image src={logo} alt="logo" height="50" width="50" loading="lazy" style={{
                                    color: "white",
                                    borderColor : "white"
                                }}/>  
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-black dark:text-white">Maths By Mani</h1>
                    </div>
                </a>
            </div>
        <a className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rn:" data-state="closed" href="/">
            <div className="relative h-8 w-8 md:h-6 md:w-6 text-white flex items-center justify-center rounded-md text-md antialiased">
                <div className="text-sm text-emerald-500 relative-z-20">
                    <div className="text-sm text-emerald-50 relative z-20">
                        <Image src={logo} alt="logo" height="64" loading="lazy" style={{
                            color: "transparent"
                        }} />
                    </div>
                </div>
            </div>
        </a>
        <nav className="flex items-center text-md text-base xl:flex">
            <a href="#CourseId" className="transition-colors hover:text-foreground/80 text-grey/70">
                Courses
            </a>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
            <a href="#ContactId" className="transition-colors hover:text-foreground/80 text-grey/70 text-md">
                Contact us
            </a>
        </div>
        </div>
    </header>
    )
}