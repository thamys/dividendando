import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { firestore } from "../../firebase/clientApp";
import { collection, DocumentData, query, getDocs } from "@firebase/firestore";

import AppLayout from "../../components/layout";
import AddOperation from "../../components/add-operation";
// import transactions from "../../mock/transactions";
import { transactionColumns } from "../../constants/columns";

const transactionsCollection = collection(firestore, "transactions");

const Cadastro = () => {
  const [transactions, setTransactions] = useState<DocumentData[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const getTransactions = async () => {
    // construct a query to get all transactions
    const transactionsQuery = query(transactionsCollection);
    // get the transactions
    const querySnapshot = await getDocs(transactionsQuery);

    // map through transactions adding them to an array
    const result: DocumentData[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot.data());
    });
    // set it to state
    setTransactions(result);
  };

  useEffect(() => {
    // get the transactions
    getTransactions();
    // reset loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // console.log(transactions);

  return (
    <AppLayout>
      <Typography.Title level={2}>Operações</Typography.Title>
      <AddOperation />
      <Table columns={transactionColumns} dataSource={transactions} />
    </AppLayout>
  );
};

export default Cadastro;
