import { Router } from "express";

import { addnewproduct, getProduct } from "../addJsonData.js";
import {validationSchema} from "../utils/validationSchema.js";
import {checkSchema, validationResult, matchedData} from "express-validator";
const productRoutes = Router();

productRoutes.get("/api/products", async (req, res) => {
    res.status(200).json(await getProduct());
  });
  

  productRoutes.post("/api/products", checkSchema(validationSchema), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const product = matchedData(req);
    addnewproduct(product);
    res.status(200).json(product);
    res.end();
  });

  export default productRoutes;