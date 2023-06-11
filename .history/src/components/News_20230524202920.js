import { Timeline } from "antd";
const News = (data) => {
  console.log(data.children);
  <Timeline items={data.data.children} />;
};

export default News;
