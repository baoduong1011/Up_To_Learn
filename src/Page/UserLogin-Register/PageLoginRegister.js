import React, { useState } from 'react'
import DangKy from '../DangKy/DangKy'
import DangNhap from '../DangNhap/DangNhap'

export default function PageLoginRegister() {

    const [active, setStatusActive] = useState({
        isLoginActive: true,
        textStatus: "Regigter"
    })

    const current = active.isLoginActive ? "Regisster" : "Login";

    let RightSlide = (text) => {
        return <div className='right-side'>
            <div className='inner-container'>
                <div className='text'>{active.textStatus}</div>
            </div>
        </div>
    }

    let ChangeStatus = () => {

        if(active.isLoginActive === true) {
            setStatusActive({...active,isLoginActive:false,textStatus:"Login"});
        }
        else {
            setStatusActive({...active,isLoginActive:true,textStatus:"Register"});
        }
        
    }

    const RightSilde = () => {
        return <div className="right-side">
            <div className='inner-conatainer'>
                <div className='text'>
                    {active.textStatus}
                </div>
            </div>
        </div>
    }


    return (
        <div className='main-user text-center'>
            <div className='App'>
                <div className='login'>
                <button onClick={ChangeStatus} className='btn btn-success mt-3'><i class="fa fa-angle-double-right"></i></button>
                {active.isLoginActive && <DangNhap />}
                <div className="right-side">
                
            </div>
                {!active.isLoginActive && <DangKy />}
                </div>
            </div>
            
        </div>
    )
         
 


}
