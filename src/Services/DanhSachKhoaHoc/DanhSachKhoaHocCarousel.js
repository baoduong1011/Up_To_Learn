import Axios from 'axios';
class DanhSachKhoaHocCarousel {
    LoadDanhSachKhoaHoc() {
        return Axios({
            method:'GET',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP02'
        })
    }
}

export default DanhSachKhoaHocCarousel;