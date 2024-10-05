import styles from "./HeroPage.module.css";

function HeroPage() {
  return (
    <section
      className={`${styles.sectionbg} flex h-screen flex-col items-center justify-center gap-5`}
    >
      <h1 className="flex items-center justify-center font-serif text-9xl font-bold tracking-wider">
        Jerry Shum
      </h1>
      <h2 className="font-serif text-4xl font-semibold tracking-wider">
        welcome to the show
      </h2>
      <img
        className="absolute bottom-24"
        src="/public/🦆 icon _chevron bottom_.svg"
      />
    </section>
  );
}

export default HeroPage;
