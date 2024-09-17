import React, { useState } from 'react'

import logo from '../../assets/logo.png'
import { AiOutlineBars } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {


    const [show, setShow] = useState(false)
    const handleclick = () => {
        setShow(!show)
    }



    return (


        <div className='bg-primary py-[30px]'>
            <div className='max-w-container mx-auto  px-[10px] md:px-0 '>


                <div className='flex justify-between md:items-center'>
                    <div className='md:w-1/5'>
                        <img className='max-w-[170%]' src={logo} alt="logo" />
                    </div>

                    <div className='flex justify-end '>
                        <div onClick={handleclick} className='md:hidden'>

                            {
                                show == true ? <RxCross2  className='text-2xl'/> : <AiOutlineBars className='text-2xl' />

                            }

                        </div>

                        <div className='md:w-4/5'>
                            <ul className={`md:flex  gap-x-14 justify-end  md:static absolute top-[-200px] left-0 ${show ? 'top-[189px] bg-[#282828] w-full py-[20px] pl-[10px]' : 'top-[-200px]'}`}>
                                <li><a className='font-pops text-base font-semibold text-white' href="#">Home</a></li>
                                <li><a className='font-pops text-base font-semibold text-white' href="#">About</a></li>
                                <li><a className='font-pops text-base font-semibold text-white' href="#">Services</a></li>
                                <li><a className='font-pops text-base font-semibold text-white' href="#">Gallary</a></li>
                                <li><a className='font-pops text-base font-semibold text-white ' href="#">Blog</a></li>






                                {/* BUTTON */}
                               
                               <div className='md:mt-0 mt-[30px]'>
                               <li><a className=' font-pops text-base font-semibold text-white border-2 px-[30px] md:py-[13px] py-[5px] md:mt-[30px]' href="#">CONTACT</a></li>
                               </div>


                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Navbar