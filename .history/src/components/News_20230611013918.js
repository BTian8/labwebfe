import { Timeline } from "antd";
import { getNews } from "../utils";
import { getNewsTest } from "../utils";
import { message } from "antd";
import { useState } from "react";

const News = () => {
  const data1 = getNews();

  getNewsTest()
    .then((data) => {
      console.log(data[0].description);
    })
    .catch((err) => {
      message.error(err.message);
    });
  return <Timeline items={data1} mode="right" />;
};

export default News;
