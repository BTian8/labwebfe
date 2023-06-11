import News from "./News";
import Home from "./Home";
import Team from "./Team";
import Research from "./Research";
import { getNews } from "../utils";

//决定输出什么！！！
//全部在这儿处理
const ContentPage = ({ keypicked, resource }) => {
  if (keypicked === "News") {
    const data = getNews();
    console.log(resource);
    return News(data);
  }
  if (keypicked === "Home") {
    return Home();
  }
  if (keypicked === "Research") {
    return Research();
  }
  if (keypicked === "Publication") {
  }
  if (keypicked === "Team") {
    return Team();
  }
  if (keypicked === "Collaboration") {
  }
};

export default ContentPage;
