import React from 'react'

export default function DangKy() {
    return (
        <div className='register-page animate__animated animate__backInLeft'>
            <div className='base-container'>
                <div className='content'>
                    <div className='header'>
                        REGISTER
                    </div>
                    <div className='image'>
                        <img src='img/login.svg' />
                    </div>

                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='taiKhoan'>Username</label>
                            <input type="text" name="taiKhoan" placeholder="username" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='matKhau'>Password</label>
                            <input type="password" name="matKhau" placeholder="password" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='soDT'>Phone Number</label>
                            <input type="phone" name="soDT" placeholder="Phone" />
                        </div>
                    </div>

                    <div className='footer'>
                        <button type='button' className='btnn'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
