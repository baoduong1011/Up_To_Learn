import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function TinTuc() {
    
    useEffect(() => {
        Aos.init({ duration: 3000, offset: 300 });
    }, [])

    return (
        <div className='news-main'>
            <div className='container'>
                <div className='row news-one'>
                    <div className='col-md-6 left-news'>
                        <img data-aos="fade-down-right" src="img/course.png" />
                    </div>

                    <div data-aos="fade-down-left" style={{ paddingLeft: '100px' }} className='col-md-6 right-news'>
                        <div className='course-text'>
                            <h1>Browse our top <br /> course</h1>
                            <div className='square'></div>
                            <p>Contrary to popular be belief, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <button className='common-btn'>View All Courses</button>
                            <div className='line'>
                                <span className='line-1'></span> <br />
                                <span className='line-2'></span> <br />
                                <span className='line-3'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='feature-news'>

                <div className='container'>
                    <h3 data-aos="flip-left" className='text-center p-5'>"Learning is not attained by chance"</h3>
                    <div className='row  text-center'>
                        <div data-aos="flip-up" className='col-md-4'>
                            <img src="img/pic-1.png" />
                            <div className='text-col'>
                                <h3>Learn Anywhere</h3>
                                <p>Switch between your computer, tablet or mobile device</p>
                            </div>
                        </div>

                        <div data-aos="flip-up" className='col-md-4'>
                            <img src="img/pic-2.png" />
                            <div className='text-col'>
                                <h3>Expert Teachers</h3>
                                <p>Learn from industry experts who are passionate about teaching</p>
                            </div>
                        </div>

                        <div data-aos="flip-up" className='col-md-4'>
                            <img src="img/pic-3.png" />
                            <div className='text-col'>
                                <h3>Unlimited Access</h3>
                                <p>Choose what you'd like to learn from our extensive subscription library</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-4 news-sign-up'>
                <div data-aos="zoom-in-left" style={{ paddingLeft: '100px' }} className='col-md-6 right-news'>
                    <div className='course-text'>
                        <h1>Sign up to join our <br /> learning community</h1>
                        <form>
                            <input type='text' placeholder="Enter Name" />
                            <input type='email' placeholder="Enter Email" />
                            <input type='password' placeholder="Enter Password" />
                            <div className='btn-box'>
                                <button className='common-btn mr-3'>Start Free</button>
                                <button className='common-btn'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='col-md-6 left-news'>
                    <img data-aos="zoom-in" src="img/contact.png" />
                </div>
            </div>
        </div>
    )
}
