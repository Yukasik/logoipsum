import "./Information.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { ArrowWhite, LineTwo } from "@/img";

const Information = () => {
  return (
    <div className="information">
      <div className="information-wrap">
        <div className="information-text">
          <Image src={LineTwo} alt="Line" />
          <h1>You&#39;re in good hands</h1>
          <p>
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </p>
        </div>
        <div className="information-btn">
          <Button imageSrc={ArrowWhite}>Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
