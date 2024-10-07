import SimpleCard from "../../ui/SimpleCard.jsx";

function About() {
  return (
    <section className="relative mt-40 p-10 px-60">
      <h2 className="z-10 mb-20 text-center font-serif text-6xl font-semibold tracking-tighter">
        Who I am - in a nutshell
      </h2>
      <div className="grid grid-cols-3 gap-20">
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </div>
    </section>
  );
}

export default About;
