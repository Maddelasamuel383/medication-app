
import './index.css'

const AdherenceProgress = () => {
  const taken = 22;
  const missed = 3;
  const total = 30;
  const progressPercent = 85

  return (
    <div>
    <div className="progress-container">
      <h3>Monthly Adherence Progress</h3>
      <p>Overall Progress</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        >
         <p>85%</p>
        </div>
      </div>

      <div className="progress-labels">
        <span className="taken">{taken} days<br />Taken</span>
        <span className="missed">{missed} days<br />Missed</span>
        <span className="remaining">
          {total - taken - missed} days<br />Remaining
        </span>
      </div>
    </div>
    </div>
  );
};

export default AdherenceProgress;