import React from 'react'
import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

type CategoryIconProps = {
    // Define any props if needed
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    return (
        <Link
            className='text-xl font-bold'
            href={`/order/${category.slug}`} >

            <div className='flex items-center gap-4 border-t border-gray-200 last-of-type:border-b hover:bg-blue-400 hover:cursor-pointer'>


                <div className='w-16 h-16 relative'>
                    <Image
                        fill
                        src={`/icon_${category.slug}.svg`}
                        alt="Icono categoria"
                    />
                </div>
                {category.name}

            </div>
        </Link>

    )
}