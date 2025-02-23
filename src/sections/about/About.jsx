import AboutCard from "./AboutCard";

function About() {
  const data = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting engaging user interfaces with modern frameworks and libraries. Focused on creating responsive, accessible, and performant web applications with smooth animations and interactions.",
      skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting engaging user interfaces with modern frameworks and libraries. Focused on creating responsive, accessible, and performant web applications with smooth animations and interactions.",
      skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting engaging user interfaces with modern frameworks and libraries. Focused on creating responsive, accessible, and performant web applications with smooth animations and interactions.",
      skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
  ];
  return (
    <section className="px-4 sm:px-8">
      <h2 className="mb-10 text-center font-serif text-3xl font-semibold tracking-tighter sm:mb-20 sm:text-4xl md:text-5xl lg:text-6xl">
        What I do - in a nutshell
      </h2>
      <div className="mb-20 w-full">
        <div className="mt-0 flex min-h-[150vh] flex-col justify-center gap-y-16">
          {data.map((skill, index) => (
            <AboutCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
