import React, { useEffect, useState } from 'react'
import { danhMucKhoaHocService } from '../../Services/service';
import { useDispatch, useSelector } from 'react-redux';
// import state from 'sweetalert/typings/modules/state';
export default function NavBarCategoty({selected,setSelected,maDanhMuc,maDanhMucClick}) {

    const [isActive,setIsActive] = useState(false);

    const [category,setCategory] = useState({
        danhMuc:[],
        choose:"",
        optionChose:"Choose One"
    })

    

    const dispatch = useDispatch();

    const idCategory = useSelector(state => state.CategoryReducer.maDanhMuc);
    const nameCategory = useSelector(state => state.CategoryReducer.tenDanhMuc);

 

    useEffect(() => {
        danhMucKhoaHocService.LoadDanhMuc().then(res => {
            setCategory({...category,danhMuc:res.data})
        })
        .catch(err => {
            console.log(err.response.data)
        })
    },[])



    return (
        <div className='nav-bar-category'>
            <div className="dropdown">
                <div className='dropdown-btn' onClick={(e) => {
                    setIsActive(!isActive)
                }}>
                    {maDanhMucClick}
                    <i class="fa fa-angle-down"></i>
                </div>

                {isActive && (<div className='dropdown-content'>
                {category.danhMuc.map(option => (
                    <div onClick={(e) => {
                        setCategory({...category,choose:option.maDanhMuc,optionChose:option.tenDanhMuc})
                        setIsActive(false);
                        
                        window.location.replace(`/danhMuc/${option.maDanhMuc}`)
                    }} className='dropdown-item'>
                        {option.tenDanhMuc}
                    </div>
                ))}
            </div>)}
            </div>
        </div>
    )
}
