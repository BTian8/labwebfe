import { Timeline } from "antd";
const News = (data) => {
  console.log(data.data);
  <Timeline items={data.data.children} />;
};

export default News;
