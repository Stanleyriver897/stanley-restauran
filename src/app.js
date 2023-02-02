const express = require("express");
// import {productRoute} from './routes/products-routes';
// import {cartRoute} from './routes/cart-routes';

import cartRoutes from "./routes/cart.routes";
import productRoutes from "./routes/products.routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

export default app;
