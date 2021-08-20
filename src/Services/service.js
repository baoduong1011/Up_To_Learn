import DanhSachKhoaHocCarousel from "./DanhSachKhoaHoc/DanhSachKhoaHocCarousel";
import DanhSachKhoaHocService from "./DanhSachKhoaHoc/DanhSachKhoaHocService";
import UserLogin from "./UserLogin/UserLogin";
import UserRegister from "./UserRegister/UserRegister";

export const danhSachKhoaHocService = new DanhSachKhoaHocService();

export const danhSachKhoaHocCarousel = new DanhSachKhoaHocCarousel();

export const userRegisterService = new UserRegister();

export const userLoginService = new UserLogin();