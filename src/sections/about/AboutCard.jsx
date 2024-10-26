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
          <span className="col-span-2">01.</span>
          <h3 className="col-span-6 col-start-6">Web Development</h3>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-10">
        <div className="col-span-7 col-start-6 space-y-4">
          <p className="text-base font-light text-slate-300 md:max-w-[20rem] lg:max-w-[30rem] lg:text-xl lg:font-normal">
            Creating modern, responsive, and accessible web applications.
            Proficient in developing full-stack web applications using modern
            technologies and best practices.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <div className="rounded-full bg-gray-200 px-2 py-1 text-black sm:px-4 sm:py-2">
              React
            </div>
            <div className="rounded-full bg-gray-200 px-2 py-1 text-black sm:px-4 sm:py-2">
              JavaScript
            </div>
            <div className="rounded-full bg-gray-200 px-2 py-1 text-black sm:px-4 sm:py-2">
              CSS/HTML
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
