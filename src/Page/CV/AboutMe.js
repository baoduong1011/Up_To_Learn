import React from 'react'
import { useSelector } from 'react-redux'
// import  from "../../Redux/reducers/CoursesReducer";




export default function AboutMe() {

    const maKhoaHoc = useSelector(state => state.CoursesReducer.maKhoaHoc);

    console.log(maKhoaHoc);

    return (
        <div className="about-me-main">
            <div className="main-container">
               <div className='left_side'>
                    <div className="profileText">
                        <div className='imgBx'>
                            <img src="img/bd.jpg" />
                        </div>
                        <h2>Duong Tuan Bao <br/> <span>Web Developer</span></h2>
                    </div>

                    <div className="contactInfo">
                        <h3 className='title'>Contact Info</h3>
                        <ul>
                            <li>
                                <span className='icon'><i class="fa fa-phone"></i></span>
                                <span className='text'>0345765272</span>
                            </li>
                            <li>
                                <span className='icon'><i class="fa fa-envelope"></i></span>
                                <span className='text'>19520017@gm.uit.edu.vn</span>
                            </li>
                            <li>
                                <span className='icon'><i class="fab fa-facebook"></i></span>
                                <span className='text'>Bảo Dương</span>
                            </li>
                            <li>
                                <span className='icon'><i class="fab fa-github"></i></span>
                                <span className='text'>baoduong1011</span>
                            </li>
                        </ul>
                    </div>

                    <div className="contactInfo education">
                        <h3 className='title'>Education</h3>
                        <ul>
                            <li>
                               <h6>2016-2019</h6>
                               <h5>BenTre High School for Gifted Students</h5>
                            </li>
                            <li>
                            <h6>2019-2020</h6>
                            <h5>Top 3 Information Security Industry</h5>
                         </li>
                        </ul>
                    </div>

                    <div className='contactInfo language'>
                        <h3 className='title'>Languages</h3>
                        <ul>
                            <li>
                                <span className='text'>C++ (C-plus-plus)</span>
                                <span className='percent'>
                                    <div style={{width:'60%'}}></div>
                                </span>
                            </li>

                            <li>
                                <span className='text'>C# (.NET)</span>
                                <span className='percent'>
                                <div style={{width:'70%'}}></div>
                                </span>
                            </li>

                            <li>
                                <span className='text'>Java</span>
                                <span className='percent'>
                                <div style={{width:'65%'}}></div>
                                </span>
                            </li>

                            <li>
                            <span className='text'>Javascript</span>
                            <span className='percent'>
                            <div style={{width:'75%'}}></div>
                            </span>
                        </li>
                        </ul>
                    </div>
               </div>

               <div className='right_side'>
                    <div className='about'>
                        <h2 className='title2'>Profile</h2>
                        <p>Third prize of the 2nd WebDev Hackathon with the topic:
                        building an online learning website during the epidemic season. <br/> <br/>
                        Skills in using Github and some operating systems Popular: Kali,Ubuntu <br/> <br/> 
                        Top 2 of the Information Security industry in 2019 <br/> <br/> 
                        Participate in programming tournaments organized by the school: ACM,... <br/> <br/> 
                        Class Trainer for Advanced Maths and Programming 
                        </p>
                    </div>

                    <div className='about'>
                        <h2 className='title2'>Experience</h2>
                        <div className='box'>
                            <div className='year_company'>
                                <h6>2021 - Present</h6>
                                <h6>Company Name</h6>
                            </div>
                            <div className='text'>
                                <h5>Senior UX Designers</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>


                        <div className='box'>
                            <div className='year_company'>
                                <h6>2016 - 2017</h6>
                                <h6>Company Name</h6>
                            </div>
                            <div className='text'>
                                <h5>Senior UX Designers</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting. </p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='year_company'>
                                <h6>2017 - 2018</h6>
                                <h6>Company Name</h6>
                            </div>
                            <div className='text'>
                                <h5>Senior UX Designers</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting. </p>
                            </div>
                        </div>

                        


                        
                    </div>

                    <div className='about skills'>
                        <h2 className='title2'>Professional Skills</h2>
                        <div className="box">
                            <h5>HTML</h5>
                            <div className='percent'></div>
                        </div>

                         <div className="box">
                            <h5>CSS</h5>
                            <div className='percent'>
                                <div style={{width:'80%'}}></div>
                            </div>
                        </div>

                         <div className="box">
                            <h5>React</h5>
                            <div className='percent'></div>
                        </div>

                         <div className="box">
                            <h5>Angular</h5>
                            <div className='percent'></div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
