import React, { useState } from "react";
import "./index.css";
import {
  TeamOutlined,
  HomeOutlined,
  ProfileOutlined,
  BookFilled,
  NotificationFilled,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import News from "./components/News";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Research", "sub1", <BookFilled />, [
    getItem("Tom", "2"),
    getItem("Bill", "3"),
    getItem("Alex", "4"),
  ]),
  getItem("Publication", "5", <NotificationFilled />),
  getItem("News", "6", <ProfileOutlined />),
  getItem("People", "7", <TeamOutlined />, []),
];

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#2B3D4F",
};

const App = () => {
  const [news, setNews] = useState([]);

  const onSelect = ({ key }) => {
    if (key === "6") {
      setNews([
        {
          children: "Create a services site 2015-09-01",
        },
        {
          children: "Solve initial network problems 2015-09-01",
        },
        {
          children: "Technical testing 2015-09-01",
        },
        {
          children: "Network problems being solved 2015-09-01",
        },
      ]);
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onSelect={onSelect}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <h1>Advanced Bioanalytical Lab</h1>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <News data={news} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
