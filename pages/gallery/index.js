import Head from "next/head";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const sectionList = document.querySelectorAll("section");
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("view");
        } else {
          entry.target.classList.remove("view");
        }
      });
    };
    const ioOptions = {
      root: null,
      rootMargin: "0px 0px -30% 0px",
    };
    const io = new IntersectionObserver(callback, ioOptions);
    sectionList.forEach((valu, i) => {
      io.observe(valu);
    });
  }, []);
  return (
    <>
      <Head>
        <title>甘味族 - ギャラリー -</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menubar />
      <MainVisual />
      <Gallery />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  return (
    <section id="gallery-main-visual">
      <div className="inner-container">
        <img src="./images/gallery-main-img.png" alt="" />
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="title">
        <h1>公式ギャラリー</h1>
      </div>

      <div className="gallery-container">
        <div className="gallery-img">
          <img src="./images/gallery-01.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-02.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-03.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-04.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-05.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-06.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-07.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-08.png" alt="" />
        </div>
        <div className="gallery-img">
          <img src="./images/gallery-09.png" alt="" />
        </div>
      </div>
    </section>
  );
};
