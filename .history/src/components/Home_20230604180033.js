import { getHomeMessage } from "../utils";

const Home = () => {
  const data = getHomeMessage();

  return (
    <>
      <h1 id="welcomeTitle">
        Welcome to the Advanced Bioanalytical Laboratory!
      </h1>
      {data.forEach((paragraph) => {
        <p id="welcomeP">{paragraph}</p>;
      })}
    </>
  );
};
export default Home;
