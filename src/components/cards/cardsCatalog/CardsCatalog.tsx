import "./CardsCatalog.css";
import Image from "next/image";
import { Bed, Shower, Size } from "@/img/imgCards/index";

interface CardsCatalogProps {
  image: string;
  title: string;
  places: string;
  showers: string;
  size: string;
}

const CardsCatalog: React.FC<CardsCatalogProps> = ({
  image,
  title,
  places,
  showers,
  size,
}) => {
  return (
    <div className="cards-catalog">
      <Image src={image} alt={image} />
      <div className="cards-catalog-info">
        <h2>{title}</h2>
        <div className="cards-catalog-info-icons">
          <div className="cards-catalog-info-icon-shower">
            <Image src={Shower} alt="Shower" />
            <p>{showers}</p>
          </div>
          <div className="cards-catalog-info-icon-bed">
            <Image src={Bed} alt="Bed" />
            <p>{places}</p>
          </div>
          <div className="cards-catalog-info-icon-size">
            <Image src={Size} alt="Size" />
            <p>{size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCatalog;
