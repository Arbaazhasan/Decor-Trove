import React from 'react';
import './updateProductController.scss';

const UpdateProductController = () => {
    return (
        <div>

            <div className="addProduct">

                <div>

                    <form action="" className='updateProductSearchBar' >
                        <input type="text" placeholder='Enter the item No.' />
                        <button>Search</button>
                    </form>
                </div>


                <form action="" >
                    <div >

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

                    <div className="productPhotos" style={{ height: "11rem" }}>

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

export default UpdateProductController;