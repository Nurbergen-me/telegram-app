'use client'

import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";
import {Button} from "@/components/ui/button";
import Image from "next/image";

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
        console.log(WebApp.initDataUnsafe)
        setUserData(WebApp.initDataUnsafe.user as UserData);
      }
    }
  }, []);

    return (
        <main>
          <section className="ml-5">
            <div className="pt-5 pb-3 pl-3 flex justify-between items-center">
              <h2 className="uppercase">
                For you {userData?.username}
              </h2>
              <Button variant="ghost">
                See all
              </Button>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-none py-1">
              <div className="rounded-3xl min-w-[212px] shadow overflow-hidden">
                <Image src="/images/paris.png" alt="paris" className="w-full object-cover" width={252} height={212} />
                <div className="p-5 pt-4 bg-white">
                  <h3 className="text-lg font-semibold">
                    Paris
                  </h3>
                  <div className="text-gray-500">
                    France
                  </div>
                  <p className="text-gray-500">
                    Europe’s capital of art and love
                  </p>
                </div>
              </div>
              <div className="rounded-3xl min-w-[212px] shadow overflow-hidden">
                <Image src="/images/paris.png" alt="paris" className="w-full object-cover" width={252} height={212} />
                <div className="p-5 pt-4 bg-white">
                  <h3 className="text-lg font-semibold">
                    Paris
                  </h3>
                  <div className="text-gray-500">
                    France
                  </div>
                  <p className="text-gray-500">
                    Europe’s capital of art and love
                  </p>
                </div>
              </div>
              <div className="rounded-3xl min-w-[212px] shadow overflow-hidden">
                <Image src="/images/paris.png" alt="paris" className="w-full object-cover" width={252} height={212} />
                <div className="p-5 pt-4 bg-white">
                  <h3 className="text-lg font-semibold">
                    Paris
                  </h3>
                  <div className="text-gray-500">
                    France
                  </div>
                  <p className="text-gray-500">
                    Europe’s capital of art and love
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="ml-5">
            <div className="pt-5 pb-3 pl-3 flex justify-between items-center">
              <h2 className="uppercase">
                For you {userData?.username}
              </h2>
              <Button variant="ghost">
                See all
              </Button>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-none py-1">
              <div className="rounded-3xl min-w-[212px] shadow overflow-hidden">
                <Image src="/images/paris.png" alt="paris" className="w-full object-cover" width={252} height={212} />
                <div className="p-5 pt-4 bg-white">
                  <h3 className="text-lg font-semibold">
                    Paris
                  </h3>
                  <div className="text-gray-500">
                    France
                  </div>
                  <p className="text-gray-500">
                    Europe’s capital of art and love
                  </p>
                </div>
              </div>
              <div className="rounded-3xl min-w-[212px] shadow overflow-hidden">
                <Image src="/images/paris.png" alt="paris" className="w-full object-cover" width={252} height={212} />
                <div className="p-5 pt-4 bg-white">
                  <h3 className="text-lg font-semibold">
                    Paris
                  </h3>
                  <div className="text-gray-500">
                    France
                  </div>
                  <p className="text-gray-500">
                    Europe’s capital of art and love
                  </p>
                </div>
              </div>
              <div className="rounded-3xl min-w-[212px] shadow overflow-hidden">
                <Image src="/images/paris.png" alt="paris" className="w-full object-cover" width={252} height={212} />
                <div className="p-5 pt-4 bg-white">
                  <h3 className="text-lg font-semibold">
                    Paris
                  </h3>
                  <div className="text-gray-500">
                    France
                  </div>
                  <p className="text-gray-500">
                    Europe’s capital of art and love
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
    )
}
export default Home
