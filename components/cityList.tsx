import React from 'react'
import {Button} from "@/components/ui/button";
import CityCard from "@/components/cityCard";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface CityListProps {
    title: string;
    cities: City[];
    userData?: UserData | null,
    variant?: "all" | null;
}

const CityList  = ({title, cities, variant } : CityListProps) => {
    return (
        <section className="mb-3">
            <div className="pt-5 pb-3 pl-8 flex justify-between items-center">
                <h2 className="uppercase text-sm font-light text-gray-600">
                    {title}
                </h2>
                {variant !== "all" && (
                    <Link href="/cities">
                        <Button variant="link">
                            See all
                        </Button>
                    </Link>
                )}
            </div>
            <div className={cn("flex px-5 gap-3 scrollbar-none py-1", variant === 'all' ? 'flex-col' : 'overflow-x-auto')}>
                {cities.map((city: City) => (
                    <CityCard key={city.id} {...city} />
                ))}
            </div>
        </section>
    )
}
export default CityList
