import React from 'react';
import './addproduct.scss';

const AddProduct = () => {
    return (
        <div>

            <div className="addProduct">
                <form action="">
                    <div>

                        <div>
                            <p>Item No.</p>
                            <input type="text" />
                        </div>



                        <div>
                            <p>Name</p>
                            <input type="text" />
                        </div>


                        <div>
                            <p>Desciption</p>
                            <input type="text" />
                        </div>




                        <div>
                            <p>Color</p>
                            <input type="text" />
                        </div>




                        <div>
                            <p>Price</p>
                            <input type="text" />
                        </div>




                        <div>
                            <p>Category</p>
                            <input type="text" />
                        </div>




                        <div>
                            <p>Available</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>Image</p>
                            <input type="file" />
                        </div>



                    </div>

                    <div className="productPhotos">

                        <div>

                            <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>

                            <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>                    <div >

                                <div>
                                    <img src="slide1.jpg" alt="" />

                                </div>
                            </div>
                        </div>


                    </div>



                    <button>Add</button>

                </form>


            </div>


        </div>
    );
};

export default AddProduct;