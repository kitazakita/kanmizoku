import Link from "next/link";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useState } from "react";

const Menubar = () => {
  const [mainMenuToggle, setMainMenuToggle] = useState(false);

  const clickMenuToggle = () => {
    setMainMenuToggle((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <MainMenu display={mainMenuToggle ? true : false} />
      <div className="menu-bar">
        <div className="menu-button" onClick={clickMenuToggle}>
          <div className={mainMenuToggle ? "menu-box active" : "menu-box"}>
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

const MainMenu = (props) => {
  return (
    <>
      <div className={props.display ? "main-menu active" : "main-menu"}>
        <nav className="g-nav">
          <ul>
            <li>
              <Link href="#">商品一覧</Link>
            </li>
            <li>
              <Link href="#">アクセス</Link>
            </li>
            <li>
              <Link href="#">ギャラリー</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menubar;
