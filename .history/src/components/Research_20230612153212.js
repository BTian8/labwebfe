import { Carousel, Row, Col } from "antd";
import { getHomeMessage } from "../utils";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Paragraph = () => {
  const data = getHomeMessage();
  return data.map((paragraph, key) => (
    <p key={key} id="welcomeP">
      {paragraph}
    </p>
  ));
};

const Research = () => {
  return (
    <Row>
      <Col span={12}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Col>
      <Col span={12}>
        <Paragraph />
      </Col>
    </Row>
  );
};
export default Research;
