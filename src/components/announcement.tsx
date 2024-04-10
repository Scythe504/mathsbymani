import { announcement } from "@/app/app-data/announcement";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "400", "600"]
})

export default function Announcement() {

    return <div className="flex flex-row gap-2 items-center mx-3">
         <Card className="w-full min-h-20 flex items-center">
            <CardContent className="pt-4 -mb-2">
            <div className="flex flex-col items-center justify-start gap-2 text-center">
                <div className={cn("font-semibold text-xl",font.className)}>
                    {announcement.title}
                </div>
                <div>
                    {announcement.description},&nbsp;
                    <a href="https://forms.gle/VmJa24P6mk6HXbjCA" className="text-blue-500 underline">Click Here</a>
                </div>
            </div>
         </CardContent>
        </Card>           
    </div >
}
