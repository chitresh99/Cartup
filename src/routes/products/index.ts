import express,{Router} from "express";
import { listproducts } from "controllers/productcontroller";

const router = Router(); //router is nothing but a way to group together mutliple end points

router.get('/',listproducts);

router.get('/',(req,res) => {
   res.send('This is the products page')
})

router.post('/',(req,res)=> {
    res.send('New product created')
})

router.get('/:id',(req,res) => {
    console.log(req.params); // the params is an object
    res.send('The list of products');
})

export default router;