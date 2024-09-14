import "./About.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import Line from "@/img/Line.svg";
import { ArrowTellow, ContentImageLarge } from "@/img";

const About = () => {
  return (
    <div className="about">
      <div className="about-wrap">
        <div className="about-left">
          <Image
            src={ContentImageLarge}
            alt="Content Image Large"
            className="about-left-img"
          />
        </div>
        <div className="about-right">
          <Image src={Line} alt="Line" className="about-right-img" />
          <h1>You&#39;re in good hands</h1>
          <p>
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </p>
          <div className="about-right-btn">
            <Button imageSrc={ArrowTellow}>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
