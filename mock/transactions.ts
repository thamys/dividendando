import { TransactionTypes } from "../constants/enums";
import moment from "moment";

export type Transaction = {
  key: string;
  stock: string;
  date: Date;
  type: TransactionTypes;
  quantity: number;
  price: number;
};

export default [
  {
    key: "1",
    stock: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
  {
    key: "2",
    stock: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 2,
    price: 4154,
  },
  {
    key: "3",
    stock: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
  {
    key: "4",
    stock: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 5,
    price: 4154,
  },
  {
    key: "5",
    stock: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
  {
    key: "6",
    stock: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
];
