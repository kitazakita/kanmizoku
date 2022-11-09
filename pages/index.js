import Head from "next/head";
import Link from "next/link";
import Menubar from "../components/Menubar";
import SeparatorMaterial from "../components/SeparatorMaterial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>甘味族</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menubar />
      <MainVisual />
      <About />
      <SeparatorMaterial />
      <Craftsman />
      <SeparatorMaterial />
      <CuteJapaneseSweets />
      <SeparatorMaterial />
      <KuriYoukan />
      <SeparatorMaterial />
      <Souvenir />
      <SeparatorMaterial />
      <EatIn />
      <SeparatorMaterial />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  return (
    <section id="main-visual">
      <Link href="./">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
      </Link>

      <div className="main-visual-inner">
        <h2>1965年創業</h2>
        <div className="img-monaka">
          <img src="./images/monaka.png" alt="" />
        </div>
        <h2>時代と共に</h2>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about">
      <div className="title">
        <h1>甘味族とは</h1>
      </div>

      <p className="description wrapper">
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
      </p>

      <div className="img">
        <img src="./images/karukan.png" alt="" />
      </div>
    </section>
  );
};

const Craftsman = () => {
  return (
    <section id="crafts-man" className="base-design-2colum">
      <div className="title">
        <h1>職人の手で一つ一つ</h1>
      </div>

      <div className="inner-container wrapper">
        <p className="left-content">
          テキストが入ります。テキストが入ります。テキストが入ります。
          テキストが入ります。テキストが入ります。テキストが入ります。
        </p>
        <div className="right-content">
          <img src="./images/moti.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const CuteJapaneseSweets = () => {
  return (
    <section id="cute-japanese-sweets">
      <div className="title">
        <h1>かわいい和菓子</h1>
      </div>

      <div className="cute-japanese-sweets-innner wrapper">
        <div className="left-content">
          <img src="./images/sakura-manju.png" alt="" />
        </div>

        <p className="right-content">
          テキストが入ります。テキストが入ります。テキストが入ります。
          テキストが入ります。テキストが入ります。テキストが入ります。
        </p>
      </div>
      <div className="cute-japanese-sweets-innner wrapper mt-4rem">
        <div className="left-content">
          <img src="./images/kaki-manju.png" alt="" />
        </div>

        <p className="right-content">
          テキストが入ります。テキストが入ります。テキストが入ります。
          テキストが入ります。テキストが入ります。テキストが入ります。
        </p>
      </div>
    </section>
  );
};

const KuriYoukan = () => {
  return (
    <section id="kuri-youkan" className="base-design-2colum">
      <div className="title">
        <h1>職人の手で一つ一つ</h1>
      </div>

      <div className="inner-container wrapper">
        <p className="left-content">
          テキストが入ります。テキストが入ります。テキストが入ります。
          テキストが入ります。テキストが入ります。テキストが入ります。
        </p>
        <div className="right-content">
          <img src="./images/kuri-youkan.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const Souvenir = () => {
  return (
    <section id="souvenir" className="wrapper">
      <div className="title">
        <h1>お土産にもピッタリ</h1>
      </div>

      <p className="description">
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
      </p>

      <div className="img-grid">
        <div className="img">
          <img src="./images/kuri-dorayaki.png" alt="" />
        </div>
        <div className="img">
          <img src="./images/kasutera-dorayaki.png" alt="" />
        </div>
        <div className="img">
          <img src="./images/usagimoti.png" alt="" />
        </div>
        <div className="img">
          <img src="./images/kasutera.png" alt="" />
        </div>
      </div>

      <p className="description">
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
        テキストが入ります。テキストが入ります。テキストが入ります。
      </p>
    </section>
  );
};

const EatIn = () => {
  return (
    <section id="eat-in" className="base-design-2colum">
      <div className="title">
        <h1>店内でもお召し上がりいただけます</h1>
      </div>

      <div className="inner-container wrapper">
        <p className="left-content">
          テキストが入ります。テキストが入ります。テキストが入ります。
          テキストが入ります。テキストが入ります。テキストが入ります。
        </p>
        <div className="right-content">
          <img src="./images/shop.png" alt="" />
        </div>
      </div>
    </section>
  );
};
