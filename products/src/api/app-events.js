const ProductService = require("../services/product-service");

module.exports = (app) => {
  const service = new ProductService();
  app.use("/app-events", async (req, res, next) => {
    const { payload } = req.body;
    console.log("======= Product Service recovered Event ========");
    return res.status(200).json(payload);
  });
};
