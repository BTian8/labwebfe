import { Timeline } from "antd";
const News = (data) => {
  console.log(data);
  <Timeline items={data.data.children} />;
};

export default News;
