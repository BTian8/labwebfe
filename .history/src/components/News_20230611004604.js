import { Timeline } from "antd";
import { getNews } from "../utils";
import { getNewsTest } from "../utils";
import { message } from "antd";

const News = () => {
  const data1 = getNews();
  getNewsTest()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      message.error(err.message);
    });
  return <Timeline items={data1} mode="right" />;
};

export default News;
