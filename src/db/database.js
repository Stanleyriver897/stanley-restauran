import { Sequelize } from "sequelize";
import { development } from "./config-database";
import Products from "../models/Products";
import Cart from "../models/Cart";
import ProductDetail from "../models/productDetail";

export const sequelize = new Sequelize("foodingly", "root", "root", {
  ...development,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connecting...");
  })
  .catch((error) => console.log("error", error));

  //------------------------------------
const dtabase = {};
dtabase.Sequelize = Sequelize;
dtabase.sequelize = sequelize;
dtabase.cart = Cart(sequelize);
dtabase.products = Products(sequelize);
dtabase.detail = ProductDetail(sequelize);

dtabase.cart.belongsToMany(dtabase.products, {
  through: dtabase.detail,
});
export default dtabase;
