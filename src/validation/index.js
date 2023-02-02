import Joi from "joi";

export const schemaProducts = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  image: Joi.string().required(),
  category: Joi.string()
    .valid("CHICKEN", "BURGER", "ICE_CREAM", "DRINKS", "NOODLES", "DEFAULT")
    .required(),
  discount: Joi.number().min(0),
});

export const schemaDetail = Joi.object().keys({
  cartId: Joi.string().required(),
  productId: Joi.string().required(),
});
export const requestValidation = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.send(error.message);
    }
  };
};
