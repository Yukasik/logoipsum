import "./Main.css";
import Header from "@/components/header/Header";
import Image from "next/image";
import { ArrowTellow } from "@/img";

const Main = () => {
  return (
    <div className="main">
      <Header isBackgroundTransparent={true} />
      <div className="main-wrap">
        <div className="main-info">
          <h1>Beautiful homes made for you</h1>
          <p>
            In oculis quidem se esse admonere interesse enim maxime placeat,
            facere possimus, omnis. Et quidem faciunt, ut labore et accurate
            disserendum et harum quidem exercitus quid.
          </p>
        </div>
        <div className="main-panel">
          <p>See all listings</p>
          <Image src={ArrowTellow} alt="arrow" className="main-panel-img" />
        </div>
      </div>
    </div>
  );
};

export default Main;
