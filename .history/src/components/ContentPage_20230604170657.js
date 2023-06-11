import News from "./News";
import { getNews, getHomeMessage } from "../utils";
//决定输出什么！！！
//全部在这儿处理
const ContentPage = (props) => {
  if (props.keypicked === "News") {
    const data = getNews();
    return News(data);
  }
  if (props.keypicked === "Home") {
    const data = getHomeMessage();

    return (
      <div>
        <p>{data}</p>
      </div>
    );
  }
  if (props.keypicked === "Research") {
  }
  if (props.keypicked === "Publication") {
  }
  if (props.keypicked === "Team") {
  }
};

export default ContentPage;
