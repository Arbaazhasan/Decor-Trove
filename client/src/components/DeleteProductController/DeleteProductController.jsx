import React from 'react';
import './deleteProductController.scss'

const DeleteProductController = () => {
    return (
        <div>
            <div className="searchProductWindow">

                <form action="">
                    <input type="text" placeholder='Enter the item no.' />
                    <button>Search</button>
                </form>


                <div className="searchedItemList">
                    <div className="searchedItemHeader">
                        <p>index</p>
                        <p>item No.</p>
                        <p>Name</p>
                        <p>Desciption</p>
                        <p>Color</p>
                        <p>price</p>
                        <p>Category</p>
                        <p>Available</p>
                        <p>Image</p>
                    </div>

                    <div className="searchedItem">



                        <div>
                            <p><span>1</span></p>
                            <p><span>SKU-001</span></p>
                            <p><span>Floral BOwl</span></p>
                            <p><span>Lorem ipsum dolor sit amet.</span></p>
                            <p><span>Copper</span></p>
                            <p><span>$12.55</span></p>
                            <p><span>Kitchen Ware</span></p>
                            <p><span>100 pcs.</span></p>
                            <p>
                                <img src="slide1.jpg" alt="error" />
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="productDeleteBtn">
                <button>Delete</button>
            </div>

        </div>
    );
};

export default DeleteProductController;