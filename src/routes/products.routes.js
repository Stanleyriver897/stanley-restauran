import { Router } from "express";
import {
  allProducts,
  deleteProducts,
  newProduct,
  productsId,
  updateProduct,
} from "../controllers/ProductsController";
import { requestValidation, schemaProducts } from "../validation";
// const express = require('express')

const router = Router()

// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get("/", allProducts);
router.get("/:id", productsId);
router.post("/", requestValidation(schemaProducts), newProduct);
router.put("/:id", requestValidation(schemaProducts), updateProduct);
router.delete("/:id", deleteProducts);

module.exports = router;

// export default router;
