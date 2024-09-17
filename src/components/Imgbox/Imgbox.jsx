import React from 'react'

const Imgbox = () => {
  return (
    <div className='bg-[#F0F0F0] '>

      <div className='max-w-container mx-auto  md:pt-[110px] pt-[20px] '>

<div className='md:flex md:gap-x-[62px] '>
<div className='bg-picone bg-cover bg-center bg-no-repeat md:h-[401px] md:w-[339px] h-[250px] '>

          <div className='bg-overlay w-fll h-full'>

            <h3 className='text-white font-pops md:text-[24px] text-[20px] font-bold md:w-[249px] md:pt-[75px] pt-[50px] pl-[46px] md:pb-[52px] pb-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
            <a href="#" className='ml-[46px] bg-imgboxbtn px-[40px] py-[13px] text-base font-pops text-[#fff] font-medium'>READ MORE</a>
          </div>
        </div>
        {/* 1st imgbox */}
        <div className='bg-pictwo bg-cover bg-center bg-no-repeat md:h-[401px] md:w-[339px] h-[250px]'>
          <div className='bg-overlay w-fll h-full'>

            <h3 className='text-white font-pops md:text-[24px] text-[20px] font-bold md:w-[249px] md:pt-[75px] pt-[50px] pl-[46px] md:pb-[52px] pb-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
            <a href="#" className='ml-[46px] bg-imgboxbtn px-[40px] py-[13px] text-base font-pops text-[#fff] font-medium'>READ MORE</a>
          </div>
        </div>
        {/* 2nd img box */}
        <div className='bg-picthree bg-cover bg-center bg-no-repeat md:h-[401px] md:w-[339px] h-[250px]'>
          <div className='bg-overlay w-fll h-full'>

            <h3 className='text-white font-pops md:text-[24px] text-[20px] font-bold md:w-[249px] md:pt-[75px] pt-[50px] pl-[46px] md:pb-[52px] pb-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
            <a href="#" className='ml-[46px] bg-imgboxbtn px-[40px] py-[13px] text-base font-pops text-[#fff] font-medium'>READ MORE</a>
          </div>
        </div>
        {/* 3rd imbox */}
</div>


        <div className='flex justify-end pt-[29px] '>
        <div className=''>
            <p className='font-pops text-base font-bold text-black pb-[109px]'>MORE FROM THE BLLOG</p>
           </div>
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="black"/>
                  </svg>
           </div>

        </div>


      </div>

          


    </div>
  )
}

export default Imgbox