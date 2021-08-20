import Axios from 'axios';
class UserRegister {
    DangKy(data) {
        return Axios({
            method:'POST',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
        })
    }
}

export default UserRegister;