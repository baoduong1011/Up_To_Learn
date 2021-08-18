import React from 'react'

export default function Footer() {
    return (
        <div className='footer-main'>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-4 col-sm-6">
                            <h1>About Us</h1>
                            <p className='text-description'>Join millions of learners from around the world already learning on Udemy. Find the right instructor for you. Choose from many topics, skill levels, and languages. Over 130,000 Courses</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <h1>Contact us</h1>

                            <ul className='label-contact'>
                                <li><a href="#"><i class="fa fa-map-marker" style={{color:'red'}}></i>    Số 3 , Hai Bà Trưng , Phường 1, Thành phố Bến tre , tỉnh Bến Tre </a></li>

                                <li><a href='#'><i class="fa fa-phone" style={{color:'wheat'}}></i></a> +84345765272</li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <h1>Write something</h1>
                            <div className='box'>
                              
                                <form>
                                    <input type='text' name="" placeholder="Type..."/>

                                    <input type='submit' name="" value="SEND" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
