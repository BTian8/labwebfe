import { Timeline } from "antd";

const News = (data) => {
  console.log(data);
  return <Timeline items={data} mode="left" />;
};

export default News;
