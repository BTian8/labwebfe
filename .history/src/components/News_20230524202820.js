import { Timeline } from "antd";
const News = (data) => {
  console.log(data);
  <Timeline items={data.children} />;
};

export default News;
