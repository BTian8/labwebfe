import "uikit/dist/css/uikit.min.css";

const News = (data) => {
  const news = data.map((news, index) => {
    return (
      <div class="uk-timeline-item">
        <div class="uk-timeline-icon">
          <span class="uk-badge">
            <span uk-icon="check"></span>
          </span>
        </div>
        <div class="uk-timeline-content">
          <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <h3 class="uk-card-title">
                  <time datetime="2020-07-08">{news.date}</time>
                </h3>
              </div>
            </div>
            <div class="uk-card-body">
              <p class="uk-text-success">{news.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div class="uk-container uk-padding">
      <div class="uk-timeline">{news}</div>
    </div>
  );
};

export default News;
