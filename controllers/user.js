const mongoose = require('mongoose');
const User = require("../models/User");



exports.create = (req, res) => {
  
  if(!req.body.email) {    
    return res.status(400).send({ err: "Email cannot be empty." });
  }
  
  const [email, password, confirm_password, first_name, last_name, city_id] = req.body;

  try {
  	let user = User.findOne({ email });
    
    if(!user) {
      
      if (password !== confirm_password) {
         return res.status(400).send({ err: "Password and cofirm password should be the same." });
       }
      
      
      const newUser = new User({
        email,
        first_name,
        last_name,
        city: mongoose.Types.ObjectId(city_id)
      });
      
      newUser.save().then((data)=>{
        send.send({ success: "User created successfully."});
      }).catch((err)=>{
      	res.status(500).send({
        	err: err.message || "User registration failed."
        })
      });
        
     
    } else {
       return res.status(400).send({ err: "user with email ." + email + " already exists." });
    }
    
    
  } catch (err) {
    res.status(500).send({ err });
  }
  
}

exports.getSingleUser = (req, res) => {
    User.findOne({ _id: req.params.userId }, { email:0, password:0 } 
    ).then(user => {
        if(!user) {
            return res.status(404).send({ err: 'User with email ' + email + ' not found.' });  
          }
          
          res.send(user)
        });

}

