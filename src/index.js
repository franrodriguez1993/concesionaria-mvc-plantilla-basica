require("dotenv").config();
const express = require("express");
const { vehiculoRoute } = require("./routes/vehiculo.routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//rutas:
app.use("/vehiculo", vehiculoRoute);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
