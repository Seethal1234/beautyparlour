import React from 'react'
import { Link } from 'react-router-dom'
export default function Div() {

  
  return (
    <>
<section>
  <div class="bg-image">
      <img id="cimg" src="../images/beauty1.webp" width="100%" height="600px" alt='ss'/>
      <p id="textparanone" class="mb-0">Always Make Room <br></br>for a Little Beauty in Your Life</p>
      <Link to={'/register'}><button class="button-23">REGISTER</button></Link>
      <Link to={'/login'}><button class="button-24">LOGIN</button></Link>  
      
      
  </div>
</section>
    </>
  )
}
