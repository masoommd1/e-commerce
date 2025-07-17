import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import { placeOrder,placeOrderStripe,placeOrderEsewa,allOrders,userOrders,updateStatus } from '../controllers/orderController.js';
import authUser from '../middleware/auth.js';
import { verifyStripe } from '../controllers/orderController.js';



const orderRouter = express.Router()



// admin features
orderRouter.post('/list', adminAuth,allOrders)
orderRouter.post('/status', adminAuth,updateStatus)


// payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/esewa',authUser,placeOrderEsewa )


// user features
orderRouter.post('/userorders',authUser,userOrders)


// verify payment

orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/esewa', authUser, placeOrderEsewa);
export default orderRouter;

