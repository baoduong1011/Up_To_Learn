import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { userRegisterService } from '../../Services/service';
export default function DangKy() {
    
    const [userRegister, setUserRegister] = useState({
        values: {
            taiKhoan: '',
            matKhau: '',
            hoTen: 'user_name',
            soDT: '',
            maNhom: 'GP01',
            email: ''
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maNhom: '',
            email: ''
        },
        valid: false
    });

    let handleChange = (e) => {
        let {name,type,value} = e.target;
        let errorMessage = "";
        if(type === 'email') {
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (!regex.test(value)) {
                errorMessage = 'Email' + ' không đúng định dạng';
            }
        }

        if(name === 'soDT') {
            const regex =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(!regex.test(value)) {
                errorMessage = 'Số Điện Thoại' + ' không đúng định dạng số'
            }
        }

        if(value.trim() === '') {
            if(name === 'taiKhoan') {
                errorMessage = 'Tài khoản không được để trống (*)';
            }
            if(name === 'matKhau') {
                errorMessage = 'Mật khẩu không được để trống (*)';
            }
            if(name === 'soDt') {
                errorMessage = 'Số điện thoại không được để trống (*)';
            }
            if(name === 'email') {
                errorMessage = 'Email không được để trống (*)';
            }

        }

        let values = {...userRegister.values,[name]:value};
        let errors = {...userRegister.errors,[name]:errorMessage};

        setUserRegister({
            ...userRegister,
            values: values,
            errors: errors
        })
    }

    let checkValid = () => {
        let valid = true;
        for(let key in userRegister.errors) {
            if(userRegister.errors[key] !== "" || userRegister.values[key] === '') {
                valid = false;
            }
        }
        setUserRegister({...userRegister,valid:valid});
    }

    useEffect(() => {
        checkValid();
    },[userRegister.errors]);

    let handleSubmit = (e) => {
        // e.preventDefault();
        
        userRegisterService.DangKy(userRegister.values).then(res => {
            swal("Đăng ký thành công!", "Chúc bạn có những trải nghiệm vui vẻ!", "success");
            setTimeout(function() {
                window.location.reload();
            },4000);
        })
        .catch(err => {
            alert(err.response.data);   
        })
      }

    return (
        <div className='register-page animate__animated animate__backInLeft'>
            <div className='base-container container'>
                <div className='content text-center'>
                    <div className='header'>
                        REGISTER
                    </div>
                    <div className='image text-center'>
                        <img style={{marginLeft:'40%'}} src='img/login.svg' />
                    </div>

                    <div className='form'>

                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group text-center'>
                                        <label htmlFor='taiKhoan'>Username</label>
                                        <input type="text" name="taiKhoan" placeholder="username" onChange={handleChange} />
                                    </div>
                                    <p className='text-center text-danger'>{userRegister.errors.taiKhoan}</p>
                                </div>

                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='matKhau'>Password</label>
                                        <input type="password" name="matKhau" placeholder="password" onChange={handleChange} />
                                    </div>
                                    <p className='text-center text-danger'>{userRegister.errors.matKhau}</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <input type="email" name="email" placeholder="email" onChange={handleChange} />
                                    </div>
                                    <p className='text-center text-danger'>{userRegister.errors.email}</p>
                                </div>

                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='soDT'>Phone Number</label>
                                        <input type="phone" name="soDT" placeholder="Phone" onChange={handleChange} />
                                    </div>
                                    <p className='text-center text-danger'>{userRegister.errors.soDT}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='footer'>
                    {userRegister.valid ? <button onClick={() => {
                        handleSubmit()
                    }} className='btnn'>Register</button> : <button disabled style={{cursor:'not-allowed'}} className='btnn'>Register</button>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
