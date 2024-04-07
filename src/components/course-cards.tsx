import { Card, CardContent } from "./ui/card"
import { courses } from "@/app/app-data/courses"

export default function CourseCards() {

    return <div>
   <div className="sm:flex sm:flex-col sm:items-center sm:justify-center gap-4 flex flex-col items-center justify-center mx-2">
        {
        courses.map((course: {
            name: string,
            students: string,
            fees: string
        }, index: number) => {
            return <Card className="bg-transparent shadow-md shadow-slate-800" key={index}>
                    <CardContent>
                            <div className="mt-6 text-center flex flex-col items-center justify-center text-xl font-sans font-semibold gap-2 text-white">
                                <div>
                                    Name: {course.name}
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