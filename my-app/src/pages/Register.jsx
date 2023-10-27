// import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import {useSelector,useDispatch} from 'react-redux'
import { register } from '../redux/slices/registrationslice';

export default function Register() {
    const [input, setInput] = useState({                          //store all data
        name: '',                                                //default set as 
        address: '' ,
        phone: '',
        email:'',
        gender:'',
        password:'',
        username:''
        
      })
    
      const inputChange = (event) => {                       // data entered->input 
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
      }
    
      const [formError, setFormError] = useState({})
      console.log(formError);
    
    
      const validate = (values) => {
    
        var error = {}
    
        if (!values.name) {
          error.name = "Enter name"
        }
        if (!values.address) {
          error.address = "Enter address"
        }
        if (!values.phone) {
            error.phone = "Enter phone"
          }
          if (!values.email) {
            error.email = "Enter email"
          }
          if (!values.gender) {
            error.gender = "Enter gender"
          }
          if (!values.password) {
            error.password = "Enter password"
          }
          if (!values.username) {
            error.username = "Enter  username"
          }

        return error
    
      }
      
      const{registration} = useSelector((state)=>state.userreg)
      console.log(registration);
      const dispatch=useDispatch()
      const submit = (e) => {
        e.preventDefault()
        setFormError(validate(input))
        if (Object.keys(formError).length == 0) {

          dispatch((register(input)))

        //   axios.post('http://localhost:2000/register',input).then((response)=>{
        //   console.log(response.data.message);
        //   toast.success(response.data.message, {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });

        // }).catch((error)=>{
            
        //   console.log(error);
        //   console.log(error.response.data.message);
        //     toast.error(error.response.data.message, {
        //       position: "top-center",
        //       autoClose: 5000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //       theme: "light",
        //       });
        // })
      }
  
    }
      console.log(input)
  return (
    <>
    <ToastContainer />
      <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">REGISTER</h2>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" onClick={() => { setFormError({ ...formError, name: "" }) }} onChange={inputChange} name="name" id="name" placeholder="Enter Your Name"/>
                            <span style={{ color: formError.name ? "red" : "" }}>{formError.name}</span>
                        </div>
                        <div class="form-group">
                            <label for="address"><i class="zmdi zmdi-email"></i></label>
                            <input type="address" onClick={() => { setFormError({ ...formError, address: "" }) }} onChange={inputChange} name="address" id="address" placeholder="Enter Your Address"/>
                            <span style={{ color: formError.address ? "red" : "" }}>{formError.address}</span>

                        </div>
                        <div class="form-group">
                            <label for="phone"><i class="zmdi zmdi-lock"></i></label>
                            <input type="phone" onClick={() => { setFormError({ ...formError, phone: "" }) }} onChange={inputChange} name="phone" id="phone" placeholder="Enter Your Phone"/>
                            <span style={{ color: formError.phone ? "red" : "" }}>{formError.phone}</span>

                        </div>
                        <div class="form-group">
                            <label for="username"><i class="zmdi zmdi-lock"></i></label>
                            <input type="username" onClick={() => { setFormError({ ...formError, username: "" }) }} onChange={inputChange} name="username" id="username" placeholder="Enter Your username"/>
                            <span style={{ color: formError.username ? "red" : "" }}>{formError.username}</span>

                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="email" onClick={() => { setFormError({ ...formError, email: "" }) }} onChange={inputChange} name="email" id="email" placeholder="Enter Your Email"/>
                            <span style={{ color: formError.email ? "red" : "" }}>{formError.email}</span>

                        </div>
                        <div class="form-group">
                            <label for="gender"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="gender" onClick={() => { setFormError({ ...formError, gender: "" }) }} onChange={inputChange} name="gender" id="gender" placeholder="Enter Your Gender"/>
                            <span style={{ color: formError.gender ? "red" : "" }}>{formError.gender}</span>

                        </div>
                        <div class="form-group">
                            <label for="Password"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="Password" onClick={() => { setFormError({ ...formError, password: "" }) }} onChange={inputChange} name="password" id="Password" placeholder="Enter Your Password"/>
                            <span style={{ color: formError.password ? "red" : "" }}>{formError.password}</span>

                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="Register"  onClick={submit}/>
                        </div>
                    </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="../images/register.avif" alt="sing up image" /></figure>
                        <a class="signup-image-link">Already registered?</a>
                        <a href="#" class="signup-image-link">LOGIN</a>
                    </div>
            </div>
        </div>
    </section>
     
    </>
  )
}
