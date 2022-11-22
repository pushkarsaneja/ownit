const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const { sendToken } = require("../utils/jwtToken");

const Web3 = require('web3');
const OwnerManagment = require('../../blockchain/build/contracts/OwnerManagment.json');
const web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');







// const deployedNetwork = OwnerManagment.networks[networkId ];

// const instance = new web3.eth.Contract(OwnerManagment.abi,deployedNetwork && deployedNetwork.address);

// Register User
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return next(new ErrorHandler("Invalid Name or Email or Password", 401));
    }
    web3.eth.net.getId().then((id)=>{
      return id;
    }).then((id)=>{
      return deployedNetwork = OwnerManagment.networks[id]
    }).then((deployedNetwork)=>{
      const instance = new web3.eth.Contract(OwnerManagment.abi,deployedNetwork && deployedNetwork.address);


      // these are the dummy address so it can vary for others private block chain.

      instance.methods.addUser(name,role).send({from:'0xE303752B85203Ffd5c81D45A5172e665Fef739a1'});
      instance.methods.getUserDetails().send({from:'0xE303752B85203Ffd5c81D45A5172e665Fef739a1'}).then((data)=>{
        // console.log(data.events.userProfile.returnValues);
      });
      const addUser = async()=>{
        const user = await User.create({
          name,
          email,
          password,
          role,
        });
        sendToken(user, req, res, 200);
      }
      addUser();

    }).catch((err)=>{
      console.log(err)
    });
    
  } catch (error) {
     return next(new ErrorHandler(error, 400));

    // res.status(400).json({
    //   success: false,
    //   message: error.message,
    // });
  }
};

//sign in
exports.signInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return next(new ErrorHandler("Invalid Email", 401));
    }
    if (!password) {
      return next(new ErrorHandler("Invalid Password", 401));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    const isPasswordMatch = user.password === password;
    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    sendToken(user, req, res, 200);
  } catch (error) {
    return next(new ErrorHandler(err, 400));
  }
};

// logout
exports.logout = (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logout Succesful",
  });
};
