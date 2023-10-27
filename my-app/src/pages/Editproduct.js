import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";

export default function Editproduct() {
  const { id } = useParams(); 

  const [editproductdetail, setEditproductdetail] = useState({}); 
  console.log(editproductdetail);

  const url = `http://localhost:2000/product/productdetails/${id}`;
  console.log(id);


  const [file, setFile] = useState("");
  // const [editform, setEditform] = useState({
  //   //store all data
  //   productname: "",
  //   price: "", //default set as
  //   category: "",
  //   description: "",
  //   image: "",   //only name of image
  // });
  // console.log(file, editform);

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setEditproductdetail(response.data.Product_details)
        })
      },[])



      const inputChange = (event) => {
        const { name, value } = event.target
        setEditproductdetail({ ...editproductdetail, [name]: value })
      }
 
      
      const [formError, setFormError] = useState({})
      console.log(formError);
      const validate = (values) => {
        var error = {}
    
        if (!values.productname) {
          error.productname = "Enter productname"
        }
        if (!values.price) {
          error.price = "Enter price"
        }
        if (!values.category) {
            error.category = "Enter category"
          }
          if (!values.description) {
            error.description = "Enter description"
          }
          if (!values.image) {
            error.image = "Enter image"
          }
        return error
      }
      
      const submit = (e) => {
        e.preventDefault()
        setFormError(validate(editproductdetail))
        if (Object.keys(formError).length == 0) {

          const data = new FormData();     //Formdata is used to add or store multiple data like array ,object inside object
          const filename=file.name  
          console.log(filename);      //inside filename name of file from file is kept
          data.append("name",filename)   //append is used to add data
          data.append("file",file)
          data.append("productname",editproductdetail.productname)
          data.append("price",editproductdetail.price)
          data.append("category",editproductdetail.category)
          data.append("description",editproductdetail.description)
          data.append("image",editproductdetail.image)
          data.append("_id",editproductdetail._id)
          
          
          axios.post('http://localhost:2000/product/update-product',data).then((response)=>{
          console.log(response.data);
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

        }).catch((error)=>{
            
          console.log(error);
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
        })
      }
  
    }
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
                placeholder="Product Name"
                onClick={() => { setFormError({ ...formError, productname: "" }) }} onChange={inputChange}
                value={ editproductdetail.productname}
                
              ></input>
              <span style={{ color: formError.productname ? "red" : "" }}>{formError.productname}</span>
            </li>

            <li>
              <label class="add" for="customFile"></label>
              <input
                type="file"
                name="image"
                class="inputFields"
                width="20px"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  setEditproductdetail({
                    ...editproductdetail,
                    image: event.target.files[0].name,
                  });
                }}
                onClick={() => {
                  setFormError({ ...formError, image: "" });
                }}
              
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
                placeholder="Price"
                onClick={() => { setFormError({ ...formError, price: "" }) }} onChange={inputChange}
                value={ editproductdetail.price}
              />
            </li>

            <li>
              {/* <label for="category"></label> */}
              <select id="category" name="category" onClick={() => { setFormError({ ...formError, category: "" }) }} onChange={inputChange} >
                <option>{ editproductdetail.category}</option>
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
                placeholder="Description"
                onClick={() => { setFormError({ ...formError, description: "" }) }} onChange={inputChange}
                value={ editproductdetail.description}
                
              />
            </li>

            <li id="center-btn">
              <input
                type="submit"
                id="add-btn"
                name="add"
                alt="UPDATE"
                value="UPDATE"
                onClick={submit}
              ></input>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
