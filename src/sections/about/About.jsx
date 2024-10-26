import AboutCard from "./AboutCard";

function About() {
  const data = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Creating modern, responsive, and accessible web applications. Proficient in developing full-stack web applications using modern technologies and best practices.",
      skills: ["React", "JavaScript", "CSS/HTML"],
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Creating modern, responsive, and accessible web applications. Proficient in developing full-stack web applications using modern technologies and best practices.",
      skills: ["React", "JavaScript", "CSS/HTML"],
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Creating modern, responsive, and accessible web applications. Proficient in developing full-stack web applications using modern technologies and best practices.",
      skills: ["React", "JavaScript", "CSS/HTML"],
    },
  ];
  return (
    <section className="px-4 sm:px-8">
      <h2 className="mb-10 text-center font-serif text-3xl font-semibold tracking-tighter sm:mb-20 sm:text-4xl md:text-5xl lg:text-6xl">
        What I do - in a nutshell
      </h2>
      <div className="mb-20 w-full">
        <div className="mt-12 flex min-h-[150vh] flex-col justify-center gap-y-16">
          {data.map((skill, index) => (
            <AboutCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>

      {/* <div className="pt-lg mb-40 w-full">
        <div className="mt-12 flex flex-col justify-between gap-y-16">
        
          <div className="sticky top-[10%] rounded-lg border-t-2 border-slate-700 bg-black pt-4 sm:pt-8">
            <div className="mb-12 lg:mb-20">
              <div className="flex gap-4 text-3xl font-semibold md:text-5xl">
                <span className="col-span-2">01.</span>
                <h3 className="col-span-6 col-start-6">Web Development</h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-10">
              <div className="col-span-7 col-start-6 space-y-4">
                <p className="text-base font-light text-slate-300 md:max-w-[20rem]">
                  Creating modern, responsive, and accessible web applications.
                  Proficient in developing full-stack web applications using
                  modern technologies and best practices.
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
          <div className="sticky top-[20%] rounded-lg border-t-2 border-slate-700 bg-black pt-4 sm:pt-8">
            <div className="mb-12 lg:mb-20">
              <div className="flex gap-4 text-3xl font-semibold md:text-5xl">
                <span className="col-span-2">01.</span>
                <h3 className="col-span-6 col-start-6">Web Development</h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-10">
              <div className="col-span-7 col-start-6 space-y-4">
                <p className="text-base font-light text-slate-300 md:max-w-[20rem]">
                  Creating modern, responsive, and accessible web applications.
                  Proficient in developing full-stack web applications using
                  modern technologies and best practices.
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
          <div className="sticky top-[30%] rounded-lg border-t-2 border-slate-700 bg-black pt-4 sm:pt-8">
            <div className="mb-12 lg:mb-20">
              <div className="flex gap-4 text-3xl font-semibold md:text-5xl">
                <span className="col-span-2">01.</span>
                <h3 className="col-span-6 col-start-6">Web Development</h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-10">
              <div className="col-span-7 col-start-6 space-y-4">
                <p className="text-base font-light text-slate-300 md:max-w-[20rem]">
                  Creating modern, responsive, and accessible web applications.
                  Proficient in developing full-stack web applications using
                  modern technologies and best practices.
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
        </div>
      </div> */}
    </section>
  );
}

export default About;
