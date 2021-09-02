import Axios from 'axios';
class ChiTietKhoaHocService {
    LoadChiTietKhoaHoc(idCourse) {
        return Axios({
            method:"GET",
            url:`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${idCourse}`
        })
    }
}

export default ChiTietKhoaHocService;