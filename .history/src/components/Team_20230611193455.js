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

  const members = data.map((member, index) => {
    return (
      <Col key={index} span={12}>
        <div className="our-team">
          <div className="pic">
            <img src={member.portrait_url} alt=" " />
            <ul className="social">
              {member.google_scholar_link !== null && (
                <li>
                  <a href={member.google_scholar_link}>
                    <GoogleCircleFilled />
                  </a>
                </li>
              )}
              {member.twitter !== null && (
                <li>
                  <a href={member.twitter}>
                    <TwitterCircleFilled />
                  </a>
                </li>
              )}
              {/* email never null */}
              <li>
                <a href="mailto:yangq@lincolnu.edu">
                  <MailFilled />
                </a>
              </li>
              {member.phone_number !== null && (
                <li>
                  <a href="tel:+15736815036">
                    <PhoneFilled />
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="team-content">
            <span className="title">{member.name}</span>
            <span className="post">
              {member.position}
              <br />
              {member.department}
            </span>
          </div>
        </div>
      </Col>
    );
  });

  return <Row gutter={[48, 24]}>{members}</Row>;
};
export default Team;
