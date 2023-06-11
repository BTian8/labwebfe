import News from "./components/News";
import { getNews } from "../utils";
//决定输出什么！！！
//全部在这儿处理
const ContentPage = ({ key }) => {
  if (key === "6") {
    getNews();
    return { News };
  }
};

export default ContentPage;
