import { getHomeMessage } from "../utils";

const Home = () => {
  const data = getHomeMessage();

  return (
    <div>
      <h1 id="welcome">Welcome to the Advanced Bioanalytical Laboratory!</h1>
      <p>{data}</p>
    </div>
  );
};
export default Home;
