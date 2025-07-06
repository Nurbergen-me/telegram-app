'use client'

import React from 'react'
import {cities} from "@/constants";
import CityList from "@/components/cityList";
import {useBackButtonSupport} from "@/hooks/useBackButtonHistory";

const Page = () => {
    useBackButtonSupport();

    return (
        <main>
            <CityList title="All cities" cities={cities} variant="all" />
        </main>
    )
}
export default Page
