import React from 'react';

const Card = (props) => {
  return (
    <div className='w-100 p-4 flex flex-col gap-8 rounded-[5px] shadow bg-white justify-center max-sm:pb-10'>
        <div className=' flex justify-start pt-6 items-center gap-4 max-sm:flex-col max-sm:pt-5'>
          <img className='w-15 max-sm:pb-2' src={props.logo} alt="" />
          <h1 className='max-sm:w-full text-[#0000FF]'>Nova Agritech Ltd.</h1>
        </div>
        <div className='w-full'>
          <ul className='flex flex-wrap justify-between gap-4 max-sm:grid max-sm:grid-cols-2'>
            <li className='text-[14px]'>
              <p className='text-[grey]'>PRICE BRAND</p>
              <p className='text-[13px] font-bold'>RS 39 - 41</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>PRICE BRAND</p>
              <p className='text-[13px] font-bold'>RS 39 - 41</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>PRICE BRAND</p>
              <p className='text-[13px] font-bold'>RS 39 - 41</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>PRICE BRAND</p>
              <p className='text-[13px] font-bold'>RS 39 - 41</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>PRICE BRAND</p>
              <p className='text-[13px] font-bold'>RS 39 - 41</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>PRICE BRAND</p>
              <p className='text-[13px] font-bold'>RS 39 - 41</p>
            </li>
          </ul>
        </div>
        <div className='flex gap-3 w-fit max-sm:hidden pb-2'>
          <button className='pl-4 pt-1 pr-4 pb-1 border-1 border-blue-500 text-blue-500 text-[14px] font-medium rounded-[8px]'>RHP</button>
          <button className='pl-4 pt-1 pr-4 pb-1 text-white text-[14px] font-medium rounded-[8px] bg-[#F05537]'>DRHP</button>
        </div>
      </div>
  )
}

export default Card
