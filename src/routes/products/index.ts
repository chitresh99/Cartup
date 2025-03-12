import express,{Router} from "express";
import { listproducts,getproductsbyid,createproduct,updateProduct,deleteProduct } from "./productcontroller";
import {validateData} from "../../middlewares/validationmiddleware"
import { createSelectSchema , createInsertSchema} from 'drizzle-zod';
import { productsTable } from "../../db/productsSchema";
import { createProductSchema } from "../../db/productsSchema";

const router = Router(); //router is nothing but a way to group together mutliple end points

router.get('/',listproducts);

router.get('/:id',getproductsbyid);

router.post('/',validateData(createProductSchema),createproduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

export default router;