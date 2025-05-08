'use client';
import React from 'react';
import Image from 'next/image';

export default function SectionThree() {
    return (
        <div className='p-4'>
            <div className="bg-[#CCDDD7] rounded-lg h-screen flex flex-col items-center justify-center">
                <div className='flex flex-row items-center justify-center gap-4'>
                    <div className='relative'>
                        <Image src="/Frame75.png" alt="personalized" width={200} height={200} className='w-50 h-50' />
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold'>Stress Relief and Relaxation</p>
                    </div>
                    <div className='relative'>
                        <Image src="/Frame76.png" alt="personalized" width={200} height={200} className='w-50 h-50' />
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold'>Energy Boost and Motivation</p>
                    </div>
                    <div className='relative'>
                        <Image src="/Frame77.png" alt="personalized" width={200} height={200} className='w-50 h-50' />
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold'>Healing and Emotional Balance</p>
                    </div>
                    <div className='relative'>
                        <Image src="/Frame79.png" alt="personalized" width={200} height={200} className='w-50 h-50' />
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold'>Gratitude and Abundance</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <div className='relative'>
                        <Image src="/Frame 80.png" alt="personalized" width={200} height={200} className='w-50 h-50' />
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold'>Gratitude and Abundance</p>
                    </div>
                    <div className='relative'>
                        <Image src="/Frame 78.png" alt="personalized" width={200} height={200} className='w-50 h-50' />
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold'>Gratitude and Abundance</p>
                    </div>
                    <div className='relative'>
                        <Image src="/Frame 81.png" alt="personalized" width={200} height={200} className='w-50 h-50' />
                        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold'>Gratitude and Abundance</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
