import React from 'react'
import Video1 from './video1.mp4';
export default function  () {
    return (
        <div className='banner-category-main'>
            <div className='backgroundIn'>
                <video width="100%" height="30%" autoPlay muted loop>
                    <source src={Video1} type="video/mp4" />
                </video>

                <div className='banner-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <h1>ADVENTURE AWAITS</h1>
                                <h3>What are you waiting for?</h3>
                            </div>

                            <div className='col-md-12 text-center m-4'>
                                <button className='getStart'>GET STARTED</button>

                                <button className='register'>REGISTER <i class="fa fa-pen"></i> </button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
