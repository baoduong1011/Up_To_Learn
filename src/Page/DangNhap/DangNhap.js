import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { userLoginService } from '../../Services/service';
export default function DangNhap() {

   const [userLogin,setUserLogin] = useState({
       values: {
            taiKhoan:'',
            matKhau:''
       },
       errors: {
            taiKhoan:'',
            matKhau:''
       },
       valid:false
   })

   let handleChange = (e) => {
       let {type,value,name} = e.target;
       let errorMessage = "";
       if(value.trim() === "") {
           if(name === 'taiKhoan') {
                errorMessage = 'Tài khoản bạn chưa nhập';
           }

           if(name === 'matKhau') {
                errorMessage = 'Mật khẩu bạn chưa nhập';
           }
       }
           let newValues = {...userLogin.values,[name]:value};
           let newErrors = {...userLogin.errors,[name]:errorMessage};

       setUserLogin({
        ...userLogin,
        values: newValues,
        errors: newErrors
    })     
   }

   let checkValid = () => {
        let valid = true;
        for(let key in userLogin.errors) {
            if(userLogin.errors[key] !== "" || userLogin.values[key] === '') {
                valid = false;
            }
        }
        setUserLogin({...userLogin,valid:valid});
   }

   useEffect(() => {    
    checkValid(); 
   },[userLogin.errors])

    let handleSubmit = () => {
        userLoginService.DangNhap(userLogin.values).then(res => {
              localStorage.setItem('taiKhoan',userLogin.values.taiKhoan);
              localStorage.setItem('matKhau',res.data.accessToken);
              localStorage.setItem('maLoaiNguoiDung',res.data.maLoaiNguoiDung);

              swal({
                title: "Login Successfully",
                text: "Welcome to Up To Learn",
                icon: "success",
                button: "OK",
            })

            

            setTimeout(function() {
                window.location.replace('/trangchu');
            },2500)
        })
        .catch(err => {
            let stringNotify = `${err.response.data}`;
            swal({
                title: "Login Failed",
                text: `${stringNotify}`,
                icon: "error",
                button: "OK",
            })
        })
    }

 

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
                            <input type="text" name="taiKhoan" placeholder="username" onChange={handleChange} />
                        </div>
                        <p className='text-danger text-center'>{userLogin.errors.taiKhoan}</p>

                        <div className='form-group'>
                            <label htmlFor='passWord'>Password</label>
                            <input type="password" name="matKhau" placeholder="password" onChange={handleChange} />
                        </div>
                        <p className='text-danger text-center'>{userLogin.errors.matKhau}</p>
                    </div>

                    <div className='footer'>

                        {userLogin.valid ? <button onClick={() => {
                            handleSubmit()
                        }} style={{ color: 'white' }} type='button' className='btnn'>Login</button> :  <button disabled style={{cursor:'not-allowed', color: 'white'}} type='button' className='btnn'>Login</button> }

                       
                    </div>
                </div>

                <div >
                
                </div>

            </div>
        </div>
    )
}
