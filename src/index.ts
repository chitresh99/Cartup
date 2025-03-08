import express from "express";
import productRoutes from './routes/products/index'

const app = express();
const port = 3000;

//products endpoints
app.get('/',(req,res) => {
    res.send('Welcome to cartup');
})

app.use('/products',productRoutes);

app.listen(port,()=> {
    console.log(`App listening on port ${port}`)
})