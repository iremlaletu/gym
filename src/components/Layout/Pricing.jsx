import PlanList from "../UI/PlanList";
import PriceIcn from "../../assets/img/pricing/icons/price.svg";

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="section-title-group max-w-[480px]"
      >
        <img src={PriceIcn} alt="icon" />
        <h2 className="h2 section-title text-primary-100">Pricing Plan</h2>
      </div>
      <PlanList />
    </section>
  );
};

export default Pricing;
