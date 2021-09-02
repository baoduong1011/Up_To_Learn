import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import { danhSachKhoaHocService } from '../../Services/service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

SwiperCore.use([Navigation, Scrollbar, A11y]);
export default function KhoaHocTrangChu() {



    useEffect(() => {
        danhSachKhoaHocService.LoadDanhSachKhoaHoc().then(res => {
            setDsKhoaHoc({ ...dsKhoaHoc, courses: res.data })
        })
            .catch(err => {
                console.log(err.response.data);
            })
    }, [])

    const dispatch = useDispatch();


    const [dsKhoaHoc, setDsKhoaHoc] = useState({
        courses: []
    })

    let renderDanhSachKhoaHoc = () => {
        return dsKhoaHoc.courses?.map((course, index) => {
            return <SwiperSlide   key={index} className='swiper-main'>
                <div className='overview-course'>
                    <div className='over-main' >
                        <div className='slide-content'>
                            <div className='course-img'>
                                <img src={course.hinhAnh} className='course-photo' />
                            </div>
                            <h5 className=''>{course.tenKhoaHoc}</h5>
                            <h6>{course.ngayTao}</h6>
                            <div className='btn-chuc-nang'>
                                <button className='btn btn-info'> Add To Cart</button>
                                <Link  onClick={() => {
                                    dispatch({
                                        type:"MA_KHOA_HOC",
                                        data: course.maKhoaHoc,
                                    })
                                }}   to={`/khoahoc/${course.maKhoaHoc}`}  style={{marginLeft:'10px'}} className='btn btn-success'>Review Course</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </SwiperSlide>
        })
    }

    return (
        <div className='khoa-hoc-trang-chu text-center'>
            <div className='container'>
                
                <Swiper style={{marginRight:'-25px'}}
                    marginRight="-25px"
                    spaceBetween={60}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                   
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {renderDanhSachKhoaHoc()}
                </Swiper>
            </div>
        </div>
    )
}
