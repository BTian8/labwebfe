import { Col, Row } from "antd";
import {
  GoogleCircleFilled,
  TwitterCircleFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";

const Team = (data) => {
  console.log(data);
  console.log(data.length);

  data.forEach((element) => {
    console.log(element.name);
  });

  const startIndex = 0;
  const endIndex = 3;

  const test = data.map((member, index) => {
    return index;
  });

  console.log(test);
  return (
    <Row gutter={[48, 24]}>
      <Col span={8}>
        <div className="our-team">
          <div className="pic">
            <img
              src="https://rogerqbyang.files.wordpress.com/2020/11/qingbo-yang.png"
              alt=" "
            />
            <ul className="social">
              <li>
                <a href="https://scholar.google.com/citations?user=qg9g8FoAAAAJ&hl=en">
                  <GoogleCircleFilled />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/RogerQingboYang">
                  <TwitterCircleFilled />
                </a>
              </li>
              <li>
                <a href="mailto:yangq@lincolnu.edu">
                  <MailFilled />
                </a>
              </li>
              <li>
                <a href="tel:+15736815036">
                  <PhoneFilled />
                </a>
              </li>
            </ul>
          </div>
          <div className="team-content">
            <span className="title">Qingbo (Roger) Yang</span>
            <span className="post">
              Principal Investigator | Assistant Professor
              <br />
              Cooperative Research | College of Agriculture Environment and
              Human Sciences
            </span>
          </div>
        </div>
      </Col>

      <Col span={8}>
        <div className="our-team">
          <div className="pic">
            <img
              src="https://rogerqbyang.files.wordpress.com/2021/03/representative-figure-in-jpeg.jpg?w=300"
              alt=" "
            />
            <ul className="social">
              <li>
                <a href="https://scholar.google.com/citations?user=qg9g8FoAAAAJ&hl=en">
                  <GoogleCircleFilled />
                </a>
              </li>
            </ul>
          </div>
          <div className="team-content">
            <span className="title">Williamson</span>
            <span className="post">Web Developer</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Team;
