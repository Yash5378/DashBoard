import express from "express";

const app = express();
const PORT = 2003;

app.get("/", (req, res) => {
  return res.json("api is running ");
});

app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
