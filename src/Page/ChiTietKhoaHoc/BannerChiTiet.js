import React from 'react'

export default function BannerChiTiet() {
    return (
        <div className='banner-chi-tiet-course'>
            <div className='container text-center'>
                <div className='row text-center'>
                    <div className='col-md-3'>
                        <div className='text-1'>
                            <h1><i class="fa fa-school"></i></h1>
                        </div>
                        <div className='text-2'>
                            <h6 className='h6-text1'>Duration</h6>
                            <h6>4 weeks</h6>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='text-1'>
                            <h1><i class="fa fa-graduation-cap"></i></h1>
                        </div>

                        <div className='text-2'>
                            <h6 className='h6-text1'>Weekly study</h6>
                            <h6>3 hours</h6>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='text-1'>
                            <h1><i class="fa fa-globe"></i></h1>
                        </div>

                        <div className='text-2'>
                            <h6 className='h6-text1'>100% online</h6>
                            <h6>Learn at your own pace</h6>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='text-1'>
                            <h1><i class="fa fa-gem"></i></h1>
                        </div>

                        <div className='text-2'>
                            <h6 className='h6-text1'>Extra Benefits</h6>
                            <h6>From $59</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
