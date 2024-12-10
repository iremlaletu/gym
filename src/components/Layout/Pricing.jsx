import PriceIcn from "../../assets/img/pricing/icons/price.svg";
import { memberships } from "../../utils/data";
import MemberShipCard from "../UI/MemberShipCard";

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="section-title-group max-w-[480px]"
      >
        <img src={PriceIcn} alt="icon" />
        <h2 className="h2 section-title text-primary-100">Membership Plan</h2>
      </div>
      <div className="flex flex-col gap-4 items-center">
        {memberships.map((membership) => (
          <div key={membership.id} className="w-full max-w-4xl">
            <MemberShipCard membership={membership} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
