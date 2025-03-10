import express, { Request, Response }from "express";

export function listproducts(req: Request, res: Response) {
    res.send('The list of products');
}

export function getproductsbyid(req: Request, res: Response) {
    res.send('getproductbyid');
}

export function createproduct(req: Request, res:Response) {
    res.send('Create Product');
}

export function updateProduct(req:Request, res:Response) {
    res.send('updateProduct');
}

export function deleteProduct(req:Request, res:Response) {
    res.send('delete product')
}