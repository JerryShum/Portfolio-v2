import SimpleCard from "../../ui/SimpleCard.jsx";

function About() {
  return (
    <section className="relative mt-40 p-10 md:px-20 lg:px-60">
      <h2 className="z-10 mb-20 text-center font-serif text-4xl font-semibold tracking-tighter md:text-5xl lg:text-6xl">
        Who I am - in a nutshell
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </div>
    </section>
  );
}

export default About;
