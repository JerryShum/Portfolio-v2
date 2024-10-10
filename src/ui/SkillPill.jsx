function SkillPill({ skill, year }) {
  return (
    <div
      className={`text-md lg:text-md rounded-full border-2 p-2 text-center font-semibold uppercase md:px-4 md:py-2 lg:border-[3px] lg:px-3 lg:py-3 xl:text-xl ${
        skill
          ? "border-slate-400 text-slate-400" // Style for skill
          : "border-b-neutral-300 text-neutral-500" // Style for year
      } `}
    >
      {skill ? skill : year}
    </div>
  );
}

export default SkillPill;
