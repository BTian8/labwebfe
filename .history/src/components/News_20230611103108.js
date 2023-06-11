import { Timeline } from "antd";
import { getNews } from "../utils";

const News = (data) => {
  return <Timeline items={data} mode="right" />;
};

export default News;
