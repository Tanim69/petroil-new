import React from 'react'
import slider1 from '../../assets/img1.png'
import slider2 from '../../assets/img2.png'
import slider3 from '../../assets/img3.png'
import slider4 from '../../assets/img4.png'

const Slider = () => {
  return (



    <div className='flex md:flex-row justify-between flex-col md:gap-y-0 gap-y-[10px] px-6 md:px-0'>
        <img src={slider1} alt="" />
        <img src={slider2} alt="" />
        <img src={slider3} alt="" />
        <img src={slider4} alt="" />
    </div>
  )
}

export default Slider