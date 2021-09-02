import Axios from 'axios';

class DanhMucKhoaHocService {
    LoadKhoaHocTheoDanhMuc(maDanhMuc) {
        return Axios({
            method:'GET',
            url:`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
        })
    }

    LoadDanhMuc() {
        return Axios({
            method:'GET',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc'
        })
    }
}

export default DanhMucKhoaHocService;