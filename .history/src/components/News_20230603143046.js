import { Timeline } from "antd";
const News = (data) => {
  const styleObj = {
    fontSize: 30,
  };
  return <Timeline items={data} mode="right" style={styleObj} />;
};

export default News;
