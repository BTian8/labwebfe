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
        <div style={{ padding: "24px", fontSize: "larger" }}>
          Our laboratory is interested in using a variety of chromatographic and
          optical instruments to explore multi-channel biosystem-related
          signals. We use our expertise in analytical chemistry, sensor design &
          development, 3D nanolithography, and molecular and cell biology to
          develop methods and devices for rapid multi-channel biochemical and
          biophysical sensing and analysis. The Advanced Bioanalysis Laboratory
          (ABL) will carry out many researches in the above directions that
          broadly related to fields such as food safety and agriculture/
          environmental analysis.
        </div>
      </Col>
    </Row>
  );
};
export default Research;
