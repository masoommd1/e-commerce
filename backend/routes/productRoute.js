import express from 'express';
import {addProduct,listProducts,removeProduct,singleProduct} from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// router for adding product
productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1}
                                        ,{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);

// router for removing product
productRouter.post('/remove',adminAuth,removeProduct);
  
// router for single  product 
productRouter.post('/single',singleProduct);

// router for getting list product
productRouter.get('/list',listProducts);

export default productRouter;