import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../pages/Productdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { singleproductview } from "../redux/slices/productslice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Productdetails() {
 
  const { id } = useParams(); //destructure

  // const[productdetail,setProductdetail] = useState([]);
  // const url =`http://localhost:2000/product/productdetails/${id}`
  // console.log(productdetail);
  const { singleproduct, loading } = useSelector((state) => state.productview);
  console.log(singleproduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleproductview(id));
    // axios.get(url).then((response)=>{
    //   setProductdetail(response.data.Product_details)
    //   console.log(response.data.Product_details);
    // })
  }, []);


  const token = localStorage.getItem("token");
  const add = (cart) => {
    const add_to_cart = {
      product_id: cart,
    };

    axios.post(`http://localhost:2000/cart/add`, add_to_cart, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response)=>{
      console.log(response);
      toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    })
  };

  return (
    <>
    <ToastContainer/>
      <div class="how-section1">
        <div class="row">
          <div class="col-md-6 how-img">
            <img
              src={`/images/${singleproduct.image}`}
              class="rounded-circle img-fluid"
              alt="cccc"
              height="250px"
              width="250px"
            />
          </div>

          <div class="col-md-6">
            <h4>{singleproduct.productname}</h4>
            <h4 class="subheading">{singleproduct.category}</h4>
            <p class="text-muted">{singleproduct.description}</p>
            <p>{singleproduct.price}</p>

            <a
              href={`/editproduct/${singleproduct._id}`}
              class="btn btn-warning btn-lg active"
              role="button"
              aria-pressed="true"
            >
              EDIT
            </a>
            <a
              class="btn btn-warning  btn-lg active"
              role="button"
              aria-pressed="true"
              id="deletebtn"
              onClick={() => {
                add(singleproduct._id);
              }}
            >
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
