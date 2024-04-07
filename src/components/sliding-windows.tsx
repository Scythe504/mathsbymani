"use client"
import * as React from "react"
import { feature } from "@/app/app-data/data"

export function CarouselWindow() {
    return (
        <div className="flex flex-col items-center justify-center space-y-8">
            <h1 className="font-bold text-3xl text-white">What we provide</h1>
            <ul className="text-white font-medium text-center space-y-4 pb-8 mx-2">
                {feature.map((feat: string, index: number)=>{
                    return <li key={index} className="text-md">{index+1}. {feat}</li>
                })}
            </ul>
        </div>
    )
}
