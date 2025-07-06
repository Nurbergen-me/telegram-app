'use client'

import React, {useEffect} from 'react'
import {cities} from "@/constants";
import CityList from "@/components/cityList";
import WebApp from "@twa-dev/sdk";

const Page = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && WebApp.initDataUnsafe.user) {
            WebApp.BackButton.show()
        }
    }, []);

    return (
        <main>
            <CityList title="All cities" cities={cities} variant="all" />
        </main>
    )
}
export default Page
