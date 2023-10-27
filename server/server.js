const express = require('express')
const app = express()                 //taking the express functions to const app
const port = 2000
const mongoose  = require('mongoose')
const regRouter = require('./src/routes/regRouter')
const loginRouter = require('./src/routes/loginRouter')
const employeeRouter = require('./src/routes/employeeRouter')
const adminRouter = require('./src/routes/adminRouter')
const userRouter = require('./src/routes/userRouter')
const bodyParser = require('body-parser')
const productbookingRouter = require('./src/routes/productbookingRouter')
const cartRouter = require('./src/routes/cartRouter')
app.use(express.urlencoded({extended :true}))



app.use(bodyParser())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader( 
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.use('/register',regRouter) 
app.use('/login',loginRouter)  
app.use('/admin',adminRouter) 
app.use('/employee',employeeRouter) 
app.use('/user',userRouter) 
app.use('/productbook',productbookingRouter) 
app.use('/cart',cartRouter) 



mongoose.connect('mongodb+srv://seethalanilkumar001:seethalanilkumar001@cluster0.pkkewb3.mongodb.net/serverDb?retryWrites=true&w=majority').then(()=>{
  app.listen(2000,()=>{
    console.log("server started at http://localhost:2000");
  });
}).catch((error)=>{
  console.log(error);
})
