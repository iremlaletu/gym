import WorkoutSlider from "../UI/WorkoutSlider";
import CalendarIcn from "../../assets/img/workouts/icons/calendar.svg";

const Workouts = () => {
  return (
    <section className="section">
      <div
        className="section-title-group max-w-[540px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={CalendarIcn} alt="icon" />
        <h2 className="h2 section-title text-primary-100 ">
          Training programs
        </h2>
      </div>
      <div data-aos="fade-left" data-aos-delay="200">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;