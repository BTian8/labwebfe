import React, { useState } from "react";
import "./index.css";
import { Layout, Menu, theme } from "antd";
import { getMembers } from "./utils";
import ContentPage from "./components/ContentPage";
import { getNews } from "./utils";
import { message } from "antd";

const { Header, Content, Footer } = Layout;

const items = [
  "Home",
  "Research",
  "Publication",
  "News",
  "Team",
  "Fund",
  "Collaboration",
].map((key) => ({
  key,
  label: key,
}));

const App = () => {
  const [tabPicked, setTab] = useState("Home");
  const [resource, setResource] = useState([]);
  // fetch data here!!!
  const onSelect = ({ key }) => {
    if (key === "News") {
      getNews()
        .then((data) => {
          const news = data.map((news) => ({
            label: news.date,
            children: news.description,
          }));
          setTab(key);
          setResource(news);
        })
        .catch((err) => {
          message.error(err.message);
        });
    }
    if (key === "Home") {
      setTab(key);
    }
    if (key === "Research") {
      setTab(key);
    }
    if (key === "Publication") {
      setTab(key);
    }
    if (key === "Team") {
      setTab(key);
    }
    if (key === "Collaboration") {
      setTab(key);
    }
    if (key === "Fund") {
      setTab(key);
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          paddingInline: 50,
          lineHeight: "64px",
        }}
      >
        <h1 id="webName">Advanced Bioanalytical Lab</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={items}
          onSelect={onSelect}
        />
      </Header>
      <Layout>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <div
            style={{
              padding: "24px 96px 24px 96px",
              height: "100%",
              background: colorBgContainer,
            }}
          >
            <ContentPage tabPicked={tabPicked} resource={resource} />
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Yang Laboratory</Footer>
    </Layout>
  );
};
export default App;
