import { Col, Layout, PageHeader, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import CountryList from "../CountryList";

const Main = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <Header color="white">
          <h1 style={{ color: "white" }}>App</h1>
        </Header>
        <Content style={{ padding: "3px" }}>
          <Row justify="center">
            <Col md={{ span: "16" }} xs={{ span: "24" }}>
              <CountryList />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
