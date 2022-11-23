const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const sha256 = require('js-sha256').sha256;
const Web3 = require('web3');
const OwnerManagment = require('../../blockchain/build/contracts/OwnerManagment.json');
const web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545');


exports.postProduct = async (req, res, next) => {
  try {
    const { title, price, categories, description } = req.body;
    if (
      !title ||
      !price ||
      !categories ||
      categories.length === 0 ||
      !description
    )
      return next(new ErrorHandler("Insufficient Data", 401));

    // let images = [];
    // for (let i = 0; i < req.body.images.length; i++) {
    //   let base64 = await blobToBase64(req.body.images[i]);
    //   images.push(base64);
    // }
    // let imagesLink = [];

    // if (images)
    //   for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //       folder: "ownIt_ProductImages",
    //     });
    //     imagesLink.push({
    //       public_id: result.public_id,
    //       image_url: result.secure_url,
    //     });
    //   }

    // req.body.images = imagesLink;

    const hash = sha256(title.concat(description).concat(price));

    web3.eth.net.getId().then((id)=>{
      return id;
    }).then((id)=>{
      return deployedNetwork = OwnerManagment.networks[id]
    }).then((deployedNetwork)=>{
      const instance = new web3.eth.Contract(OwnerManagment.abi,deployedNetwork && deployedNetwork.address);


      // these are the dummy address so it can vary for others private block chain.

      instance.methods.addProduct(title,hash,price,description,categories).send({from:'0xE303752B85203Ffd5c81D45A5172e665Fef739a1',gas:'5000000'});
      
      
    
    }).then(async()=>{
      const product = await Product.create({
        ...req.body,
        currentConsumer: req.user.id,
        ownerships: [req.user.id],
        manufacturer: req.user.id,
      });
      res.status(201).json({
        success: true,
        product,
      });
    })
    
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    const product = await Product.findById(prodId).populate("manufacturer");
    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    } else {
      res.status(201).json({
        success: true,
        product,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error));
  }
};

exports.getMyProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ currentConsumer: req.user.id });
    res.status(201).json({
      success: true,
      products,
    });
  } catch (error) {
    return next(new ErrorHandler(error));
  }
};
