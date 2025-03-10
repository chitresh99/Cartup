import express,{Router} from "express";
import { listproducts,getproductsbyid,createproduct,updateProduct,deleteProduct } from "./productcontroller";

const router = Router(); //router is nothing but a way to group together mutliple end points

router.get('/',listproducts);

router.get('/:id',getproductsbyid);

router.post('/',createproduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

export default router;