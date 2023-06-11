import { getHomeMessage } from "../utils";

const Paragraph = () => {
  const data = getHomeMessage();
  return data.map((paragraph, key) => <p id="welcomeP">{paragraph}</p>);
};

const Home = () => {
  return (
    <>
      <h1 id="welcomeTitle">
        Welcome to the Advanced Bioanalytical Laboratory!
      </h1>
      <Paragraph />
    </>
  );
};
export default Home;
