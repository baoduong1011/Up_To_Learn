import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function PosterTrangChu() {
    useEffect(() => {
        Aos.init({ duration: 3000, offset: 300 });
    }, [])
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className="promo-title">BEST DIGITAL AGENCY</p>
                        <p>Subscribe Easy TuTorials Youtube Channel to watch more videos on website development. Digital Marketing, WordPress and Graphics. </p>
                        <a href="#"> <img src="img/play.png" className='play-btn' /> Watch Tutorials </a>
                    </div>

                    <div data-aos="fade-left" className='col-md-6 text-center'>
                        <img src="img/home2.png" className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className='row'>
            <img src='img/wave1.png' className='bottom-img' />
            </div>
        </div>
    )
}
