import { Timeline } from "antd";
import { getNews } from "../utils";
const News = () => {
  const data = getNews();
  return <Timeline items={data} mode="right" />;
};

export default News;
