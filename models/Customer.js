import { Schema, model, models } from "mongoose";

const cutomerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLenght: 2,
  },
  lastName: {
    type: String,
    required: true,
    minLenght: 3,
  },
  email: {
    type: String,
    required: true,
    minLenght: 3,
  },
  phone: String,
  address: String,
  postalCode: Number,
  date: Date,
  products: {
    type: Array,
    defualt: [],
  },
  createdAt: {
    type: Date,
    defualt: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    defualt: () => Date.now(),
  },
});
const Customer = models.Customer || model("Customer", cutomerSchema);
export default Customer;
