import React from "react";
import { Table } from "antd";
import AppLayout from "../../components/layout";
import AddOperation from "../../components/add-operation";
import transactions from "../../mock/transactions";
import { transactionColumns } from "../../constants/columns";

const Cadastro = () => {
  return (
    <AppLayout>
      <AddOperation />
      <Table columns={transactionColumns} dataSource={transactions} />
    </AppLayout>
  );
};

export default Cadastro;
