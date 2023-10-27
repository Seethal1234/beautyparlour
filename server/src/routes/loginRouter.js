var express = require("express");
const loginModel = require("../models/loginModel");
const loginRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
loginRouter.post("/login", async (req, res) => {
  try {
    const oldUser = await loginModel.findOne({ username: req.body.username });
    console.log(oldUser);
    if (!oldUser) {
      return res
        .status(400)
        .json({ success: true, error: false, message: "user doesn't exist" });
    }

    const ispasswordcorrect = await bcrypt.compare(
      req.body.password,
      oldUser.password
    );
    console.log(req.body.password);
    console.log(oldUser.password);
    
    console.log(ispasswordcorrect);
    if (ispasswordcorrect == true) {
      // if(oldUser.role=='2'){
      // const userDetails = await regModel.findOne({login_id : oldUser._id});
      // const logindetails  = {
      //     loginID :oldUser._id,
      //     userID :userDetails._id,
      //     Role :oldUser.role,
      //     Name :userDetails.name
      const token = jwt.sign(
        {
          user_id: oldUser._id,
          user_role: oldUser.role,
          username: oldUser.username,
        },
        "name_is_secret",
        { expiresIn: "1h" }
      );

      console.log("token", token);
      return res.status(200).json({
        success: true,
        error: false,
        message: "token generated",
        token: token,
        expiresIn: "1h",
        login_id: oldUser._id,
        user_role: oldUser.role,
        username: oldUser.username,
      });

      // return res.status(200).json({ success: true, error: false, message: "login success" ,details:logindetails});

      // }
      // if(oldUser.role=='3'){
      //     const userDetails = await employeeModel.findOne({login_id : oldUser._id});
      //     const logindetails  = {
      //         loginID :oldUser._id,
      //         employeeID :userDetails._id,
      //         Role :oldUser.role,
      //         EmployeeName:userDetails.employeename
      //     }
      //     return res.status(200).json({ success: true, error: false, message: "login success" ,details:logindetails });
      // }
    } else {
      return res
        .status(400)
        .json({
          success: true,
          error: false,
          message: "password not matching",
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: true, error: false, message: "something went wrong" });
    console.log(error);
  }
});

module.exports = loginRouter;
