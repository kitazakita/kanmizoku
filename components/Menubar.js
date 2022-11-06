import Link from "next/link";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Menubar = () => {
  return (
    <>
      <div className="menu-bar">
        <div className="menu-button">
          <div className="menu-box">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>MENU</p>
        </div>

        <div className="page-top-button">
          <div className="top-button">
            <div className="top-box">
              <KeyboardDoubleArrowUpIcon />
            </div>
            <p>TOP</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
