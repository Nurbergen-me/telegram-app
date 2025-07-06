import React from 'react'
import {cities} from "@/constants";
import CityList from "@/components/cityList";

const Page = () => {
    return (
        <main>
            <CityList title="All cities" cities={cities} variant="all" />
        </main>
    )
}
export default Page
