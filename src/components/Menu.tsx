import { useNavigate } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const MenuList = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer__grid">
        <button type="button" onClick={() => navigate("/")}>
          <BsHouse />
          Home
        </button>
        <button type="button" onClick={() => navigate("/profile")}>
          <FaUserCircle />
          Profile
        </button>
        <button type="button" onClick={() => navigate("/")}>
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default MenuList;
