import React from 'react';
import './deleteProductController.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getSearchProduct, imageViewerLoader } from '../../redux/action/dashboard';
import { useState } from 'react';

const DeleteProductController = () => {

    const [searchItem, setSearchItem] = useState();

    const dispatch = useDispatch();

    const { product } = useSelector(state => state.dashboard);

    const submitHandler = (e) => {
        e.preventDefault();
        getSearchProduct(dispatch, searchItem);

    };

    const deleteHandler = () => {
        deleteProduct(dispatch, product._id);
    };


    const imageViewerHandler = () => {
        imageViewerLoader(dispatch, { imageArray: product.images });
    };

    return (
        <div>
            <div className="searchProductWindow">

                <form action="" onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter the item no.' onChange={(e) => setSearchItem(e.target.value)} />
                    <button>Search</button>
                </form>


                <div className="searchedItemList" style={{ "overflow": "hidden" }}>
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

                        {
                            product.pNo &&

                            <div >
                                <p><span>{1}</span></p>
                                <p><span>{product.pNo}</span></p>
                                <p><span>{product.name}</span></p>
                                <p><span>{product.desc}</span></p>
                                <p><span>{product.color}</span></p>
                                <p><span>{product.price}</span></p>
                                <p><span>{product.category}</span></p>
                                <p><span>{product.available}</span></p>
                                <p onClick={imageViewerHandler}>
                                    <img src={product.images[0].url} alt="error" />
                                </p>
                            </div>
                        }




                    </div>

                </div>

            </div>

            <div className="productDeleteBtn">
                <button onClick={deleteHandler}>Delete</button>
            </div>

        </div>
    );
};

export default DeleteProductController;