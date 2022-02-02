import React from "react";
import { doc } from "@firebase/firestore"; // for creating a pointer to our Document
import { setDoc } from "firebase/firestore"; // for adding the Document to Collection
import {
  Col,
  Form,
  Input,
  Button,
  Radio,
  Row,
  DatePicker,
  message,
} from "antd";
import { firestore } from "../../firebase/clientApp"; // firestore instance
import { Transaction } from "../../mock/transactions";
import moment from "moment";

const AddOperation = () => {
  const addTransaction = async (transactionData: Transaction) => {
    // get the current timestamp
    const timestamp: string = Date.now().toString();
    // create a pointer to our Document
    const _transaction = doc(firestore, `transactions/${timestamp}`);

    try {
      //add the Document
      await setDoc(_transaction, transactionData);
      //show a success message
      message.success("Transaction added successfully");
    } catch (error) {
      //show an error message
      message.error("An error occurred while adding transaction");
    }
  };

  const onFinish = (values: Transaction) => {
    addTransaction({
      ...values,
      date: new Date(values.date),
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[16, 16]} align="bottom">
        <Col>
          <Form.Item label="Ativo" name="symbol" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Data" name="date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Tipo" name="type" rules={[{ required: true }]}>
            <Radio.Group
              options={[
                { label: "Compra", value: 0 },
                { label: "Venda", value: 1 },
              ]}
              value={0}
              optionType="button"
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Quantidade"
            name="quantity"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Preço unitário"
            name="price"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Adicionar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddOperation;
