import React from 'react'
import TrangChu1 from '../../Components/TrangChu-1/TrangChu1'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import KhoaHocTrangChu from '../../Components/KhoaHocTrangChu/KhoaHocTrangChu';
import KhoaHocTrangChu2 from '../../Components/KhoaHocTrangChu/KhoaHocTrangChu2';
import "animate.css"
import PosterTrangChu from '../../Components/KhoaHocTrangChu/PosterTrangChu';
export default function TrangChu() {
    return (
        <div className='home-main'>
        <PosterTrangChu/>
        <KhoaHocTrangChu2 />
            <div className='trang-chu-main text-center'>
                <div className='container-fluid text-center'>
                <h3 className='p-4 header-courses'>Welcome to my courses</h3>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12   bg-trang-chu'>
                        </div>
                        <div style={{ padding: '0px 0px' }} className='col-md-6 col-sm-12'>
                            <div className='description-course-overview'>
                                <div className='overview-course'>
                                    <h1>Online degree courses</h1>
                                    <p>Learn flexibly with online degree courses created by leading universities. From undergraduate to postgraduate, make degree-level learning work for you.</p>

                                    <button className='btn1'>How Degrees work</button>

                                    <button className='btn2'>See all Degrees</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <KhoaHocTrangChu />
        </div>
    )
}
