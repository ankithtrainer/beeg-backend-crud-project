const express = require("express");
const contactDetails = require("../model/contact_details");
const router = express.Router()
router.post("/employee-regn-credential-info",async(req,res)=>{
    try {
        const {
          firstname,
          lastname,
          email,
          password,
          confirmpassword
        } = req.body;
    
        //console.log(firstName, lastName, email, password, phoneNo);
        if (!firstname) {
          return res.send({ message: "firstname is Required" });
        }
        if (!lastname) {
          return res.send({ message: "lastname is Required" });
        }
        if (!email) {
          return res.send({ message: "Email is Required" });
        }
        if (!password) {
          return res.send({ message: "Password is Required" });
        }
        
        //check user
        const existingUser = await employeeCredentialInfoSchema.findOne({ email });
        //existing user
        if (existingUser) {
          return res.status(200).send({
            success: false,
            message: "Already Register please login",
          });
        }
        // register user

        const hashedPassword = await hashPassword(password);
         
        //save
        const empCredentialRegnInfo = new employeeCredentialInfoSchema({
          firstname,
          lastname,
          email,
          password:hashedPassword,

        });
        await empCredentialRegnInfo.save();
    
        res.status(201).send({
          success: true,
          message: "user Register Successfully",
          empCredentialRegnInfo,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in Registeration",
          error,
        });
      }
       
    
})

module.exports = router;

