import SimpleCard from "../../ui/SimpleCard.jsx";

function About() {
  return (
    <section className="relative mt-40 h-[80vh] p-10">
      <h2 className="z-10 mb-20 text-center font-serif text-4xl font-semibold tracking-tighter">
        Who I am - in a nutshell
      </h2>
      <div className="grid h-4/5 grid-cols-3 gap-20 px-60">
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </div>
    </section>
  );
}

export default About;
