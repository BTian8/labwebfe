import { Carousel, Row, Col } from "antd";
const contentStyle = {
  height: "540px",
  color: "#fff",
  lineHeight: "540px",
  textAlign: "center",
  background: "#364d79",
};

const Research = () => {
  return (
    <Row>
      <Col span={12}>
        <Carousel autoplay style={{ padding: "auto" }}>
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
      <Col span={12}></Col>
    </Row>
  );
};
export default Research;
