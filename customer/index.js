import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";

const app = express();
const PORT = 4300;

app.use(bodyParser.json());

const customers = {};

// GET /customers
// Retrieve all customers
app.get("/customers", (req, res) => {
  res.send(customers);
});

// POST /customers
// Create a new customer
app.post("/customers", (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { name, address, phone, email, type, comment, createdAt, updatedAt } =
    req.body;

  customers[id] = {
    id,
    name,
    address,
    phone,
    email,
    type,
    comment,
    createdAt,
    updatedAt,
  };

  res.status(201).send(customers[id]);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
