import { getHomeMessage } from "../utils";

const Home = () => {
  const data = getHomeMessage();

  return (
    <div>
      <p>{data}</p>
    </div>
  );
};
export default Home;
