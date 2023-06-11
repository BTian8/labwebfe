import { getHomeMessage } from "../utils";

const Home = () => {
  const data = getHomeMessage();

  return (
    <>
      <h1 id="welcomeTitle">
        Welcome to the Advanced Bioanalytical Laboratory!
      </h1>
      <p id="welcomeP">{data}</p>
    </>
  );
};
export default Home;
