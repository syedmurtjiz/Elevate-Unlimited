'use client';
import React from 'react'
import Image from 'next/image';

export default function SectionTwo() {
  return (
    <div className='p-4'>
<div className="bg-[url('/Frame.png')]   bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center py-8">
            <h1 className="text-4xl max-w-4xl text-center text-white">
                Whats Included <br />
                <span className="text-5xl font-bold">
                   With Elevate Unlimited
                </span>
            </h1>
        </div>
<div className='flex flex-row items-center justify-center  gap-4 p-12'>
        <div className='flex flex-col items-center justify-center  gap-2 w-90'>
            <div className='bg-[#CCDDD7] rounded-lg p-4 px-6 pt-8 shadow-lg '>
                <Image src="/logo.png" alt="personalized" className='w-12 h-12' width={48} height={48} />
                <h3 className='text-lg font-semibold'>Personalized Playlists</h3>
                <p>Create your own meditation playlists tailored to your needs.</p>
            </div>
            <div className='bg-[#C9C4DB] rounded-lg p-4 px-6 pt-8 shadow-lg max-w-sm'>
            <Image src="/logo.png" alt="personalized" width={48} height={48} />

                <h3 className='text-lg font-semibold'>Community Access</h3>
                <p>Join a like-minded community for insights and live events.</p>
            </div>
            <div className='bg-[#D9D9D9] rounded-lg p-4 px-6 pt-8 shadow-lg max-w-sm'>
            <Image src="/logo.png" alt="personalized" width={48} height={48} />

                <h3 className='text-lg font-semibold'>Exclusive Guided Sessions</h3>
                <p>Access extended and advanced meditations.</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 w-90'>
        <div className='bg-[#D9D9D9] rounded-lg p-4 px-6 pt-8 shadow-lg '>
            <Image src="/logo.png" alt="personalized" width={48} height={48} />

                <h3 className='text-lg font-semibold'>Unlimited Access</h3>
                <p>Enjoy full access to all studio MP3 quality audio meditation categories, including guided, unguided, and Hz frequency options.</p>
            </div>
            <div className='bg-[#E1E0EE] rounded-lg p-4 px-6 pt-8 shadow-lg'>
            <Image src="/logo.png" alt="personalized" width={48} height={48} />

                <h3 className='text-lg font-semibold'>Unlimited Access</h3>
                <p>Enjoy full access to all studio MP3 quality audio meditation categories, including guided, unguided, and Hz frequency options.</p>
            </div>
        </div>
        </div>
        </div>
     
        </div>
  );
}