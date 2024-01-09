import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <div>
            <div className="bannerWindow">
                <div className="bannerLine">
                    <div>
                        <img src="worldwide.png" alt="img" />
                        <p>WORLDWIDE SHIPPING</p>
                    </div>

                    <div>
                        <img src="quality.png" alt="img" />
                        <p>QUALITY INSPECTIONS</p>
                    </div>

                    <div>
                        <img src="feedback.png" alt="img" />
                        <p>99% POSITIVE FEEDBACKS</p>
                    </div>

                </div>

                <div className="bannerAdds">

                    <div className="bannerAdd">
                        <div className="bannerImg">
                            <img src="add2.jpg" alt="" />
                        </div>

                        <div className="bannerContent">
                            <p>Sale of 50%</p>
                            <span>Show Now</span>
                        </div>
                    </div>




                    <div className="bannerAdd">
                        <div className="bannerImg">
                            <img src="add2.jpg" alt="" />
                        </div>

                        <div className="bannerContent">
                            <p>Sale of 50%</p>
                            <span>Show Now</span>
                        </div>
                    </div>



                </div>
            </div>

        </div >
    );
};

export default Banner;