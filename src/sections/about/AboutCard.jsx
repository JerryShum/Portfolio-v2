import SkillPill from "../../ui/SkillPill";

function AboutCard({ index, id, title, description, skills }) {
  return (
    <div
      className="sticky top-[10%] rounded-lg border-t-2 border-slate-700 bg-black pt-4 shadow-lg sm:pt-8"
      style={{
        top: `calc(${index * 11 + 5}vh)`,
        // marginBottom: `calc(20rem - ${index * 5})`,
      }}
    >
      <div className="mb-12 lg:mb-20">
        <div className="flex gap-4 text-3xl font-semibold md:text-5xl">
          <span className="col-span-2">0{index + 1}.</span>
          <h3 className="col-span-6 col-start-6">{title}</h3>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-10">
        <div className="col-span-7 col-start-6 space-y-4">
          <p className="text-base font-light text-slate-300 md:max-w-[20rem] lg:max-w-[30rem] lg:text-xl lg:font-normal">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {skills.map((skill) => (
              <SkillPill skill={skill} key={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
