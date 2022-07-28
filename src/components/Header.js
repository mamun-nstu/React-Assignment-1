import "../styles/Header.css";

function Header() {
  return (
    <div>
      <div className="coverPhoto">
        <div className="coverDescription">
          <h1 className="title">
            top-notch <br /> construction with <br />
            best material.
          </h1>
          <p>
            Industrial construction including offshore construction, <br />{" "}
            mining and quarrying, refineries, breweries, distilleries, <br />
            warehouses and factories.
          </p>
          <button className="headerButton">contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
