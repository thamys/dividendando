import { Popconfirm } from "antd";
import { ColumnTypes, DataType } from "./types";

export const columns = (
  handleDelete: (key: React.Key) => void,
  dataLength: number
): (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] => [
  {
    title: "name",
    dataIndex: "name",
    width: "30%",
    editable: true,
  },
  {
    title: "age",
    dataIndex: "age",
  },
  {
    title: "address",
    dataIndex: "address",
  },
  {
    title: "operation",
    dataIndex: "operation",
    render: (_, record: any) =>
      dataLength >= 1 ? (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.key)}
        >
          <a>Delete</a>
        </Popconfirm>
      ) : null,
  },
];

export const data: DataType[] = [
  {
    key: "0",
    name: "Edward King 0",
    age: "32",
    address: "London, Park Lane no. 0",
  },
  {
    key: "1",
    name: "Edward King 1",
    age: "32",
    address: "London, Park Lane no. 1",
  },
];
