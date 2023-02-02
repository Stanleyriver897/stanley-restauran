import { DataTypes } from "sequelize";
const ProductDetail = (sequelize) => {
  return sequelize.define("ProductDetail", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  });
};

export default ProductDetail;
