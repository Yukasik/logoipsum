import "./CardsClientsBlack.css";
import Image from "next/image";

interface CardsClientsBlackProps {
  image: string;
  title: string;
}

const CardsClientsBlack: React.FC<CardsClientsBlackProps> = ({
  image,
  title,
}) => {
  return (
    <div className="cards-clients-black">
      <div className="cards-clients-black-wrap">
        <Image src={image} alt={image} />
        <div className="cards-clients-black-name">
          <h2>{title}</h2>
          <p>Client</p>
        </div>
      </div>
    </div>
  );
};

export default CardsClientsBlack;
