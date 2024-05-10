import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flow-row justify-between items-center shadow-lg p-4 border rounded-lg">
      <button
        onClick={() => navigate("/new")}
        className="btn btn-primary btn-sm md:btn-md"
      >
        + New Idea
      </button>
      <h2 className="font-bold text-sm md:text-3xl">Top 20 Ideas</h2>
      <div className="flex gap-2 items-center">
        {/* logo */}
        <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
        <h2 className="font-bold text-sm hidden md:block">
          <span className="font-extrabold text-primary text-[16px]">
            By <br />
            Neeraj Rai
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
