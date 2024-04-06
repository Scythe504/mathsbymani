"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { metadata } from "@/app/metadata/data"
import { Boxes } from "./ui/background-boxes"

export function CarouselWindow() {
    return (
        <Carousel className="mx-12 mb-8 pb-8">
            <CarouselContent>
                {metadata.map((data, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="bg-slate-900 text-slate-200 h-56 sm:h-auto sm:w-auto text-center">
                                <CardContent className="flex items-center justify-center p-3">
                                    <div className="text-xl font-semibold z-50"><br /><br />{data}<br/></div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
        </Carousel>
    )
}
