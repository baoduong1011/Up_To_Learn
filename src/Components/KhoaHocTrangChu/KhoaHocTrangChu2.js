import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { danhSachKhoaHocCarousel } from '../../Services/service';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function KhoaHocTrangChu2() {

    useEffect(() => {
        Aos.init({duration: 3000,offset: 300});
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='carousel-course-home'>
        <h3 data-aos="zoom-in-up" className='text-center p-4'>DEAL HOT IN 2022</h3>
            <div className='main'>
                <div className='information'>
                    <div className='overplay'></div>
                    <img data-aos="zoom-in-up" src="img/mobile.png" className='mobile animate__animated animate__fadeIn animate__delay-0.5s ' />

                </div>

                <div className='controls'>
                    <div data-aos="fade-left" className='feature one animate__animated animate__backInRight'>
                        <img  src='img/camera.png' />
                        <div>
                            <h1>Tools and Skills</h1>
                            <p>Devenir formateur</p>
                        </div>
                    </div>

                    <div className='feature two animate__animated animate__backInLeft'>
                        <img src='img/processor.png' />
                        <div>
                            <h1>Trainers</h1>
                            <p>Our trainers around the world</p>
                        </div>
                    </div>

                    <div className='feature three animate__animated animate__backInRight'>
                        <img src='img/display.png' />
                        <div>
                            <h1>Courses</h1>
                            <p>+6,000 of the best Udemy courses. </p>
                        </div>

                    </div>

                    <div data-aos="fade-up" data-aos-anchor-placement="center-center" className='feature four animate__animated animate__backInLeft'>
                        <img src='img/battery.png' />
                        <div>
                            <h1>Technology Life</h1>
                            <p>Learn and improve your skills</p>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}
