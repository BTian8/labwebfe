import { Timeline } from "antd";

const News = (data) => {
  console.log(data);
  return <Timeline items={data} mode="right" />;
};

export default News;
