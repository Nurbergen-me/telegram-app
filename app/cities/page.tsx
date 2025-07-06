'use client'

import React, {useEffect} from 'react'
import {cities} from "@/constants";
import CityList from "@/components/cityList";
import WebApp from "@twa-dev/sdk";
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && WebApp.initDataUnsafe.user) {
            WebApp.ready();
            WebApp.BackButton.show();
            const handleBack = () => {
                router.push('/');
            };
            WebApp.BackButton.onClick(handleBack);

            return () => {
                WebApp.BackButton.offClick(handleBack);
            };
        }
    }, [router]);

    return (
        <main>
            <CityList title="All cities" cities={cities} variant="all" />
        </main>
    )
}
export default Page
