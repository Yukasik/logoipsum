import "./Assortment.css";
import Image from "next/image";
import Line from "@/img/Line.svg";
import CardsCatalog from "@/components/cards/cardsCatalog/CardsCatalog";
import {
  HouseExample1,
  HouseExample2,
  HouseExample3,
  HouseExample4,
  HouseExample5,
  HouseExample6,
} from "@/img/imgCards";

const Assortment = () => {
  return (
    <div className="assortment">
      <div className="assortment-wrap">
        <div className="assortment-title">
          <Image src={Line} alt="Line" />
          <h1>Find your next place to live</h1>
        </div>
        <div className="assortment-search">
          <div className="assortment-search-looking">
            <form className="assortment-search-form-looking-for">
              <select name="looking-for" id="looking-for-select">
                <option value="">Looking for</option>
                <option value="petersburg">Malto House</option>
                <option value="samara">Malto House</option>
                <option value="perm">Malto House</option>
                <option value="novosibirsk">Malto House</option>
              </select>
            </form>
          </div>
          <div className="assortment-search-location">
            <form className="assortment-search-form-location">
              <select name="location-for" id="location-select">
                <option value="">Location</option>
                <option value="petersburg">Malto House</option>
                <option value="samara">Malto House</option>
                <option value="perm">Malto House</option>
                <option value="novosibirsk">Malto House</option>
              </select>
            </form>
          </div>
          <div className="assortment-search-property-type">
            <form className="assortment-search-form-property-type">
              <select name="property-type-for" id="property-type-select">
                <option value="">Property Type</option>
                <option value="petersburg">Malto House</option>
                <option value="samara">Malto House</option>
                <option value="perm">Malto House</option>
                <option value="novosibirsk">Malto House</option>
              </select>
            </form>
          </div>
          <div className="assortment-search-price">
            <form className="assortment-search-form-price">
              <select name="price" id="price-select">
                <option value="">Price</option>
                <option value="petersburg">Malto House</option>
                <option value="samara">Malto House</option>
                <option value="perm">Malto House</option>
                <option value="novosibirsk">Malto House</option>
              </select>
            </form>
          </div>
        </div>
        <div className="assortment-cards">
          <CardsCatalog
            image={HouseExample1}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
          <CardsCatalog
            image={HouseExample2}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
          <CardsCatalog
            image={HouseExample3}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
          <CardsCatalog
            image={HouseExample4}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
          <CardsCatalog
            image={HouseExample5}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
          <CardsCatalog
            image={HouseExample6}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
        </div>
      </div>
    </div>
  );
};

export default Assortment;
