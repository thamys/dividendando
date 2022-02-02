import { TransactionTypes } from "../constants/enums";
import moment from "moment";

export type Transaction = {
  key: string;
  symbol: string;
  date: Date;
  type: TransactionTypes;
  quantity: number;
  price: number;
};

export default [
  {
    key: "1",
    symbol: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
  {
    key: "2",
    symbol: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 2,
    price: 4154,
  },
  {
    key: "3",
    symbol: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
  {
    key: "4",
    symbol: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 5,
    price: 4154,
  },
  {
    key: "5",
    symbol: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
  {
    key: "6",
    symbol: "IRDM11",
    date: moment(),
    type: TransactionTypes.Purchase,
    quantity: 1,
    price: 4154,
  },
];
