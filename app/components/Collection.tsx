import React from 'react'

const Collection = ({btnon}:any) => {
  return (
    <div className={`flex flex-col w-[80vw] justify-center items-center py-[10vh]  px-20 gap-10 ${btnon?'bg-[#18262a]':'bg-[#f6f9ff]'}`}>
        <div className='flex flex-col justify-center items-center text-center gap-8'>
            <h1 className='sm:text-2xl lg:text-6xl font-bold'>Collection Spotlight</h1>
            <h1 className='text-sm w-[60vw] font-semibold'>Discover extraordinary moments with our Shotlight Collection metatickets-exclusive access to premium events for unforgettable experience. Grab yours today!</h1>
        </div>
        <div className='grid grid-cols-3 gap-16'>
            <div className={`flex flex-col w-[18vw] h-[40vw] shadow-2xl rounded-sm relative ${btnon?'bg-gray-700':''}`}>
                <div className='flex justify-center items-center w-[100%] h-[70%] border-b-2 border-dashed border-gray-400'>
                        <div className='w-100 h-90 pt-2'>
                          <img src="ticket1.png" alt="" className='w-full h-95 object-fit' />
                        </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full h-[30%] gap-2 pt-2'>
                    <div className='text-xl font-semibold'>
                        <h1>Las Vegas Aviators</h1>
                    </div>
                    <div className='text-md font-medium'>
                      <h1>OCT 15 | SUN | 4:30 PM</h1>
                    </div>
                    <div className='text-md text-gray-500 font-medium text-center'>
                      <h1>Las Vegas Ballpark, Las Vegas, Nevada</h1>
                    </div>
                    <button className='px-10 py-2 rounded-sm bg-black text-white text-sm font-medium'>Take Flight Collection</button>
                </div>
                <div className={`absolute top-[68%] left-[-6%] w-[10%] h-[4%] rounded-full  border-r-2 ${btnon?'bg-[#18262a] border-[#18262a]':'bg-gray-100'}`}></div>
                <div className={`absolute top-[68%] right-[-6%] w-[10%] h-[4%] rounded-full  border-l-2 ${btnon?'bg-[#18262a] border-[#18262a]':'bg-gray-100'}`}></div>
            </div>
            <div className={`flex flex-col w-[18vw] h-[40vw] shadow-2xl rounded-sm relative ${btnon?'bg-gray-700':''}`}>
                <div className='flex justify-center items-center w-[100%] h-[70%] border-b-2 border-dashed border-gray-400'>
                        <div className='w-100 h-90 pt-2'>
                          <img src="ticket2.png" alt="" className='w-full h-95 object-fit' />
                        </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full h-[30%] gap-2 pt-2'>
                    <div className='text-xl font-semibold'>
                        <h1>Sacramento River Cats</h1>
                    </div>
                    <div className='text-md font-medium'>
                      <h1>OCT 15 | SUN | 4:30 PM</h1>
                    </div>
                    <div className='text-md text-gray-500 font-medium text-center'>
                      <h1>Sutter Health Park, Sacramento, California</h1>
                    </div>
                    <button className='px-10 py-2 rounded-sm bg-black text-white text-sm font-medium'>Orange Collection</button>
                </div>
                <div className={`absolute top-[68%] left-[-6%] w-[10%] h-[4%] rounded-full  border-r-2 ${btnon?'bg-[#18262a] border-[#18262a]':'bg-gray-100'}`}></div>
                <div className={`absolute top-[68%] right-[-6%] w-[10%] h-[4%] rounded-full  border-l-2 ${btnon?'bg-[#18262a] border-[#18262a]':'bg-gray-100'}`}></div>
            </div>
            <div className={`flex flex-col w-[18vw] h-[40vw] shadow-2xl rounded-sm relative ${btnon?'bg-gray-700':''}`}>
                <div className='flex justify-center items-center w-[100%] h-[70%] border-b-2 border-dashed border-gray-400'>
                        <div className='w-100 h-90 pt-2'>
                          <img src="ticket1.png" alt="" className='w-full h-95 object-fit' />
                        </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full h-[30%] gap-2 pt-2'>
                    <div className='text-xl font-semibold'>
                        <h1>Las Vegas Aviators</h1>
                    </div>
                    <div className='text-md font-medium'>
                      <h1>OCT 15 | SUN | 4:30 PM</h1>
                    </div>
                    <div className='text-md text-gray-500 font-medium text-center'>
                      <h1>Las Vegas Ballpark, Las Vegas, Nevada</h1>
                    </div>
                    <button className='px-10 py-2 rounded-sm bg-black text-white text-sm font-medium'>Take Flight Collection</button>
                </div>
                <div className={`absolute top-[68%] left-[-6%] w-[10%] h-[4%] rounded-full  border-r-2 ${btnon?'bg-[#18262a] border-[#18262a]':'bg-gray-100'}`}></div>
                <div className={`absolute top-[68%] right-[-6%] w-[10%] h-[4%] rounded-full  border-l-2 ${btnon?'bg-[#18262a] border-[#18262a]':'bg-gray-100'}`}></div>
            </div>

        </div>
    </div>
  )
}

export default Collection