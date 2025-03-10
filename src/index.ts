import express ,{json,urlencoded}from "express";
import productRoutes from './routes/products/index'

const port = 3000;
const app = express();

app.use(json()) //parses json
app.use(urlencoded({extended:false}));

//products endpoints
app.get('/',(req,res) => {
    res.send('Welcome to cartup');
})

app.use('/products',productRoutes);

app.listen(port,()=> {
    console.log(`App listening on port ${port}`)
})