import React from 'react';
import './Products.scss';
import { AiFillStar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProudct } from '../../redux/action/product';


const Products = () => {

    const { allProducts, productCategory } = useSelector(state => state.product);
    const disptach = useDispatch();

    const clickHandler = (id) => {
        getProudct(disptach, id);
    };


    useEffect(() => {
        // console.log(allProducts);

        // console.log(productCategory[0].Category)g;

    }, [allProducts, productCategory]);


    return (
        <>
            <Header />
            <div>
                <div className="ProductPage">
                    <div className="left">
                        <div className="header">
                            <p>Category</p>
                        </div>

                        <div className="productList">

                            {
                                productCategory && productCategory.map((i, index) => (
                                    <dl key={index} >
                                        <dt>+ {i.Category}</dt>
                                        {
                                            i.pNo.map((j, index) => (
                                                <dd key={index}>{j.name}</dd>

                                            ))
                                        }

                                    </dl>

                                ))
                            }

                            {/* <dl>
                                <dt>+ Door Bell</dt>
                                <dd>Brown</dd>
                                <dd>Iron</dd>
                                <dd>Iron</dd>


                                <dl>
                                    <dt>+ Pairs</dt>
                                    <dd>Two</dd>
                                    <dd>Three</dd>

                                </dl>
                            </dl> */}

                        </div>


                    </div>



                    <div className="right">
                        <div className="header">
                            <p>Plants</p>

                            <form action="">
                                <input type="text" placeholder='what are you looking for ?' />
                                <button><BsSearch /></button>
                            </form>
                        </div>


                        <div className="products">

                            {

                                allProducts && allProducts.map((i, index) => (

                                    <Link className="productWindow" to={`/productdetails/${i._id}`} key={index} onClick={() => clickHandler(i._id)}>
                                        <div className="productPhoto">
                                            <img src={i.images[0] && i.images[0].url} alt="error" />
                                        </div>
                                        <div className="nameAndPrice">
                                            <p>{i.name}</p>
                                            <span>₹{i.price}</span>
                                        </div>
                                        <div className="productingRateing">
                                            <span><AiFillStar /></span>
                                            <span><AiFillStar /></span>
                                            <span><AiFillStar /></span>
                                            <span><AiFillStar /></span>
                                            <span><AiFillStar /></span>
                                        </div>
                                    </Link>

                                ))

                            }


                        </div>

                    </div>
                </div>
            </div>

        </>

    );
};

export default Products;