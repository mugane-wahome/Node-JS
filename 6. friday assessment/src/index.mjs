import { addJsonData, getProduct, addnewproduct } from "./addJsonData.mjs";


import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/api/products", async (req, res) => {
  res.status(200).json(await getProduct());
});

app.post("/api/products", async (req, res) => {
  const product = req.body;
  addnewproduct(product);
  res.status(200).json(product);
  res.end();
});

addJsonData().then(() => {
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
