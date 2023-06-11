import { Timeline } from "antd";
import { getNews } from "../utils";

const News = (data) => {
  const data1 = getNews();
  console.log(data);

  return <Timeline items={data1} mode="right" />;
};

export default News;
