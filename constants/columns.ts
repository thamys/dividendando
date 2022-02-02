import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { Transaction } from "../mock/transactions";

export const transactionColumns = [
  {
    title: "Ativo",
    dataIndex: "symbol",
    key: "symbol",
  },
  {
    title: "Data",
    dataIndex: "date",
    key: "date",
    render: (date: Timestamp) => moment(date.toDate()).format("DD/MM/YYYY"),
  },
  {
    title: "Tipo",
    dataIndex: "type",
    key: "type",
    render: (type: number) => (type === 0 ? "COMPRA" : "VENDA"),
  },
  {
    title: "Quantidade",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Valor unitário",
    dataIndex: "price",
    key: "price",
    render: (price: number) =>
      (price / 100).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
  },
  {
    title: "Valor total",
    key: "price",
    render: ({ price, quantity }: Transaction) => {
      const total = (price * quantity) / 100;
      return total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
];
