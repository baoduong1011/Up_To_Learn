import React, { useEffect, useState } from 'react';
import { danhMucKhoaHocService } from '../../Services/service';
import Slider from "react-slick";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import SwiperCore, {
    Pagination
} from 'swiper';
import NavBarCategoty from '../../Components/NavBarCategory/NavBarCategoty';
import { useSelector } from 'react-redux';
// import state from 'sweetalert/typings/modules/state';

SwiperCore.use([Pagination]);
export default function DanhMucKhoaHoc(props) {
    let maDanhMucClick = props.match.params.idCategory;

    const [course, setCourse] = useState({
        listCourse: []
    })

    const maDanhMuc = useSelector(state => state.CategoryReducer.maDanhMuc);

    const [selected,setSelected] = useState("")

    useEffect(() => {
        danhMucKhoaHocService.LoadKhoaHocTheoDanhMuc(maDanhMucClick).then(res => {
            setCourse({ ...course, listCourse: res.data })
        })
            .catch(err => {
                console.log(err.response.data);
            })
    }, [maDanhMucClick])

    

    

    



   



    let renderDanhMuc = () => {
        return course.listCourse.map((course, index) => {
            return <SwiperSlide className='cardd' key={index}>

                <div className='contentt text-left'>
                    <img src={course.hinhAnh} />
                    <h5 style={{marginLeft:'auto'}}>{course.tenKhoaHoc}</h5>
                    <p>{course.ngayTao}</p>
                    <button><i class="fa fa-shopping-cart"></i> B U Y</button>
                </div>
            </SwiperSlide>
        })
    }

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
        <div className='category-courses-main p-5'>
            <div className='container-fluid  p-5'>
                <h2>{maDanhMuc}</h2>

                <NavBarCategoty selected={selected} setSelected={setSelected} maDanhMuc={maDanhMuc} maDanhMucClick={maDanhMucClick} />
                <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                    "clickable": true
                }} breakpoints={{
                    "@0.00": {
                        "slidesPerView": 1,
                        "spaceBetween": 10
                    },
                    "@0.75": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "@1.00": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    },
                    "@1.50": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                    }
                }} className="mySwiper p-5">

                    {renderDanhMuc()}

                </Swiper>


            </div>
        </div>
    )
}
