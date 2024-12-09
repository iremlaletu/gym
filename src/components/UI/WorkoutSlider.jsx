import { workouts } from "../../utils/data";

const WorkoutSlider = () => {
  const { programs } = workouts;

  const chunkPrograms = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groupedPrograms = chunkPrograms(programs, 3);

  return (
    <div className="flex justify-center">
      <div className="space-y-4 w-full max-w-4xl">
        {groupedPrograms.map((group, idx) => (
          <div
            data-aos={
              idx === 0 ? "fade-left" : idx === 1 ? "fade-right" : "fade-left"
            }
            className="flex justify-between gap-4"
            key={idx}
          >
            {group.map((program, programIdx) => {
              const { image, name } = program;
              return (
                <div key={programIdx} className="w-1/3 relative">
                  <img
                    className="w-full h-48 object-cover rounded-lg"
                    src={image}
                    alt={name}
                  />
                  <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded-lg">
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSlider;
