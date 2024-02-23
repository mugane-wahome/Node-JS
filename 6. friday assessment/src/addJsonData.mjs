import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const addJsonData = async () => {
  try {
    // new folder
    if (!fs.existsSync(path.join("src", "datafolder"))) {
      await fsPromise.mkdir(path.join("src", "datafolder"));
      console.log("folder successfully created ");
    }

    // new file
    if (!fs.existsSync(path.join("src", "datafolder", "productsData.json"))) {
      await fsPromise.appendFile(
        path.join("src", "datafolder", "productsData.json"),
        "{}"
      );
      console.log(`file created successfully`);
    }
  } catch (err) {
    console.error(err);
  }
};

const getProduct = async () => {
  const files = await fsPromise.readFile(
    path.join("src", "datafolder", "productsData.json"),
    { encoding: "utf-8" }
  );

  const jsonData = JSON.parse(files);
  console.log(jsonData);
  return jsonData;
};

const addnewproduct = async (product) => {
  product.productid = uuidv4();
  const files = await fsPromise.readFile(
    path.join("src", "datafolder", "productsData.json"),
    { encoding: "utf-8" }
  );

  const jsonData = JSON.parse(files);
  console.log(jsonData);

  jsonData.push(product);
  await fsPromise.writeFile(
    path.join("src", "datafolder", "productsData.json"),
    JSON.stringify(jsonData)
  );
  console.log("product added successfully");
};

export { addJsonData, getProduct, addnewproduct };
