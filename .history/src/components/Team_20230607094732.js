import { Col, Row } from "antd";

const Team = () => {
  return (
    <Row gutter={[48, 24]}>
      <Col span={12}>
        <div className="card">
          <img
            className="cardImg"
            src="https://rogerqbyang.files.wordpress.com/2020/11/qingbo-yang.png"
            alt=" "
          />
          <div className="container">
            <h2>Qingbo (Roger) Yang</h2>
            <p className="title">
              Principal Investigator &amp; Assistant Professor
            </p>
            <p>
              <span>Cooperative Research </span>
              <br />
              <span>College of Agriculture Environment and Human Sciences</span>
            </p>
            <p>Tel: (573) 681-5036 | E-mail: yangq@lincolnu.edu</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </Col>

      <Col span={12}>
        <div className="card">
          <img className="cardImg" src="img2.jpg" alt=" " />
          <div className="container">
            <h2>Mike Ross</h2>
            <p className="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </Col>

      {/* <Col>
        <div className="card">
          <img src="img3.jpg" alt=" " style={{ width: "100%" }} />
          <div className="container">
            <h2>John Doe</h2>
            <p className="title">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </Col>
      <Col>
        <div className="card">
          <img src="img3.jpg" alt=" " style={{ width: "100%" }} />
          <div className="container">
            <h2>John Doe</h2>
            <p className="title">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </Col> */}
    </Row>
  );
};
export default Team;
