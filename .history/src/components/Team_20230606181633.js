const Team = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img src="img1.jpg" alt=" " style={{ width: "100%" }} />
          <div className="container">
            <h2>Qingbo (Roger) Yang</h2>
            <p className="title">
              Principal Investigator &amp; Assistant Professor
            </p>
            <p>
              Cooperative Research | College of Agriculture Environment and
              Human Sciences
            </p>
            <p>Tel: (573) 681-5036 | E-mail: yangq@lincolnu.edu</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="img2.jpg" alt=" " style={{ width: "100%" }} />
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
      </div>

      {/* <div className="column">
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
      </div> */}
    </div>
  );
};
export default Team;
