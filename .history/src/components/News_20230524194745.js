import { Timeline } from "antd";
const News = (data) => {
  <Timeline
    items={[
      {
        children: "Create a services site 2015-09-01",
      },
      {
        children: "Solve initial network problems 2015-09-01",
      },
      {
        children: "Technical testing 2015-09-01",
      },
      {
        children: "Network problems being solved 2015-09-01",
      },
    ]}
  />;
};

export default News;
