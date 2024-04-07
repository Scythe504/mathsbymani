import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"
import { courses } from "@/app/app-data/courses"
import { Poppins } from "next/font/google"

const font = Poppins({
    subsets : ["latin"],
    weight: ["600"]
})


export default function CourseCards() {

    return <div>
   <div className="sm:flex sm:flex-col sm:items-center sm:justify-center gap-4 flex flex-col items-center justify-center mx-5 min-w-52">
        {
        courses.map((course: {
            name: string,
            students: string,
            fees: string,
            color: string,
            text: string
        }, index: number) => {
            return <Card className={cn(`${course.color} ${course.text} shadow-md shadow-slate-800 w-full py-8`)} key={index}>
                    <CardContent>
                            <div className="mt-6 text-center flex flex-col items-center justify-center text-xl gap-2">
                                <div className={cn("text-center w-full text-xl font-bold",font.className)}>
                                    Batch Type: {course.name}
                                </div>
                                <div>
                                    Batch Size: {course.students}
                                </div>
                                <div>
                                    Fees: {course.fees}
                                </div>
                            </div>
                    </CardContent>
                </Card>
        })
    }
    </div>
    </div>
}