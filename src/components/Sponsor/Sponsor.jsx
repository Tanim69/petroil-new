import React from 'react'
import spon1 from '../../../src/assets/sponsor/peteromax.png'
import spon2 from '../../../src/assets/sponsor/sponlogo.png'
import spon3 from '../../../src/assets/sponsor/T.png'
import spon4 from '../../../src/assets/sponsor/Thevron.png'
import spon5 from '../../../src/assets/sponsor/B.png'
import spon6 from '../../../src/assets/sponsor/Barcoo.png'
import spon7 from '../../../src/assets/sponsor/Bi.png'
import spon8 from '../../../src/assets/sponsor/Bio.png'

const Sponsor = () => {
    return (

        <div className='max-w-container mx-auto '>

            <div className='md:flex md:gap-x-[77px] md:px-0 px-[80px] '>
                <div className='flex md:py-[137px] py-[30px] items-center'>
                    <img src={spon1} alt="" />
                    <img src={spon2} alt="" />
                </div>
                <div className='flex md:py-[137px] py-[30px] items-center'>
                    <img src={spon3} alt="" />
                    <img src={spon4} alt="" />
                </div>
                <div className='flex md:py-[137px] py-[30px] items-center'>
                    <img src={spon5} alt="" />
                    <img src={spon6} alt="" />
                </div>
                <div className='flex md:py-[137px] py-[30px] items-center'>
                    <img src={spon7} alt="" />
                    <img src={spon8} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sponsor