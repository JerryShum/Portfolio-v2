function SkillPill({ skill, year }) {
  return (
    <div
      className={`text-md rounded-3xl border-2 px-2 py-1 text-center font-semibold uppercase ${
        skill
          ? "border-slate-600 text-slate-600" // Style for skill
          : "text-netural-500 border-b-neutral-300" // Style for year
      }`}
    >
      {skill ? skill : year}
    </div>
  );
}

export default SkillPill;
