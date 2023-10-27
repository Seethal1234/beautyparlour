import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Viewproduct.css";
import {useSelector,useDispatch} from 'react-redux'
import { view_product } from "../redux/slices/productslice";
import Loader from "./Loader";

export default function Viewproduct() {
 
const dispatch = useDispatch()                                                //to view data
const {viewproduct,loading} = useSelector((state)=>state.productview)
  useEffect(() => {
   dispatch(view_product())
  }, []);                                                                    //dependency array

console.log(viewproduct,loading);

  return (
    <>
      <section>
        <div class="container">
        <div class="row g-4 py-5">
          {loading ? <Loader/> :
           viewproduct.map((item) => (
            <div id ="productview" class="col-md-4">
              <Link to={`/productdetails/${item._id}`}>
                <div class="product-single-card">
                  <div class="product-top-area">
                    <div class="product-discount">$55.</div>

                    <div class="product-img">
                      <div class="first-view">
                        <img
                          src={`/images/${item.image}`}
                          alt="logo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="hover-view">
                      <img
                          src={`/images/${item.image}`}
                          alt="logo"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="sideicons">
                      <button class="sideicons-btn">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="sideicons-btn">
                        <i class="fa-solid fa-eye"></i>
                      </button>
                      <button class="sideicons-btn">
                        <i class="fa-solid fa-heart"></i>
                      </button>
                      <button class="sideicons-btn">
                        <i class="fa-solid fa-shuffle"></i>
                      </button>
                    </div>
                  </div>
                  <div class="product-info">
                    <h6 class="product-category">
                      <div>{item.category}</div>
                    </h6>
                    <h6 class="product-title">
                    <div>{item.productname}</div>
                    </h6>
                    <div class="d-flex align-items-center">
                      <div class="review-star me-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>

                      <span class="review-count">(13)</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center py-2">
                      <div class="old-price">$50.45</div>
                      <div class="new-price">{item.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
          }
           
            
          </div>
        </div>
      </section>
    </>
  );
}
