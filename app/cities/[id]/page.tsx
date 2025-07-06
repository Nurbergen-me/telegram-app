'use client'

import React, {useEffect} from 'react'
import {cities} from "@/constants";
import Image from "next/image";
import {useParams} from "next/navigation";
import WebApp from "@twa-dev/sdk";
import {router} from "next/client";

const CityDetails = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && WebApp.initDataUnsafe.user) {
            WebApp.BackButton.show().onClick(router.back)
        }
    }, []);

    const {id} = useParams();
    const currentCity = cities.find((city: City) => city.id === id)

    return (
        <main>
            {currentCity && (
                <div>
                    <Image
                        src={currentCity.image} alt={currentCity.name}
                        width={212} height={292}
                        className="w-full object-cover max-h-[292]"
                    />
                    <div className="flex flex-col gap-2 px-5">
                        <div className="flex flex-col pt-5 pb-3 px-1">
                            <h2 className="text-2xl font-bold">
                                {currentCity.name}
                            </h2>
                            <p className="text-gray-400">
                                {currentCity.country}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 justify-between gap-2 my-2">
                            <div className="h-16 flex items-center justify-center bg-gray-100 rounded-xl text-sm font-semibold">
                                Find tickets
                            </div><div className="h-16 flex items-center justify-center bg-gray-100 rounded-xl text-sm font-semibold">
                                Search on web
                            </div>
                        </div>
                        <div className="flex px-4 flex-col bg-gray-100 rounded-xl text-sm font-semibold">
                            <div className="py-3 border-b border-gray-200">
                                <div className="text-sm font-light text-gray-500 mb-0.5">
                                    Description
                                </div>
                                <p className="font-[400]">
                                    {currentCity.short_desc}
                                </p>
                            </div>
                            <div className="py-3 border-b border-gray-200">
                                <div className="text-sm font-light text-gray-500 mb-0.5">
                                    Time zone
                                </div>
                                <p className="font-[400]">
                                    GMT +1
                                </p>
                            </div>
                            <div className="py-3 border-b border-gray-200">
                                <div className="text-sm font-light text-gray-500 mb-0.5">
                                    Currency
                                </div>
                                <p className="font-[400]">
                                    Czech koruna
                                </p>
                            </div>
                            <div className="py-3">
                                <div className="text-sm font-light text-gray-500 mb-0.5">
                                    Dial Code
                                </div>
                                <p className="font-[400]">
                                    +420
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
export default CityDetails
