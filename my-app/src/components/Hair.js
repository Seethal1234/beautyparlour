import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../pages/Services.css'
import {useSelector,useDispatch} from 'react-redux'
import { view_service } from '../redux/slices/serviceslice'

export default function Hair() {

// const[viewservice,setViewservice] = useState([]);
// console.log(viewservice);
// useEffect(()=>{
//   axios.get("http://localhost:2000/user/view-service").then((response)=>{
//     setViewservice(response.data.service_details)
//   })
// },[])

const {viewservice,loading} = useSelector((state)=>state.services)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(view_service())
},[])

console.log(viewservice);




 
  return (
    <>
       <div id="servicestyle">
        <h1 id="hair">HAIR</h1>
        <p id="hairpara">Stylish hair cuts, gorgeous styling, incredible color services and best hair treatments. Choose your dream service!</p>
    </div>
    <div id="hairr">
      
    <table class="table" id="table">
        <thead>
          <tr>
            <th scope="col">HAIRCUT</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
           {viewservice.map((item)=>(  
          <tr>
          
           <>  
            <th scope="row"></th>
        
           
            <td><h6 id="hair1">{item.nameofservice} </h6>
            <p id="para1">{item.description}</p>
            </td>
            <td><h6>{item.price}</h6></td>
            <td><h6 id="hair1">{item.nameofservice}</h6>
            <p id="para1">{item.description}</p>
            </td>            
            <td>{item.price}</td>
            </>
          
           
          </tr>
          
          ))}
        </tbody>
      </table>
    <button class="button-6" role="button">BOOK APPOINTMENT</button>
   
</div>
    </>
  )
}




































// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import '../pages/Services.css'
// export default function Hair() {

// const[viewservice,setViewservice] = useState([]);
// console.log(viewservice);
// useEffect(()=>{
//   axios.get("http://localhost:2000/user/view-service").then((response)=>{
//     setViewservice(response.data.service_details)
//   })
// },[])

 
//   return (
//     <>
//        <div id="servicestyle">
//         <h1 id="hair">HAIR</h1>
//         <p id="hairpara">Stylish hair cuts, gorgeous styling, incredible color services and best hair treatments. Choose your dream service!</p>
//     </div>
//     <div id="hairr">
      
//     <table class="table" id="table">
//         <thead>
//           <tr>
//             <th scope="col">HAIRCUT</th>
//             <th scope="col"></th>
//             <th scope="col"></th>
//             <th scope="col"></th>
//             <th scope="col"></th>
//             <th scope="col"></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
            
//             <th scope="row"></th>
//            {viewservice.map((item)=>(
//            <>
//             <td><h6 id="hair1">Clipper Cut</h6>
//             <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p>
//             </td>
//             <td>$33</td>
//             <td><h6 id="hair1">Kids Haircut</h6>
//                 <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p></td>
//             <td>$37</td>
//             </>
//           ))}

//           </tr>

          {/* <tr>
            <th scope="row"></th>
            <td><h6 id="hair1">Signature Haircut</h6>
            <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p>
            </td>
            <td>$30</td>
            <td><h6 id="hair1">Multi-Tone Hair Color</h6>
                <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p></td>
            <td>$33</td>
          </tr> */}

          {/* <tr>
            <th scope="row"></th>
            <td><h6 id="hair1">All-Over Color</h6>
            <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p>
            </td>
            <td>$43</td>
            <td><h6 id="hair1">Full Root Touch-up</h6>
                <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p></td>
            <td>$33</td>
          </tr> */}

          {/* <tr>
            <th scope="row"></th>
            <td><h6 id="hair1">Accent Highlight</h6>
            <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p>
            </td>
            <td>$53</td>
            <td><h6 id="hair1">Total Blonde</h6>
                <p id="para1">A haircut using clippers to achieve<br></br>an ultra-short design. (30 min)</p></td>
            <td>$34</td>
          </tr> */}
//         </tbody>
//       </table>
//     <button class="button-6" role="button">BOOK APPOINTMENT</button>
   
// </div>
//     </>
//   )
// }
