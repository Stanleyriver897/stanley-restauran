import { DataTypes } from "sequelize";
// import {sequelize} from '../db/database.js'

const Products = (sequelize) => {
  return sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      // type: DataTypes.ENUM,
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["CHICKEN", "ICE_CREAM", "DRINKS", "BURGER", "NOODLES", "DEFAULT"],
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    state: true
  }
  );
};

export default Products;
