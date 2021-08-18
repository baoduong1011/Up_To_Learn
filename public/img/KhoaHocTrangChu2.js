import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { danhSachKhoaHocCarousel } from '../../Services/service';
export default function KhoaHocTrangChu2() {
    return (
        <div  className='carousel-course-home'>
           <div className='main'>
             <div className='information'>
                <div id="circle">
                    <div className='feature'>
                        <img src='' />
                    </div>
                </div>
             </div>
           </div>
        </div>
    )
}
