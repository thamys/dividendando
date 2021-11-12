import React from "react";
import { Table, Typography } from "antd";
import AppLayout from "../../components/layout";
import AddOperation from "../../components/add-operation";
import transactions from "../../mock/transactions";
import { transactionColumns } from "../../constants/columns";

const Cadastro = () => {
  return (
    <AppLayout>
      <Typography.Title level={2}>Operações</Typography.Title>
      <AddOperation />
      <Table columns={transactionColumns} dataSource={transactions} />
    </AppLayout>
  );
};

export default Cadastro;
