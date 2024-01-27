import React from 'react';
import './sliderController.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addSlider, deleteSlide } from '../../redux/action/dashboard';
import { useEffect } from 'react';
import { useState } from 'react';

const SliderController = () => {

    const dispatch = useDispatch();

    const [slideNo, setSlideNo] = useState();
    const [slideText, setSlideText] = useState();
    const [slideImage, setSlideImage] = useState([]);


    const submitHandler = (e) => {

        e.preventDefault();

        addSlider(dispatch, slideNo, slideText, slideImage);

        e.target.reset();

    };

    const deleteHandler = async (no) => {

        deleteSlide(dispatch, no);

    };


    return (
        <div>

            <div className="sliderWindow">


                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />

                        <div>
                            <button onClick={() => setSlideNo(1)}>Upload</button>
                            <button onClick={() => deleteHandler(1)} >Delete</button>
                        </div>
                    </form>

                </div>



                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(2)}>Upload</button>
                            <button onClick={() => deleteHandler(2)} >Delete</button>
                        </div>
                    </form>

                </div>


                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(3)}>Upload</button>
                            <button onClick={() => deleteHandler(3)} >Delete</button>
                        </div>

                    </form>

                </div>




                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(4)}>Upload</button>
                            <button onClick={() => deleteHandler(4)} >Delete</button>
                        </div>
                    </form>

                </div>





                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(5)}>Upload</button>
                            <button onClick={() => deleteHandler(5)} >Delete</button>
                        </div>

                    </form>

                </div>





                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            <img htmlFor="uploadBtn" src="slide1.jpg" alt="" />
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(6)}>Upload</button>
                            <button onClick={() => deleteHandler(6)} >Delete</button>
                        </div>

                    </form>

                </div>


            </div>


        </div>
    );
};

export default SliderController;