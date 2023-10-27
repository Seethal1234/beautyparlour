import { configureStore } from "@reduxjs/toolkit";
import productviewreducer from '../slices/productslice'
import servicesreducer from "../slices/serviceslice";
import registrationreducer from "../slices/registrationslice";
import loginreducer from "../slices/loginslice";


export const  store = configureStore({
reducer : {
    productview : productviewreducer,
    services : servicesreducer,
    userreg: registrationreducer,
    commonlogin: loginreducer

}
})