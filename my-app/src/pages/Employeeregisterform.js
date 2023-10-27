import axios from 'axios'
import React, { useState } from 'react'
import './Employeeregister.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Employeeregisterform() {
    const [employeeregisterform, setEmployeeregisterform] = useState({ //store all data
        employeename: '', //default set as 
        address: '' ,
        phone: '',
        email:'',
        gender:'',
        qualification:'',
        username:'',
        password:''
  
        
      })
    
      const inputChange = (event) => { // data entered->input 
        const { name, value } = event.target
        setEmployeeregisterform({ ...employeeregisterform, [name]: value })
      }
    
      const [formError, setFormError] = useState({})
      console.log(formError);
    
    
      const validate = (values) => {
    
        var error = {}
    
        if (!values.employeename) {
          error.employeename = "Enter employyee name"
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
          if (!values.qualification) {
            error.qualification = "Enter qualification"
          }
          if (!values.username) {
            error.username = "Enter username"
          }
          if (!values.password) {
            error.password = "Enter password"
          }
        
        return error
    
      }
      
      const submit = (e) => {
        e.preventDefault()
        setFormError(validate(employeeregisterform))
        if (Object.keys(formError).length == 0) {
          axios.post('http://localhost:2000/employee',employeeregisterform).then((response)=>{
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
      console.log(employeeregisterform)
  return (
    <>
    <ToastContainer/>
        <section class="signup">
        <div class="container">
            <div class="body1">
                <div class="signup-form">
                    <h2 class="form-title">EMPLOYEE REGISTER</h2>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="employeename" onClick={() => { setFormError({ ...formError, employeename: "" }) }} onChange={inputChange} id="name" placeholder="Enter Your Employee Name" />
                            <span style={{ color: formError.employeename ? "red" : "" }}>{formError.employeename}</span>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="text" name="address" onClick={() => { setFormError({ ...formError, address: "" }) }} onChange={inputChange} id="address" placeholder="Enter Your Address"/>
                            <span style={{ color: formError.address ? "red" : "" }}>{formError.address}</span>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="text" name="phone" onClick={() => { setFormError({ ...formError, phone: "" }) }} onChange={inputChange} id="phone" placeholder="Enter Your Phone"/>
                            <span style={{ color: formError.phone ? "red" : "" }}>{formError.phone}</span>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="text" name="email" onClick={() => { setFormError({ ...formError, email: "" }) }} onChange={inputChange} id="email" placeholder="Enter Your Email"/>
                            <span style={{ color: formError.email ? "red" : "" }}>{formError.email}</span>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="text" name="gender" onClick={() => { setFormError({ ...formError, gender: "" }) }} onChange={inputChange} id="gender" placeholder="Enter Your Gender"/>
                            <span style={{ color: formError.gender ? "red" : "" }}>{formError.gender}</span>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="text" name="qualification" onClick={() => { setFormError({ ...formError, qualification: "" }) }} onChange={inputChange} id="qualification" placeholder="Enter Your qualification"/>
                            <span style={{ color: formError.qualification ? "red" : "" }}>{formError.qualification}</span>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="text" name="username" onClick={() => { setFormError({ ...formError, username: "" }) }} onChange={inputChange} id="username" placeholder="Enter Your username"/>
                            <span style={{ color: formError.username ? "red" : "" }}>{formError.username}</span>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="text" name="password" onClick={() => { setFormError({ ...formError, password: "" }) }} onChange={inputChange} id="password" placeholder="Enter Your password"/>
                            <span style={{ color: formError.password ? "red" : "" }}>{formError.password}</span>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="Register" onClick={submit}/>
                        </div>
                    </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="../images/register.avif" alt="sing up image"/></figure>
                        <a class="signup-image-link">Already registered?</a>
                        <a href="#" class="signup-image-link">LOGIN IN</a>
                    </div>
            </div>
        </div>
    </section> 
    </>
  )
}
