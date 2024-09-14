import "./Clients.css";
import Image from "next/image";
import CardsClientsWhite from "@/components/cards/cardsClientsWhite/CardsClientsWhite";
import CardsClientsBlack from "@/components/cards/cardsClientsBlack/CardsClientsBlack";
import { LaraMadrigal, LineThree } from "@/img";

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients-wrap">
        <div className="clients-info">
          <Image src={LineThree} alt="Line" />
          <p>
            “Certe, inquam, pertinax non existimant oportere exquisitis
            rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et
            quidem faciunt, ut aut.”
          </p>
        </div>
      </div>
      <div className="clients-cards">
        <div className="clients-card">
          <CardsClientsWhite image={LaraMadrigal} title="Lara Madrigal" />
        </div>
        <div className="clients-card">
          <CardsClientsBlack image={LaraMadrigal} title="Lara Madrigal" />
        </div>
        <div className="clients-card">
          <CardsClientsWhite image={LaraMadrigal} title="Lara Madrigal" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
