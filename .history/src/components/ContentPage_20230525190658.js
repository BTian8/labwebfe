import News from "./News";
import { getNews } from "../utils";
//决定输出什么！！！
//全部在这儿处理
const ContentPage = (props) => {
  if (props.keypicked === "6") {
    const data = getNews();
    return News(data);
  }
};

export default ContentPage;
