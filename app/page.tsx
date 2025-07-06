'use client'

import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";
import CityList from "@/components/cityList";
import {cities} from "@/constants";

const Home = () => {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && WebApp.initDataUnsafe.user) {
        WebApp.disableVerticalSwipes()
        setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

    return (
        <main>
          <CityList title="For You" cities={cities} userData={userData} />
          <CityList title="Most popular" cities={cities.toReversed()} userData={userData} />
        </main>
    )
}
export default Home
