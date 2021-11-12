import React from "react";
import { Col, Form, Input, Button, Radio, Row, DatePicker } from "antd";

const AddOperation = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
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
          <Form.Item label="Ativo" name="active" rules={[{ required: true }]}>
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
                { label: "Compra", value: "buy" },
                { label: "Venda", value: "sale" },
              ]}
              onChange={() => ({})}
              value={"buy"}
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
