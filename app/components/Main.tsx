import React from 'react'

const Main = ({btnon}:any) => {
  return (
    <div className={`flex flex-col py-10 px-20 gap-10 ${btnon?'bg-gray-800 text-white':''}`}>
        <div>
            <h1 className='font-2xl font-bold border-b-2 border-blue-400 inline pb-1'>Sports</h1>
        </div>
        <div className='grid grid-cols-5 gap-3'>
            <div className={`flex flex-col items-center w-[1/5] h-[35vw] shadow-2xl pt-2 ${btnon?'bg-gray-700':''}`}>
                <div className='w-[90%]'>
                    <img src={'first.png'} alt="" className='w-full object-fit' />
                </div>
                <div className='flex flex-col w-95 gap-3'>
                    <div className='flex text-lg font-semibold pt-2 w-full text-left'>
                        <h1 className='flex '>Sacramento River Cats</h1>
                    </div>
                    <div className={`flex justify-between px-2 py-1 ${btnon?'bg-gray-800':'bg-gray-200'}`}>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Total Event</h1>
                            <h1 className='font-semibold'>48 Events</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Sport</h1>
                            <h1 className='font-semibold'>Baseball</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col items-center w-[1/5] h-[35vw] shadow-2xl pt-2 ${btnon?'bg-gray-700':''}`}>
                <div className='w-[90%]'>
                    <img src={'third.png'} alt="" className='w-full object-fit' />
                </div>
                <div className='flex flex-col w-95 gap-3'>
                    <div className='flex text-lg font-semibold pt-2 w-full text-left'>
                        <h1 className='flex '>Sacramento River Cats</h1>
                    </div>
                    <div className={`flex justify-between  px-2 py-1 ${btnon?'bg-gray-800':'bg-gray-200'}`}>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Total Event</h1>
                            <h1 className='font-semibold'>28 Events</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Sport</h1>
                            <h1 className='font-semibold'>Baseball</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col items-center w-[1/5] h-[35vw] shadow-2xl pt-2 ${btnon?'bg-gray-700':''}`}>
                <div className='w-[90%]'>
                    <img src={'second.png'} alt="" className='w-full object-fit' />
                </div>
                <div className='flex flex-col w-95 gap-3'>
                    <div className='flex text-lg font-semibold pt-2 w-full text-left'>
                        <h1 className='flex '>Sacramento River Cats</h1>
                    </div>
                    <div className={`flex justify-between  px-2 py-1 ${btnon?'bg-gray-800':'bg-gray-200'}`}>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Total Event</h1>
                            <h1 className='font-semibold'>15 Events</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Sport</h1>
                            <h1 className='font-semibold'>Ice Hockey</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col items-center w-[1/5] h-[35vw] shadow-2xl pt-2 ${btnon?'bg-gray-700':''}`}>
                <div className='w-[90%]'>
                    <img src={'third.png'} alt="" className='w-full object-fit' />
                </div>
                <div className='flex flex-col w-95 gap-3'>
                    <div className='flex text-lg font-semibold pt-2 w-full text-left'>
                        <h1 className='flex '>Sacramento River Cats</h1>
                    </div>
                    <div className={`flex justify-between  px-2 py-1 ${btnon?'bg-gray-800':'bg-gray-200'}`}>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Total Event</h1>
                            <h1 className='font-semibold'>28 Events</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-500'>Sport</h1>
                            <h1 className='font-semibold'>Baseball</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col items-center w-[1/5] h-[35vw] shadow-2xl pt-2 ${btnon?'bg-gray-700':''}`}>
                <div className='w-[90%] relative'>
                    <div className='absolute top-0 right-0 h-[1.5vw] w-[3vw] bg-black text-white text-center font-semibold'>
                        <h1>Ad</h1>
                    </div>
                    <img src={'poster.png'} alt="" className='w-full object-fit' />
                </div>
                <div className='flex flex-col w-95 gap-3 px-3'>
                    <div className='flex text-lg font-semibold pt-3 w-full text-left'>
                        <h1 className='flex '>Advertisement Title</h1>
                    </div>
                    <div className='flex justify-between items-center text-wrap '>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae voluptate dolore quibusdam odit expedita eum nobis quas, sapiente veniam aspernatur optio alias architecto quis esse laborum ipsam, ab cum! Dolor, recusandae?</h1>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex justify-center items-center my-10 '>
            <button className='bg-blue-500 text-white rounded-sm px-7 py-3'>See More</button>
        </div>
    </div>
  )
}

export default Main