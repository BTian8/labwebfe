import { getHomeMessage } from "../utils";

const Home = () => {
  const data = getHomeMessage();

  return (
    <div>
      <h3>Welcome to the Advanced Bioanalytical Laboratory!</h3>
      <p>{data}</p>
    </div>
  );
};
export default Home;
