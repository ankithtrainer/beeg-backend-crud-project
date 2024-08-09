const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('../dbcon'); // Adjust path as needed

const ContactInfo = require('../model/contact_details'); // Adjust path as needed


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post('/add-contact', async (req, res) => {
  try {
    const body = req.body;

    const newContact = new ContactInfo(body);
    const savedContact = await newContact.save();

    res.status(200).json(savedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const {Contacts}  = require('../model/get-contact-details');

app.get('/get-contacts', async (req, res) => {
  try {
    const data = await Contacts.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get contact record by id 
app.get('/get-contact-by-id/:id', async (req,res) => {
try{
  const data = await Contacts.findById(req.params.id);
  res.status(200).json(data);



}catch(error){
  res.status(400).json(
    {error: error.message}
  )
}


});

app.get('/get-contact/:id', async (req, res) => {
  try {
    const data = await Contacts.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  Update API method 
app.put('/update-contact/:id', async(req,res) =>{

   try{
      const {name, email, phoneno, city, address} = req.body;

      const data = await ContactInfo.findByIdAndUpdate(req.params.id,{
        name,email,phoneno,city,address
      },{new:true});

      res.status(200).json(data);
   }catch(error){
     res.status(400).json({error: error.message})
   }

});

// Contact Delete Api 
app.delete('/delete-contact/:id', async (req, res) => {
  try {
    const data = await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
   