import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';
export default function Serviceform() { 
  const [file, setFile] = useState("");

  const [serviceform, setServiceform] = useState({     //store all data
    category: "",
    nameofservice: "",                                        //default set as
    description: "",
    price: "",
    image:""
  });

  const inputChange = (event) => {
    // data entered->input
    const { name, value } = event.target;
    console.log(event.target.value);
    setServiceform({ ...serviceform, [name]: value });
  };



  const [formError, setFormError] = useState({});
  console.log(formError);
  const validate = (values) => {
    var error = {};

    if (!values.category) {
      //condition is checked ,providing a key ex:
      error.category = "Select category";
    }
    if (!values.nameofservice) {
      error.nameofservice = "Enter the nameofservice";
    }
    if (!values.description) {
      error.description = "Enter the description";
    }
    if (!values.price) {
      error.price = "Enter the price";
    }
    if (!values.image) {
      error.image = "Choose image";
    }
    return error;
  };



  const submit = (event) => {
    event.preventDefault();
    setFormError(validate(serviceform)); //function validate is called with service parameters
    if (Object.keys(formError).length == 0) {
      
      const data = new FormData();
      const filename = file.name
      data.append("filename",filename)
      data.append("file",file)
      data.append("nameofservice",serviceform.nameofservice)
      data.append("category",serviceform.category)
      data.append("description",serviceform.description)
      data.append("price",serviceform.price)
      data.append("image",serviceform.image)
      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
      axios
        .post("http://localhost:2000/employee/add-service",data)
        .then((response) => {
          console.log(response.data);
          toast.success(response, {
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
          console.log(error);
          toast.error(error, {
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

  console.log(serviceform);

  return (
    <>
      <ToastContainer />
      <div class="productSection" id="body">
        <div class="info">
          <img
            src="../images/productform.avif"
            height="610px"
            width="500px"
            alt="sfd"
          ></img>
        </div>
        <form action="#" class="productform" name="productform">
          <h2 id="addservices">ADD SERVICES</h2>
          <ul class="noBullet">
            <li>
              <label for="category"></label>
              <select
                class="inputFields"
                style={{ borderColor: formError.category ? "red" : "" }}
                id="category"
                name="category"
                onClick={() => {
                  setFormError({ ...formError, category: "" });
                }}
                onChange={inputChange}
              >
                <option>Category</option>
                <option value="Hair">Hair</option>
                <option value="Makeup">Makeup</option>
                <option value="Brow">Brow</option>
                <option value="Nails">Nails</option>
                <option value="Cosmetology">Cosmetology"</option>
              </select>
            </li>

            <li>
              {/* <label for="name"></label> */}
              <input
                type="text"
                class="inputFields"
                id="nameofservice"
                name="nameofservice"
                onClick={() => {
                  setFormError({ ...formError, nameofservice: "" });
                }}
                onChange={inputChange}
                placeholder="nameofservice"
              />
              <span style={{ color: formError.nameofservice ? "red" : "" }}>
                {formError.nameofservice}
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
                  setServiceform({
                    ...serviceform,
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
              {/* <label for="description"></label> */}
              <input
                type="text"
                class="inputFields"
                id="description"
                name="description"
                onClick={() => {
                  setFormError({ ...formError, description: "" });
                }}
                onChange={inputChange}
                placeholder="Description"
              />
              <span style={{ color: formError.description ? "red" : "" }}>
                {formError.description}
              </span>
            </li>

            <li>
              {/* <label for="price"></label> */}
              <input
                type="text"
                class="inputFields"
                id="price"
                name="price"
                onClick={() => {
                  setFormError({ ...formError, price: "" });
                }}
                onChange={inputChange}
                placeholder="Price"
              />
              <span style={{ color: formError.price ? "red" : "" }}>
                {formError.price}
              </span>
            </li>

            <li id="center-btn">
              <input
                type="submit"
                id="add-btn"
                name="add"
                onClick={submit}
                value="ADD"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
