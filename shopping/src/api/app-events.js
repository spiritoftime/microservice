// const ShoppingService = require("../services/shopping-service");
// // NOT NEEDED ANYMORE SINCE WE ARE USING RABBITMQ, NOT HTTP_PROXY WEBHOOK
// module.exports = (app) => {
//   const service = new ShoppingService();
//   app.use("/app-events", async (req, res, next) => {
//     const { payload } = req.body;
//     service.SubscribeEvents(payload);
//     console.log("======= Shopping Service recovered Event ========");
//     return res.status(200).json(payload);
//   });
// };
