import { Timeline } from "antd";

const News = (data) => {
  return (
    <Timeline
      items={data}
      mode="left"
      style={{
        font_size: "larger",
      }}
    />
  );
};

export default News;
