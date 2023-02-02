import dtabase from '../db/database.js'

 const Cart = dtabase.cart;
 const Product = dtabase.products;
 const Detail = dtabase.detail;

 export const AllCarts = async (req, res) => {
    try {
      const carts = await Cart.findAll();
      res.status(200).json(carts);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
export const CartId = async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findOne({
        where: { id },
        include: {
          model: Product,
          through: {
            attributes: [],
          },
        },
      });
  
      if (!cart) return res.status(404).json({ message: "non-existent cart" });
      res.json(cart);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };

  //CREATE CART
export const createCart = async (req, res) => {
    try {
      const cart = await Cart.create();
      res.status(200).json(cart);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  //------UPDATE CART
export const updateCart = async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findOne({ where: { id } });
  
      await cart.save();
      return res.json(cart);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };
  
  //--------DELETE CART
  export const deleteCart = async (req, res) => {
    try {
      const { id } = req.params;
      await Cart.destroy({ where: { id } });
      res.sendStatus(204);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  //--- ADD PRODUCT
  export const addProduct = async (req, res) => {
    try {
      const { cartId, productId } = req.body;
      const productCart = await Detail.create({
        cartId,
        productId,
      });
      res.status(200).json(productCart);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  //---------DELETE PRODUCT CART
  export const deleteProductCart = async (req, res) => {
    try {
      const { cartId, productId } = req.body;
      await Detail.destroy({ where: { cartId, productId } });
      res.sendStatus(204);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
    
  
  
  
  
  