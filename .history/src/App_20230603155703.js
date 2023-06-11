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
import { getMembers } from "./utils";
import ContentPage from "./components/ContentPage";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function getAllMembers() {
  const members = getMembers();
  let membersList = [];
  members.forEach((member, index) => {
    membersList.push(getItem(member, index));
  });
  return membersList;
}

const items = [
  getItem("Home", "Home", <HomeOutlined />, []),
  getItem("Research", "Research", <BookFilled />, []),
  getItem("Publication", "Publication", <NotificationFilled />, []),
  getItem("News", "News", <ProfileOutlined />, []),
  getItem("Team", "Team", <TeamOutlined />, getAllMembers()),
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
  const [keypicked, setKey] = useState("Home");

  const onSelect = ({ key }) => {
    setKey(key);
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
      <Sider width="260" breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          defaultSelectedKeys={["Home"]}
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
            <ContentPage keypicked={keypicked} />
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
