import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
export default function Productform() {

  const [file, setFile] = useState(""); // a usestate created to keep all data of file include size etc
  
 
  const [productform, setProductform] = useState({
    //store all data
    productname: "",
    price: "", //default set as
    category: "",
    description: "",
    image: "",   //only name of image
  });
  console.log(file, productform);

  const inputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setProductform({ ...productform, [name]: value });
  };

  const navigate= useNavigate()
  // const login = localStorage.getItem('id')
  //  useEffect(()=>{
  //   if(login==null){
  //   navigate('/login')}
  //  })

  const [formError, setFormError] = useState({});
  console.log(formError);
  const validate = (values) => {
    var error = {};
    if (!values.productname) {
      error.productname = "Enter product name";
    }
    if (!values.price) {
      error.price = "Enter product price";
    }
    if (!values.category) {
      error.category = "Enter product category";
    }
    if (!values.description) {
      error.description = "Enter product description";
    }
    if (!values.image) {
      error.image = "Choose image";
    }

    return error;
  };

  const submit = (event) => {
    event.preventDefault();
    setFormError(validate(productform));    //function validate is called with service parameters
    if (Object.keys(formError).length == 0) {

      
        const data = new FormData();     //Formdata is used to add or store multiple data like array ,object inside object
        const filename=file.name        //inside filename name of file from file is kept
        data.append("filename",filename)   //append is used to add data
        data.append("file",file)
        data.append("productname",productform.productname)
        data.append("price",productform.price)
        data.append("category",productform.category)
        data.append("description",productform.description)
        data.append("image",productform.image)
        

      axios
        .post("http://localhost:2000/admin/addproduct", data) //inside data all values stored
        .then((response) => {  
          console.log(response.data.message);
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


        .catch((error) => {
          console.log(error.response.data.message);
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  console.log(productform);

 
  return (
    <>
      <ToastContainer />
      <div class="productSection">
        <div class="info">
          <img
            src="../images/productform.avif"
            height="610px"
            width="500px"
            alt="fff"
          ></img>
        </div>
        <form action="#" method="POST" class="productform" name="productform">
          <h2 id="adding">ADD PRODUCT</h2>
          <ul class="noBullet">
            <li>
              <input
                type="text"
                class="inputFields"
                id="productname"
                name="productname"
                onChange={inputChange}
                onClick={() => {
                  setFormError({ ...formError, productname: "" });
                }}
                placeholder="Product Name"
              />
              <span style={{ color: formError.productname ? "red" : "" }}>
                {formError.productname}
              </span>
            </li>

            <li>
              <label class="add" for="customFile"></label>
              <input
                type="file"
                name="image"
                class="inputFields"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  setProductform({
                    ...productform,
                    image: event.target.files[0].name,
                  });
                }}
                onClick={() => {
                  setFormError({ ...formError, image: "" });
                }}
                width="20px"
              />
              <span style={{ color: formError.image ? "red" : "" }}>
                {formError.image}
              </span>
            </li>

            <li>
              <label for="price"></label>
              <input
                type="price"
                class="inputFields"
                id="price"
                name="price"
                onChange={inputChange}
                onClick={() => {
                  setFormError({ ...formError, price: "" });
                }}
                placeholder="Price"
              />
              <span style={{ color: formError.price ? "red" : "" }}>
                {formError.price}
              </span>
            </li>

            <li>
              <label for="category"></label>
              <select
                onChange={inputChange}
                id="category"
                name="category"
                onClick={() => {
                  setFormError({ ...formError, category: "" });
                }}
              >
                <span style={{ color: formError.category ? "red" : "" }}>
                  {formError.category}
                </span>
                <option>category</option>
                <option value="body">BODY</option>
                <option value="fragrance">FRAGRANCE</option>
                <option value="hair">HAIR</option>
                <option value="makeup">MAKEUP</option>
                <option value="skin">SKIN CARE"</option>
              </select>
            </li>

            <li>
              <label for="description"></label>
              <input
                type="description"
                class="inputFields"
                id="description"
                name="description"
                onChange={inputChange}
                onClick={() => {
                  setFormError({ ...formError, description: "" });
                }}
                placeholder="Description"
              />
              <span style={{ color: formError.description ? "red" : "" }}>
                {formError.description}
              </span>
            </li>

            <li id="center-btn">
              <input
                type="submit"
                id="add-btn"
                onClick={submit}
                name="add"
                alt="ADD"
                value="ADD"
              ></input>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
