import News from "./News";
import Home from "./Home";
import Team from "./Team";
import Research from "./Research";
import { getNews } from "../utils";

//决定输出什么！！！
//全部在这儿处理
const ContentPage = ({ tabPicked, resource }) => {
  if (tabPicked === "News") {
    return News(resource);
  }
  if (tabPicked === "Home") {
    return Home();
  }
  if (tabPicked === "Research") {
    return Research();
  }
  if (tabPicked === "Publication") {
  }
  if (tabPicked === "Team") {
    return Team();
  }
  if (tabPicked === "Collaboration") {
  }
  if (tabPicked === "Fund") {
  }
};

export default ContentPage;
