"use client"
import * as React from "react"
import { feature } from "@/app/app-data/data"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { Card, CardContent } from "./ui/card"

const font = Poppins({
    subsets: ["latin"],
    weight: ["100","200","300","400","500"]
})

export function FeatureList() {
    return (
        <div className="flex flex-col items-center justify-center space-y-8 mr-3 -mt-8">
            <h1 className="font-bold text-3xl text-white mx-2">What we provide</h1>
            <ul className={cn("text-white text-sm text-start font-bold space-y-4 pb-8 mx-2"
            ,font.className)}>
                {feature.map((feat: string, index: number)=>{
                    return <li key={index} className="flex flex-row gap-2 items-center">&#x2022; <Card className="w-full min-h-20 flex items-center">
                            <CardContent className="pt-4 -mb-2">
                                <div className="flex items-center justify-start">
                                    {feat}
                                </div>
                            </CardContent>
                        </Card>
                        </li>
                })}
            </ul>
        </div>
    )
}
