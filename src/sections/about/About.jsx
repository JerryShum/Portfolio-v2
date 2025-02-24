import AboutCard from "./AboutCard";

function About() {
  const data = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Designing and Developoing engaging user interfaces with modern frameworks and libraries. Focused on creating responsive, accessible, and performant web applications with smooth animations and interactions.",
      skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Figma"],
    },
    {
      id: 2,
      title: "Challenge Embracer",
      description:
        "Viewing obstacles as opportunities for growth. Each complex problem is a chance to expand my skills and discover new perspectives in software development. I also love participating in hackathons and engineering competitions!",
      skills: ["Problem Solving", "Resilience", "Adaptability", "Competitive"],
    },
    {
      id: 3,
      title: "Continuous Learner",
      description:
        "Finding joy in the journey of personal growth. I embrace challenges as opportunities, seek out diverse perspectives, and love connecting dots between different fields of knowledge to spark new ideas!",
      skills: ["Quick Learner", "Innovative", "Open-Minded", "Always Curious"],
    },
  ];
  return (
    <section className="px-4 sm:px-8">
      <h2 className="mb-10 text-center font-serif text-3xl font-semibold tracking-tighter sm:mb-20 sm:text-4xl md:text-5xl lg:text-6xl">
        What I do&nbsp; & &nbsp;Who I am
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
