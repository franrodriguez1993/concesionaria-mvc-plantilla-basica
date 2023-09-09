require("dotenv").config();
const express = require("express");
const { vehiculoRoute } = require("./routes/vehiculo.routes");
const { proveedorRoutes } = require("./routes/proveedor.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//rutas:
app.use("/vehiculo", vehiculoRoute);
app.use("/proveedor", proveedorRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
