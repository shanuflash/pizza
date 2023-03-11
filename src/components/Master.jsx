import "./Master.css";
import pizza from "../assets/pizza.png";

function Master() {
  return (
    <div className="big-main">
      <div className="big-text">
        Buy now <br /> 50% offer
      </div>
      <img className="big-img" src={pizza} alt="pizza" />
    </div>
  );
}

export default Master;
