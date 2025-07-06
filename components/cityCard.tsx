import React from 'react'
import Image from "next/image";
import Link from "next/link";

const CityCard = ({id, name, image, short_desc, country } : City) => {
    return (
        <Link href={`/cities/${id}`} className="rounded-3xl min-w-[252px] shadow overflow-hidden">
            <Image src={image} alt={name} className="w-full object-cover min-h-[212]" width={252} height={212} />
            <div className="p-5 pt-4 bg-white">
                <h3 className="text-lg font-semibold">
                    {name}
                </h3>
                <div className="text-gray-600 font-light">
                    {country}
                </div>
                <p className="text-gray-400 text-sm font-light">
                    {short_desc}
                </p>
            </div>
        </Link>
    )
}
export default CityCard
