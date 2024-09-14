import "./CardsClientsWhite.css";
import Image from "next/image";

interface CardsClientsWhiteProps {
  image: string;
  title: string;
}

const CardsClientsWhite: React.FC<CardsClientsWhiteProps> = ({
  image,
  title,
}) => {
  return (
    <div className="cards-clients-white">
      <div className="cards-clients-white-wrap">
        <Image src={image} alt={image} />
        <div className="cards-clients-white-name">
          <h2>{title}</h2>
          <p>Client</p>
        </div>
      </div>
    </div>
  );
};

export default CardsClientsWhite;
