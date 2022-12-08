const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Yeay berhasil pakai nodemon" });
});

app.get("/users", (req, res) => {
  return res.send("Daftar Users");
});

app.listen(3000, () => {
  console.log("Process running at port 3000");
});
