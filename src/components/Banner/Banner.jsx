import React from 'react'

const Banner = () => {
    return (

        <div className='bg-banner md:py-[257px] bg-cover bg-center bg-no-repeat bg-overlay relative after:content-[""]  after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-overlay after:z-[-1] z-[-1] py-[60px] md:py-[258px] bg-cover bg-no-repeat bg-center'>


            <div className='max-w-container mx-auto '>
                <h1 className='leading-normal md:w-[842px] md:text-6xl font-pops font-bold md:text-left text-center text-[25px] text-white  mb-8 '>We exist since 1975 on the  oil and gas industry.</h1>

                <a href="#" className='bg-[#F40404] md:px-[40px] md:py-[13px] md:text-base font-pops text-[#fff] font-medium hover:bg-transparent hover:border white md:ml-0 ml-[100px] px-[20px] py-[8px] text-[13px] cursor-pointer '>LEARN MORE</a>

            </div>

        </div>

    )
}

export default Banner