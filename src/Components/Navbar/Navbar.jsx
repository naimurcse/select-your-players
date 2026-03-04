import dollarIcon from "../../assets/doller-icon.png";
import navImg from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar max-w-300 mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img src={navImg} alt="" />
        </a>
      </div>
      <div className="flex text-center gap-1">
        <span>6000000</span> <span>Coin</span>
        <img src={dollarIcon} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
