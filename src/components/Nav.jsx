import "./Nav.css";

function Nav() {
  return (
    <div class="navbar">
      <a className="active" href="#Home">
        Home
      </a>
      <a href="#Order">Order</a>
      <a href="#About">About</a>
    </div>
  );
}

export default Nav;
