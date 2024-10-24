function SkillPill({ skill, year }) {
  return (
    <div
      className={`inline-block rounded-full border px-2 py-1 text-center text-base font-semibold uppercase lg:border-[1px] lg:py-2 ${
        skill
          ? "border-slate-400 text-slate-400" // Style for skill
          : "border-b-neutral-300 text-neutral-400" // Style for year
      } `}
    >
      {skill ? skill : year}
    </div>
  );
}

export default SkillPill;
