import News from "./News";
import Home from "./Home";
import Team from "./Team";
import Research from "./Research";
import { getNewsTest } from "../utils";
import { message } from "antd";
import { useState } from "react";

//决定输出什么！！！
//全部在这儿处理
const ContentPage = ({ props }) => {
  const [news, setNews] = useState([]);

  if (props.keypicked === "News") {
    getNewsTest()
      .then((data) => {
        setNews(data);
      })
      .catch((err) => {
        message.error(err.message);
      });
    return News(news);
  }
  if (props.keypicked === "Home") {
    return Home();
  }
  if (props.keypicked === "Research") {
    return Research();
  }
  if (props.keypicked === "Publication") {
  }
  if (props.keypicked === "Team") {
    return Team();
  }
  if (props.keypicked === "Collaboration") {
  }
};

export default ContentPage;
