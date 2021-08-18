import React, { useState } from 'react'

export default function DangNhap() {

    return (
        <div className='login-page  '>
            <div className='base-container'>
                

                <div className='content animate__animated animate__backInRight'>
                    <div className='header'>
                        LOGIN
                    </div>
                    <div className='image'>
                        <img src='img/login.svg' />
                    </div>

                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='userName'>Username</label>
                            <input type="text" name="taiKhoan" placeholder="username" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='passWord'>Password</label>
                            <input type="password" name="matKhau" placeholder="password" />
                        </div>
                    </div>

                    <div className='footer'>
                        <button style={{ color: 'white' }} type='button' className='btnn'>Login</button>
                    </div>
                </div>

                <div >
                
                </div>

            </div>
        </div>
    )
}
