import dtabase from '../db/database.js'

const Product = dtabase.products

//----ALL PRODUCTS
export const allProducts = async (req, res) => {
  try {
    let params = {};
    const { category } = req.query;

    if (category) {
      params = { category };
    }
    const products = await Product.findAll({
      where: { ...params },
    });
    res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//-----PRODUCT ID
export const productsId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.status(404).json({ message: "non-existent product" });
    }
    res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//-----NEW PRODUCTS
export const newProduct = async (req, res) => {
  try {
    const { name, price, image, description, category, discount } = req.body;
    const product = await Product.create({
      name,
      description,
      image,
      price,
      category,
      discount,
    });

    res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//--------UPDATE PRODUCTS
export const updateProduct = async (req, res) => {
  try {
    const { name, price, image, description, category, discount } = req.body;
    const product = await Product.findByPk({ where: { id } });

    product.name = name;
    product.price = price;
    product.image = image;
    product.description = description;
    product.category = category;
    product.discount = discount;

    await product.save();
    res.json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

//---------DELETE PRODUCTS
export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.sendStatus(204);
  } catch {
    res.status(400).json({ message: error.message });
  }
};
