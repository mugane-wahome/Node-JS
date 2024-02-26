import productRoutes from  "./routes/productRoutes.js";
import { addJsonData } from "./addJsonData.js";

import express from "express";

const app = express();

const PORT = process.env.PORT || 2000;

app.use(express.json());

app.use(productRoutes)

addJsonData().then(() => {
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
