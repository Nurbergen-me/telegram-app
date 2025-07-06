'use client'

import React, {useEffect} from 'react'
import {cities} from "@/constants";
import CityList from "@/components/cityList";
import WebApp from "@twa-dev/sdk";
import {router} from "next/client";

const Page = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && WebApp.initDataUnsafe.user) {
            WebApp.BackButton.show()
            WebApp.BackButton.onClick(() => router.push("/"))
        }
    }, []);

    return (
        <main>
            <CityList title="All cities" cities={cities} variant="all" />
        </main>
    )
}
export default Page
