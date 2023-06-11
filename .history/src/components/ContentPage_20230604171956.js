import News from "./News";
import Home from "./Home";

//决定输出什么！！！
//全部在这儿处理
const ContentPage = (props) => {
  if (props.keypicked === "News") {
    return News();
  }
  if (props.keypicked === "Home") {
    return Home();
  }
  if (props.keypicked === "Research") {
  }
  if (props.keypicked === "Publication") {
  }
  if (props.keypicked === "Team") {
  }
};

export default ContentPage;
