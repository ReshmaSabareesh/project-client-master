import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.scss";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://ictkerala.org/wp-content/uploads/2019/01/cropped-ict-ico.png"
            alt=""
          />
          <span>
            <Link className="link" to="/">
              HOME
            </Link>
          </span>
          {!user && (
            <div className="dropdown">
              <span>LOGIN</span>
              <div className="options">
                <Link className="link optionsValue" to="/student-login">
                  <span>STUDENT</span>
                </Link>
                <Link className="link optionsValue" to="/employee-login">
                  <span>EMPLOYEE</span>
                </Link>
                <Link className="link optionsValue" to="/admin-login">
                  <span>ADMIN</span>
                </Link>
              </div>
            </div>
          )}
          <div className="dropdown">
            <span>REGISTER</span>
            <div className="options">
              <Link className="link optionsValue" to="/student-register">
                <span>STUDENT</span>
              </Link>
              <Link className="link optionsValue" to="/employee-register">
                <span>EMPLOYEE</span>
              </Link>
            </div>
          </div>

          <span>
            <Link className="link" to="/course">
              COURSES
            </Link>
          </span>
          <span>
            <Link className="link" to="/employee">
              EMPLOYEES
            </Link>
          </span>
          <span>
            <Link className="link" to="/student">
              STUDENT
            </Link>
          </span>
          <span>
            <Link className="link" to="/search">
              SEARCH
            </Link>
          </span>
        </div>
        {user && (
          <div className="right">
            <span>{user.username}</span>
            <Link className="link" to="/">
              <li className="topListItem" onClick={handleLogout}>
                LOGOUT
              </li>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
