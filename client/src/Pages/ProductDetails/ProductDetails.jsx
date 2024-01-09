import React, { useState } from 'react';
import './productDetails.scss';
import { AiFillHeart } from "react-icons/ai";

const ProductDetails = () => {

    const productPhotoArray = ['plant.jpg', 'slide1.jpg', 'slide2.jpg', 'plant.jpg'];
    const [productLargerPhoto, setProductLargerPhoto] = useState(0);

    const [tabs, setTabs] = useState([true, false, false]);


    const setTrue = (index) => {
        setTabs((pre) => { return pre.map((tab, i) => (i == index ? true : false)); });

    };


    const [orderQty, setOrderQty] = useState(1);

    const countPlus = () => {
        setOrderQty(orderQty + 1);
    };


    const countMinus = () => {
        if (orderQty === 1) {
            return setOrderQty(1);

        }
        setOrderQty(orderQty - 1);
    };

    return (
        <div className='ProductDetailsWindow'>
            <div className="ProductDetails">
                <div className="left">

                    <div className="procutsPhotos">
                        <div className="productPhoto">
                            {/* <img src="slide1.jpg" alt="photo" /> */}
                            <img src={productPhotoArray[productLargerPhoto]} alt="photo" />


                        </div>

                    </div>


                    <div className="photoArrayBar">
                        <div className="photosArray">

                            {
                                productPhotoArray.map((i, index) => {
                                    return <div className="arrayPhoto" key={index} onClick={() => setProductLargerPhoto(index)} >
                                        <img src={productPhotoArray[index]} alt="photo" />

                                    </div>;
                                })

                            }


                        </div>
                    </div>

                </div>


                <div className="right">


                    <div className="productName">
                        <p>Dummy Prodct 15</p>
                    </div>
                    <div className="isStock">
                        <span>In Stock</span>
                    </div>

                    <div className="productPrice">
                        <span>$50.00</span>
                    </div>

                    <div className="productDetails">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, aliquam ut. Eos soluta dolores fugiat molestias ut ipsam harum consequuntur corporis suscipit, quia obcaecati enim facilis earum sint fuga at asperiores officia blanditiis saepe explicabo quo quam esse commodi amet? Obcaecati, officiis maxime nostrum cupiditate veritatis fuga mollitia dolore natus consectetur alias dolorum accusamus debitis minus quibusdam ullam iure dolorem suscipit.</p>
                    </div>

                    <div className="QtyAndATB">
                        <div className="productQty">
                            <span onClick={countMinus}>&lt;</span>
                            <span>{orderQty}</span>
                            <span onClick={countPlus}>&gt;</span>
                        </div>

                        <div className="AddtoBag">
                            <p>ADD TO BAG</p>
                        </div>
                    </div>

                    <div className="AddtoWishList">
                        <span><AiFillHeart /></span>
                        <p>ADD TO WISH LIST</p>
                    </div>

                    <div className="paymentMethods">
                        <img src="PM.png" alt="" />
                    </div>

                    <div className="AboutProduct">

                        <div>
                            <span>SKU:</span>
                            <span>Categories:</span>
                            <span>Tags:</span>
                        </div>

                        <div>
                            <p>SP_052</p>
                            <p style={{ color: ' rgb(109, 109, 109)' }}>Decor , Home Decro , Textiles & rugs , Art & Prints, Curtains & blinds, Plants Decor </p>
                            <p >simple </p>
                        </div>

                    </div>



                </div>
            </div>


            {/* Bottom Part of Product WIndow */}
            <div className="productInformation">
                <div className="productInfoBar">
                    <p onClick={() => setTrue(0)}>Details</p>
                    <p onClick={() => setTrue(1)}>More Information</p>
                    <p onClick={() => setTrue(2)}>Reviews</p>
                </div>


                {/* Details  */}

                {
                    tabs[0] && <div className="productFullDetails">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, mollitia illum! Ab sed dolor quos explicabo dolore mollitia nam sapiente accusamus voluptate? Odit amet velit aut tenetur, nihil non consequuntur optio cupiditate, voluptatibus, perferendis error suscipit similique sapiente quod placeat. Sequi ut qui dolorum delectus, repellendus sapiente adipisci, fugiat laudantium blanditiis facere quis amet quam dicta culpa libero cum quisquam. Animi quos excepturi minus libero minima quaerat quo nostrum et alias, deserunt inventore maxime. Laudantium totam sint quam id numquam expedita cum. Necessitatibus suscipit ut esse accusamus unde blanditiis expedita est eius accusantium veniam, nulla deleniti maiores enim ea tempore, similique architecto, nam dolores deserunt aliquid. Quo laboriosam blanditiis labore quam, sint ullam a minima eum explicabo, atque fuga odit!
                    </div>
                }


                {/* More Informaiton  */}

                {
                    tabs[1] && <div className="MoreInforamtionInfo">


                        <div className="MoreInforamtionInfoHeading">
                            <p>Manufacturer</p>
                            <p>Color</p>
                            <p>Size</p>

                        </div>

                        <div className="MoreInforamtionInfoDetails">
                            <p>Aramni</p>
                            <p>Yellow</p>
                            <p>30</p>

                        </div>



                    </div>
                }


                {/* Reviews */}


                {
                    tabs[2] && <div className="productReviewsForm">
                        <div>
                            <h1>You're reviewing</h1>
                            <p>Dummy Product 15</p>
                        </div>

                        <form action="">
                            <div>

                                <p>Nickname</p>
                                <input type="text" />

                            </div>


                            <div>

                                <p>Summary</p>
                                <input type="text" name="" id="" />

                            </div>

                            <div>
                                <p>Review</p>
                                <textarea name="" id="" cols="40" rows="6"></textarea>
                            </div>

                            <button type='submit'>SUBMIT REVIEW</button>

                        </form>
                    </div>
                }




            </div>

        </div>
    );
};

export default ProductDetails;