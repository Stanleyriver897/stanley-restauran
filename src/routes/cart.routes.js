import { Router } from "express";

import {
  AllCarts,
  CartId,
  addProduct,
  createCart,
  deleteCart,
  deleteProductCart,
  updateCart
} from "../controllers/CartController";
import { requestValidation, schemaDetail } from "../validation";
// const express = require('express')

const router = Router()

// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get("/", AllCarts);
router.get("/:id", CartId);
router.post("/", createCart);
router.delete("/:id", deleteCart);
router.post(
  "/add-product",
  requestValidation(schemaDetail),
  addProduct
);
router.post(
  "/remove-product",
  requestValidation(schemaDetail),
  deleteProductCart
);
module.exports = router;