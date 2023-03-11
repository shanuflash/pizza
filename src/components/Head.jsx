import "./Head.css";
import logo from "../assets/logo.png";

function Head() {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="pizza-logo"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          src={logo}
          alt="pizza logo"
        />
      </div>
      <div class="head-nav">
        <a href="#Login">Login</a>
        <div className="divider"></div>
        <a href="#Register">Register</a>
      </div>
    </div>
  );
}

export default Head;
