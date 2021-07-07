import css from "./Statistics.module.css";
function Statistics({ good, renderStatisticsItem, calculateTotalCount }) {
  return (
    <div>
      <ul className={css.statisticWrapper}>
        {renderStatisticsItem()}
        {/* {feedbacks.map((feedback) => (
          <li key={feedback} className="statistic-item">
            <p className="feedback-name">
              {feedback}: {this.state[feedback]}
            </p>
          </li>
        ))} */}
        <li className="statistic-item">Total: {calculateTotalCount()}</li>
        <li className="statistic-item">
          Positive Feedback:{" "}
          {good / calculateTotalCount()
            ? Math.floor((good / calculateTotalCount()) * 100) + "%"
            : 0 + "%"}
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
