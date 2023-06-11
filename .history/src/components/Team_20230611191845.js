import { Col, Row } from "antd";
import {
  GoogleCircleFilled,
  TwitterCircleFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";

const Team = (data) => {
  data.forEach((element) => {
    console.log(element.name);
  });

  const startIndex = 0;
  const endIndex = 3;

  const members = data.map((member, index) => {
    return (
      <Col key={index} span={8}>
        <div className="our-team">
          <div className="pic">
            <img src={member.portrait_url} alt=" " />
            <ul className="social">
              {member.google_scholar_link !== null && (
                <li>
                  <a href="https://scholar.google.com/citations?user=qg9g8FoAAAAJ&hl=en">
                    <GoogleCircleFilled />
                  </a>
                </li>
              )}
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
    );
  });

  return <Row gutter={[48, 24]}>{members}</Row>;
};
export default Team;
