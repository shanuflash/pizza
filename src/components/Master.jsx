import "./Master.css";
import pizza from "../assets/pizza.png";

function Master() {
  return (
    <div className="big-main">
      <div className="big-text">
        <div className="line">it's not just Food,</div>
        <div className="line">it's an Experience.</div>
      </div>
      <div className="button-container">
        <div className="button">Learn More</div>
        <div className="button">Locate Us</div>
      </div>
      <img className="big-img" src={pizza} alt="pizza" />
    </div>
  );
}

export default Master;
