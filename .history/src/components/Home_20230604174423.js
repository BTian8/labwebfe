import { getHomeMessage } from "../utils";

const Home = () => {
  const data = getHomeMessage();

  return (
    <div
      style={{
        padding-left: "48px",
      }}
    >
      <h1 id="welcomeTitle">
        Welcome to the Advanced Bioanalytical Laboratory!
      </h1>
      <p id="welcomeP">{data}</p>
    </div>
  );
};
export default Home;
