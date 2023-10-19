const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routers/routes");
const bodyParser = require("body-parser");
const connectdb = require("./mongoose/connecting");
const port = 4000;
app.use(express.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

const staticpath = path.join(__dirname, "./Public");
app.use(express.static(staticpath));

const connecting = async () => {
  try {
    await connectdb(
      "mongodb+srv://sumitrawat:sumitrawat123@fooddelivery.4rq8d0f.mongodb.net/portfolio?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log("server is running on port number" + port);
    });
  } catch (error) {
    console.log(error);
  }
};
connecting();
