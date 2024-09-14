import Button from "@/components/button/Button";
import "./ModernHouse.css";
import SwiperPhoto from "@/components/swiper/swiperPhoto/SwiperPhoto";
import { ArrowTellow, KayleyHall } from "@/img";
import Image from "next/image";
import { Bed, Garage, Shower, Size, Date, CheckYellow } from "@/img/imgCards";

const ModernHouse = () => {
  return (
    <div className="modern-house">
      <div className="modern-house-wrap">
        <div className="modern-house-header">
          <div className="modern-house-header-info">
            <div className="modern-house-header-info-left">
              <h2>Modern House</h2>
              <p>3002 Foster Ave, Brooklyn, NY 11210, USA</p>
            </div>
            <div className="modern-house-header-info-right">
              <h2>$450,000</h2>
              <p>$2,800/sq ft</p>
            </div>
          </div>
        </div>
        <div className="modern-house-review">
          <div className="modern-house-review-photos">
            <SwiperPhoto />
          </div>
          <div className="modern-house-review-form">
            <div className="modern-house-review-form-profile">
              <div className="modern-house-review-form-profile-photo">
                <Image src={KayleyHall} alt="Kayley Hall" />
              </div>
              <div className="modern-house-review-form-profile-info">
                <h3>Kayley Hall</h3>
                <p>View profile</p>
              </div>
            </div>
            <div className="modern-house-review-form-inputs">
              <div className="modern-house-review-form-input">
                <input type="text" id="name" placeholder="Name" required />
              </div>
              <div className="modern-house-review-form-input">
                <input type="tel" id="phone" placeholder="Phone" required />
              </div>
              <div className="modern-house-review-form-input">
                <input type="email" id="email" placeholder="Email" required />
              </div>
              <div className="modern-house-review-form-input">
                <textarea
                  id="message"
                  placeholder="Hello, I am interested in…"
                  required
                />
              </div>
            </div>
            <div className="modern-house-review-form-bnt">
              <Button imageSrc={ArrowTellow}>Learn more</Button>
            </div>
          </div>
        </div>
        <div className="modern-house-blocks-wrap">
          <div className="modern-house-details">
            <div className="modern-house-details-wrap">
              <div className="modern-house-details-info">
                <h2>Details</h2>
              </div>
              <div className="modern-house-details-blocks">
                <div className="modern-house-details-block-bed">
                  <Image src={Bed} alt="Bed" />
                  <p>4</p>
                </div>
                <div className="modern-house-details-block-shower">
                  <Image src={Shower} alt="Shower" />
                  <p>2</p>
                </div>
                <div className="modern-house-details-block-size">
                  <Image src={Size} alt="Size" />
                  <p>2</p>
                </div>
                <div className="modern-house-details-block-garage">
                  <Image src={Garage} alt="Garage" />
                  <p>1</p>
                </div>
                <div className="modern-house-details-block-date">
                  <Image src={Date} alt="Date" />
                  <p>2007</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modern-house-description">
            <div className="modern-house-description-wrap">
              <div className="modern-house-description-info">
                <h2>Description</h2>
              </div>
              <div className="modern-house-description-text">
                <p>
                  At vero eos et iusto odio dignissimos ducimus, qui haec putat,
                  ut ipsi auctori huius disciplinae placet: constituam, quid sit
                  numeranda nec me ab illo inventore veritatis et expedita
                  distinctio nam libero tempore, cum memoriter, tum etiam ac
                  ratione.
                </p>
                <p>
                  Si sine metu degendae praesidia firmissima filium morte
                  multavit si sine causa? quae fuerit causa, mox videro; interea
                  hoc tenebo, si ob rem voluptas assumenda est, quid sit
                  extremum et inter mediocrem animadversionem atque natum sit, a
                  natura incorrupte.
                </p>
                <p>
                  Omne animal, simul atque in sanguinem suum tam inportuno
                  tamque crudeli; sin, ut earum motus et accusamus et
                  argumentandum et dolore suo sanciret militaris imperii
                  disciplinam exercitumque in liberos atque haec ratio late
                  patet in quo pertineant non possim.
                </p>
              </div>
            </div>
          </div>
          <div className="modern-house-features">
            <div className="modern-house-features-wrap">
              <div className="modern-house-features-info">
                <h2>Features</h2>
              </div>
              <div className="modern-house-features-points">
                <div className="modern-house-features-points-left">
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                </div>
                <div className="modern-house-features-points-middle">
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                </div>
                <div className="modern-house-features-points-right">
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="modern-house-features-point">
                    <Image src={CheckYellow} alt="Check Yellow" />
                    <p>Air Conditioning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHouse;
