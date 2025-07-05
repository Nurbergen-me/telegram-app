'use client'

import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

const Home = () => {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (WebApp.initDataUnsafe.user) {
        setUserData(WebApp.initDataUnsafe.user as UserData);
      }
    }
  }, []);

    return (
        <main className="p-4">
          {userData ? (
              <>
                <h1 className="text-2xl font-bold">
                  User Data
                </h1>
                <ul className="list-disc">
                  <li className="list-disc">ID: {userData.id}</li>
                  <li className="list-disc">First Name: {userData.first_name}</li>
                  <li className="list-disc">Last Name: {userData.last_name}</li>
                  <li className="list-disc">Username: {userData.username}</li>
                  <li className="list-disc">Language Code: {userData.language_code}</li>
                  <li className="list-disc">Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
                </ul>
              </>
          ) : (
              <div>
                Loading...
              </div>
          )}
        </main>
    )
}
export default Home
