import Link from "next/link";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

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

        <div
          className={
            mainMenuToggle ? "page-top-button not-visible" : "page-top-button"
          }
        >
          <Scroll to="scroll-top" smooth={true}>
            <div className="top-button">
              <div className="top-box">
                <KeyboardDoubleArrowUpIcon />
              </div>
              <p>TOP</p>
            </div>
          </Scroll>
        </div>
      </div>
    </>
  );
};

const MainMenu = (props) => {
  return (
    <>
      <div
        id="scroll-top"
        className={props.display ? "main-menu active" : "main-menu"}
      >
        <nav className="g-nav">
          <ul>
            <li>
              <Link href="./">トップページ</Link>
            </li>
            <li>
              <Link href="./items">商品一覧</Link>
            </li>
            <li>
              <Link href="./access">アクセス</Link>
            </li>
            <li>
              <Link href="./gallery">ギャラリー</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menubar;
