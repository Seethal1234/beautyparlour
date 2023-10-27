import React, { useEffect } from "react";
import "../pages/userorder.css";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { booked_details } from "../redux/slices/productslice";
import axios from "axios";
export default function Userorder() {
  const { id } = useParams();

  const { myorders } = useSelector((state) => state.productview);
  console.log(myorders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booked_details(id));
  }, []);

  const token = localStorage.getItem("token");
  const booking = (book_product) => {
    const product = {
      id: book_product,
    };

    axios.get(`http://localhost:2000/productbook/view-booked`,product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };


  return (
    <>
      <Menu />

      <div class="card mt-50 mb-50 ">
        <div class="col d-flex">
          <span id="orderno">CHERIE</span>
        </div>
        <div class="gap">
          <div class="col-2 d-flex mx-auto"> </div>
        </div>
        <div class="title mx-auto">Your Orders</div>
        <div class="main" id="maintomain">
          {/* <span id="sub-title">
            <p><b>Payment Summary</b></p>
        </span> */}
          <div class="row row-main">
            <div class="col-3">
              {" "}
              <img class="img-fluid"
               src={`/images/${myorders.image}`} />
            </div>
            <div class="col-6">
              <div class="row d-flex">
                <p>
                  <b>{myorders.productname}</b>
                </p>
              </div>
              <div class="row d-flex">
                <p class="text-muted">placed on:</p>
                <p class="text-muted">Delivery on:</p>
              </div>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <p>
                <b>{myorders.price}</b>
              </p>
            </div>
            <button class="btn d-flex mx-auto"> Track your order </button>
            <hr></hr>
          </div>

          {/* <hr></hr> */}
          {/* <div class="total">
           <div class="row">
                <div class="col"> <b> Total:</b> </div> 
               <div class="col d-flex justify-content-end"> <b>$847.95</b> </div>
            </div> <button class="btn d-flex mx-auto"> Track your order </button>
 </div> */}
        </div>
      </div>
    </>
  );
}
