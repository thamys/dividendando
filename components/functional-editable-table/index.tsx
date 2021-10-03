import React, { useState } from "react";
import { Table, Button } from "antd";
import { EditableTableProps, ColumnTypes, DataType } from "./types";
import { EditableRow, EditableCell } from "./form";
import { columns as mockColumns, data as mockData } from "./data";

const Cadastro: React.FC<EditableTableProps> = () => {
  // Contador de itens para gerar o id
  const [count, setCount] = useState(mockData.length);
  const [dataSource, setDataSource] = useState<DataType[]>(mockData);

  // Deletar uma linha da coluna
  const handleDelete = (key: React.Key) => {
    const newData = [...dataSource];
    setDataSource(newData.filter((item) => item.key !== key));
  };

  // Adicionar item na tabela
  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      name: `Edward King ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = mockColumns(handleDelete, dataSource.length).map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns as ColumnTypes}
      />
    </div>
  );
};

export default Cadastro;
