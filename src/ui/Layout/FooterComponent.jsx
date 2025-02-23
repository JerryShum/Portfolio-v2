import Button from "../Button.jsx";
import LinkAnimation from "../LinkAnimation.jsx";
import LocalTime from "../LocalTime.jsx";

function FooterComponent({ contactPage }) {
  return (
    <div className="mt-20 flex min-h-[40vh] flex-col justify-between bg-gradient-to-b from-black to-blue-900 px-10 pb-10 md:px-10 lg:px-40 xl:px-60">
      {/* Heading  */}
      {!contactPage ? (
        <div className="mb-12 flex flex-col items-center gap-10">
          <h1 className="text-center font-serif text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
            Let's work together!
          </h1>
          <Button>Contact Me</Button>
        </div>
      ) : (
        <div className="mt-20"></div>
      )}
      {/* Application Menu: */}
      <div className="mb-12 grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-6 flex flex-col">
          <h2 className="border-b pb-2 font-serif text-xl font-semibold md:text-2xl">
            Menu
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="font-sans">
              <LinkAnimation destination={"/"}>Home</LinkAnimation>
            </li>
            <li className="font-sans">
              <LinkAnimation destination={"/about"}>About</LinkAnimation>
            </li>
            <li className="font-sans">
              <LinkAnimation destination={"/projects"}>Projects</LinkAnimation>
            </li>
            <li className="font-sans">
              <LinkAnimation destination={"/contact"}>Contact</LinkAnimation>
            </li>
          </ul>
        </div>
        <div className="col-span-6 flex flex-col md:col-span-3">
          <h2 className="border-b pb-2 font-serif text-xl font-semibold md:text-2xl">
            Socials
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="font-sans">
              <LinkAnimation
                destination={"https://github.com/JerryShum"}
                targetFlag={true}
              >
                GitHub
              </LinkAnimation>
            </li>
            <li className="font-sans">
              <LinkAnimation
                destination={"https://www.linkedin.com/in/jerry-shum/"}
                targetFlag={true}
              >
                LinkedIn
              </LinkAnimation>
            </li>
            <li className="font-sans">
              <LinkAnimation
                destination={"https://devpost.com/JerryShum"}
                targetFlag={true}
              >
                DevPost
              </LinkAnimation>
            </li>
          </ul>
        </div>
        {/* Local Time */}
        <div className="col-span-12 mt-2 md:col-span-3 md:mt-0">
          <LocalTime />
        </div>
      </div>

      {/* Copyright disclaimer */}
      <div className="w-full text-center opacity-60">© 2024 Jerry Shum </div>
    </div>
  );
}

export default FooterComponent;
