import { getHomeMessage } from "../utils";

const paragraph = () => {
  const data = getHomeMessage();
  return data.forEach((paragraph) => {
    <p id="welcomeP">{paragraph}</p>;
  });
};

const Home = () => {
  return (
    <>
      <h1 id="welcomeTitle">
        Welcome to the Advanced Bioanalytical Laboratory!
      </h1>
      <paragraph />
    </>
  );
};
export default Home;
