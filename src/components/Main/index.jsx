import { Layout, PageHeader } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";

const Main = () => {
  return (
    <div>
      <Layout>
        <Header color="white">
          <h1 style={{ color: "white" }}>App</h1>
        </Header>
        <Content></Content>
      </Layout>
    </div>
  );
};

export default Main;
