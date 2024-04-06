import Image from "next/image"
import mathImage from "../../public/maths.jpg"
import { Card, CardContent } from "./ui/card"
import { courses } from "@/app/metadata/courses"
import { Boxes } from "./ui/background-boxes"

export default function CourseCarousel() {

    return <div>
   <div className="sm:flex sm:flex-col sm:items-center sm:justify-center gap-4">
        {
        courses.map((course: {
            name: string,
            students: string,
            fees: string
        }, index: number) => {
            return <div key={index}>
                <Card className="bg-slate-900">
                    <CardContent>
                        <div className="flex flex-col items-center justify-center gap-2 text-center text-md text-white  rounded-md max-w-64 shadow-md p-2 shadow-slate-800" key={index}>
                            <div className="rounded-lg overflow-hidden">
                                <Image src={mathImage} alt="Abstract math symbols" />
                            </div>
                            <div className="pb-4 pt-4">
                                <div>
                                    {course.name}
                                </div>
                                <div>
                                    {course.students}
                                </div>
                                <div>
                                    {course.fees}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        })
    }
    </div>
    </div>
}