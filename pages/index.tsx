import { NextPage } from "next";
import React from "react";
import { Typography } from "antd";
import AppLayout from "../components/layout";

const Dashboard: NextPage = () => {
  return (
    <AppLayout>
      <Typography.Title level={2}>Dashboard</Typography.Title>
    </AppLayout>
  );
};

export default Dashboard;
