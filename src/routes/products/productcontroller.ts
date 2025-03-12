import express, { Request, Response }from "express";
import {db} from '../../db/db';
import { productsTable } from "../../db/productsSchema"; //following relative path
import { eq } from "drizzle-orm";
import _ from 'lodash';
import {createProductSchema} from '../../db/productsSchema'

export async function listproducts(req: Request, res: Response) {
    try{
    const products = await db.select().from(productsTable);
    res.json(products);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getproductsbyid(req: Request, res: Response) {
    try{
    //[] => this is array destructuring in case we need one

    /*
    Where to use array destructuring
    1. Assigning Variables from Arrays
    2.Skipping Elements
    3. Using default values
    4. Swapping Variables
    5. Extracting from Nested Arrays
    etc etc
    */

   // since we are sending id in the url we can get it from the url 

    const {id} = req.params;

    const [product] = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id,Number(id))); //transforming id from string to number
    
    if(!product){
        res.status(404).send({message: `Product not found`});
    }else{
        res.json(product);
    }

    }catch(e){
        res.status(500).send(e);
    }
}

/*
 Ensuring Required Fields Are Present
_.pick(req.body, ["name", "price"]) only picks the specified fields but does not check if they exist.
If req.body is missing name or price, _.pick() will return an object with missing fields, causing an insertion error in the database.
createProductSchema.parse(req.body) ensures all required fields exist and throws an error if any are missing.

Validating Data Types Before Database Insertion -> if we want a number and we pass a string it won't work

*/

export async function createproduct(req: Request, res:Response) {
    try{
    console.log(Object.keys(createProductSchema.shape))//shows all the keys
    const parsedData = createProductSchema.parse(req.body);  //ensures only required data is inserted into the database
    const [products] = await db.insert(productsTable).values(parsedData).returning();//returning will return it
    res.status(201).json(products);
    }catch (e){
        res.status(500).send(e);
    }
}

export async function updateProduct(req:Request, res:Response) {
    try{
    const id = Number(req.params.id);
    const updatedfields = req.body;
    const [product] =  await db.update(productsTable).set(updatedfields).where(eq(productsTable.id,id)).returning();
    if (product){
        res.json(product);
    }
    }catch(e){
        res.status(500).send({message:'Product was not found'});
    }
}

export async function deleteProduct(req:Request, res:Response) {
    try{
    const id = Number(req.params.id);
    const [deleteProduct] = await db.delete(productsTable).where(eq(productsTable.id,id)).returning();
    if(deleteProduct){
        console.log("Product was deleted")
        res.send(204).send();
    }else{
        res.status(404).send({message:'Product was not found'});
    }
    }catch(e){
        res.status(500).send(e);
    }
}