import { Timeline } from "antd";
import { getNews } from "../utils";
import { getNewsTest } from "../utils";
import { message, useState } from "antd";

const News = () => {
  const [news, setNews] = useState([]);

  getNews().then((data1) => {
    setNews(data1);
  });
  getNewsTest()
    .then((data) => {
      console.log(data[0].description);
    })
    .catch((err) => {
      message.error(err.message);
    });
  return <Timeline items={news} mode="right" />;
};

export default News;
