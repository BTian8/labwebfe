import "uikit/dist/css/uikit.min.css";

const News = (data) => {
  const news = data.map((news, index) => {
    return (
      <div key={index} className="uk-timeline-item">
        <div className="uk-timeline-icon" style={{ zIndex: "1" }}>
          <span className="uk-badge"></span>
        </div>
        <div className="uk-timeline-content">
          <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
            <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                <h3 className="uk-card-title">
                  <time dateTime="2020-07-08">{news.date}</time>
                </h3>
              </div>
            </div>
            <div className="uk-card-body">
              <p className="uk-text-success">{news.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="uk-container uk-padding">
      <div className="uk-timeline">{news}</div>
    </div>
  );
};

export default News;
