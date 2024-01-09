import React from 'react';
import './bannerController.scss';

const BannerController = () => {
    return (
        <div className='BannerController'>




            <div className="sliderBox">

                <div className="heading">
                    <h3>1 Banner Cover Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                    </label>
                </div>

                <form action="">
                    <input id='uploadBtn' hidden type="file" />
                    <input type="text" placeholder='Enter the Text' />
                    <button>Upload</button>
                </form>

            </div>






            <div className="sliderBox">

                <div className="heading">
                    <h3>1 Banner Front Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                    </label>
                </div>

                <form action="">
                    <input id='uploadBtn' hidden type="file" />
                    <input type="text" placeholder='Enter the Text' />
                    <button>Upload</button>
                </form>

            </div>






            <div className="sliderBox">

                <div className="heading">
                    <h3>2 Banner Cover Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                    </label>
                </div>

                <form action="">
                    <input id='uploadBtn' hidden type="file" />
                    <input type="text" placeholder='Enter the Text' />
                    <button>Upload</button>
                </form>

            </div>






            <div className="sliderBox">

                <div className="heading">
                    <h3>2 Banner Front Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                    </label>
                </div>

                <form action="">
                    <input id='uploadBtn' hidden type="file" />
                    <input type="text" placeholder='Enter the Text' />
                    <button>Upload</button>
                </form>

            </div>



        </div>
    );
};

export default BannerController;