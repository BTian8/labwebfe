import { Col, Row } from "antd";

const Team = () => {
  return (
    <Row gutter={[48, 24]}>
      <Col span={12}>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src="https://rogerqbyang.files.wordpress.com/2020/11/qingbo-yang.png" />
              <ul class="social">
                <li>
                  <a href="#" class="fab fa-facebook"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-google-plus"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-instagram"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-linkedin"></a>
                </li>
              </ul>
            </div>
            <div class="team-content">
              <h3 class="title">Williamson</h3>
              <span class="post">Web Developer</span>
            </div>
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
