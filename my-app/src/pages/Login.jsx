import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginform } from "../redux/slices/loginslice";


export default function Login() {
  const navigate = useNavigate();
 

  const [input, setInput] = useState({           //store all data
    username: "",                               //default set as
    password: "",
  });

  const inputChange = (event) => {             // data entered->input
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const [formError, setFormError] = useState({});
  console.log(formError);

  const validate = (values) => {
    var error = {};

    if (!values.username) {
      error.username = "Enter username";
    }
    if (!values.password) {
      error.password = "Enter password";
    }

    return error;
  };

  const{login,loading} = useSelector((state)=>state.commonlogin)
      console.log(login);
  const dispatch=useDispatch()

  const submit = (e) => {
    e.preventDefault();
    setFormError(validate(input));
    if (Object.keys(formError).length == 0) 
    {

      dispatch((loginform(input)))

      // axios
      //   .post("http://localhost:2000/login", input)
      //   .then((response) => {
      //     console.log(response);
          
      //     if (response.data.user_role === "2") {
      //       navigate("/userhomepage");
      //       // localStorage.setItem("loginID", response.data.details.loginID);
      //       // localStorage.setItem("userID", response.data.details.userID);
      //       localStorage.setItem("Role", response.data.user_role);
      //     //   localStorage.setItem("Name", response.data.details.Name);
      //     //   navigate("/userhomepage"); //user
      //     } 
      //     else if (response.data.user_role === "3") {
      //       navigate("/employeehomepage");
      //       localStorage.setItem("Role", response.data.user_role);

      //     //   localStorage.setItem("loginID", response.data.details.loginID);
      //     //   localStorage.setItem(
      //     //     "employeeID",
      //     //     response.data.details.employeeID
      //     //   );
      //     //   localStorage.setItem("Role", response.data.details.Role);
      //     //   localStorage.setItem(
      //     //     "EmployeeName",
      //     //     response.data.details.EmployeeName
      //     //   );
      //     //   navigate("/employeehomepage");
      //     // } else {
      //     //   navigate("/login");
      //     }

      //   })
      //   .catch((error) => {
      //     console.log(error.response.data.message);
      //     toast.error(error.response.data.message, {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   });
        // });
    }
  };

  //useeffect use aki conditions kodukka navigate

  useEffect(()=>{
    const role = localStorage.getItem("role");
    if(role==="2"){
      navigate('/userhomepage')
    }
    else if(role==="3"){
      navigate('/employeehomepage')
    }
    else{
      navigate('/login')
    }
  },[login])

 

  console.log(input);

  return (
    <>
      <ToastContainer />
      <section class="signup">
        <div class="container">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">LOGIN</h2>
              <form method="POST" class="register-form" id="register-form">
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    onClick={() => {
                      setFormError({ ...formError, username: "" });
                    }}
                    onChange={inputChange}
                    name="username"
                    id="name"
                    placeholder="Enter Your Username"
                  />
                  <span style={{ color: formError.username ? "red" : "" }}>
                    {formError.username}
                  </span>
                </div>

                <div class="form-group">
                  <label for="password">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="text"
                    onClick={() => {
                      setFormError({ ...formError, password: "" });
                    }}
                    onChange={inputChange}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <span style={{ color: formError.password ? "red" : "" }}>
                    {formError.password}
                  </span>
                </div>

                <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    class="agree-term"
                  />
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="#" class="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="Login"
                    id="signup"
                    class="form-submit"
                    value="Login In"
                    onClick={submit}
                  />
                </div>
              </form>
            </div>
            <div class="signup-image">
              <figure>
                <img src="../images/register.avif" alt="sing up image" />
              </figure>
              <a class="signup-image-link">Don't have an account?</a>
              <a href="#" class="signup-image-link">
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
