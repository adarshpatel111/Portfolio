const express = require("express");
const { sendEmail } = require("./controller/sendEmail");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
cors = require("cors");

app.use(express.json());    
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
const PORT = process.env.PORT || 3000;

app.post("/mail", sendEmail);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
