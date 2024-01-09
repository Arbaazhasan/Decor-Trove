import React, { useEffect, useState } from 'react';
import './slider.scss';

const Slider = () => {

    // Slider 
    const bgArray = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
    const [count, setCount] = useState(0);


    // Back Slide
    const backSLide = () => {
        setCount(count + 1);
        if (count === 2) {
            return setCount(0);
        }
    };

    // Forwad Slide
    const forwadSlide = () => {

        setCount(count - 1);
        if (count === 0) {
            return setCount(2);
        }
    };


    return (
        <div>
            <div className="slider" style={{ backgroundImage: `url('${bgArray[count]}')` }}>

                <div className="leftSlider" onClick={backSLide}><span> &lt; </span></div>
                <div className="sliderContetn">
                    <span>Decor Trove</span>
                    <h1>Art of living stylishly.</h1>
                    <button>shop Now</button>
                </div>
                <div className="rightSlider" onClick={forwadSlide}> &gt;</div>

            </div>
        </div>
    );
};

export default Slider;