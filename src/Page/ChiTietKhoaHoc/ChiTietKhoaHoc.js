import React, { useEffect, useState } from 'react'
import { chiTietKhoaHocService } from '../../Services/service';
import Aos from 'aos';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import BannerChiTiet from './BannerChiTiet';
import { useDispatch } from 'react-redux';
export default function ChiTietKhoaHoc(props) {

    let maKhoaHoc = props.match.params.idCourse;

    const [course, setCourse] = useState({
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        luotXem: "",
        hinhAnh: "",
        maNhom: "",
        ngayTao: "",
        moTa: "",
        soLuongHocVien: "",
        nguoiTao: {
            taiKhoan: "",
            hoTen: "",
            maLoaiNguoiDung: "",
            tenLoaiNguoiDung: ""
        },
        danhMucKhoaHoc: {
            maDanhMucKhoahoc: "",
            tenDanhMucKhoaHoc: ""
        }
    })




    useEffect(() => {



        chiTietKhoaHocService.LoadChiTietKhoaHoc(maKhoaHoc).then(res => {
            setCourse({ ...course, maKhoaHoc: res.data.maKhoaHoc, hinhAnh: res.data.hinhAnh, nguoiTao: res.data.nguoiTao, luotXem: res.data.luotXem, tenKhoaHoc: res.data.tenKhoaHoc, ngayTao: res.data.ngayTao, soLuongHocVien: res.data.soLuongHocVien, maNhom: res.data.maNhom, danhMucKhoaHoc: res.data.danhMucKhoaHoc, moTa: res.data.moTa })
        })

            .catch(err => {
                swal({
                    title: `${err.response.data}`,
                    text: "Welcome to Up To Learn",
                    icon: "error",
                    button: "OK",
                })

                
            })
    }, [])

    const dispatch = useDispatch();



    return (
        <div>
            <div className='overview-courses-main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 text-center'>
                            <img src={course.hinhAnh} />
                            <h5 className='pt-3'>Date: {course.ngayTao}</h5>
                            <p>Teachers: {course.nguoiTao.hoTen}</p>

                           

                        </div>

                        <div className='col-md-7'>
                            <div className='overview-course'>
                                <h3 style={{ fontWeight: '700' }}> <span className='text-warning'>Lesson:</span> {course.tenKhoaHoc}</h3>
                                <h6><span className='text-warning'> <i class="fa fa-play"></i>  View:  </span> {course.luotXem} </h6>
                                <h6>  <span className='text-warning'>  <i class="fa fa-child"></i>  Students: </span>  {course.soLuongHocVien}</h6>
                                <h6> <span className='text-warning'><i class="fa fa-align-justify"></i> Category:</span> <span><Link onClick={() => {
                                    dispatch({
                                        type:'GET',
                                        maDanhMuc: course.maDanhMucKhoahoc,
                                        tenDanhMuc: course.tenDanhMucKhoaHoc
                                    })
                                }} style={{color:'white'}} to={`/danhmuc/${course.danhMucKhoaHoc.maDanhMucKhoahoc}`}>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</Link></span></h6>

                                {course.moTa.length < 300 ? <p style={{ overflow: 'hidden' }} className='review-course'> <span className='text-warning'><i class="fa fa-eye"></i>  Review:</span> {course.moTa}</p> : <p className='review-course'> <span className='text-warning'><i class="fa fa-eye"></i>  Review:</span> {course.moTa}</p>}

                            </div>

                            


                            <div className='body-button-cart'>
                            <Link to="#" className='card-a'>
                                <span><i class="fa fa-cart-arrow-down"></i> Buy</span>
                                <div className='liquid'></div>
                            </Link>
                        </div>


                        </div>
                        
                    </div>
                </div>
                
            </div>
            <BannerChiTiet />
        </div>
    )
}
