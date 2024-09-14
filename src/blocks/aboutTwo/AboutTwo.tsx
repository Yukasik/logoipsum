import "./AboutTwo.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import Line from "@/img/Line.svg";
import { ArrowTellow, GoodHands } from "@/img";

const AboutTwo = () => {
  return (
    <div className="about-two">
      <div className="about-two-wrap">
        <div className="about-two-left">
          <Image src={Line} alt="Line" className="about-two-left-img" />
          <h1>You&#39;re in good hands</h1>
          <p>
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </p>
          <div className="about-two-left-btn">
            <Button imageSrc={ArrowTellow}>Learn more</Button>
          </div>
        </div>
        <div className="about-two-right">
          <Image
            src={GoodHands}
            alt="Good Hands"
            className="about-two-right-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
