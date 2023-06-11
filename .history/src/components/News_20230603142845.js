import { Timeline } from "antd";
const News = (data) => {
  const styleObj = {
    fontSize: 14,
  };
  return <Timeline items={data} mode="right" />;
};

export default News;
