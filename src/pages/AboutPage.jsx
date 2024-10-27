import PageHeading from "../ui/Layout/PageHeading";
import FooterComponent from "../ui/Layout/FooterComponent";
import PageWrapper from "../ui/Layout/PageWrapper";

function AboutPage() {
  return (
    <PageWrapper>
      <PageHeading>About Jerry</PageHeading>
      <div className="mt-10 flex flex-col items-center gap-10">
        <div className="w-[90vw] md:w-[60vw] lg:w-[45vw] xl:w-[30vw]">
          <img
            src="/Jerry_OEC_Placeholder.jpeg"
            className="w-full rounded-lg"
          />
        </div>
        <div className="rounded-lgtext-lg flex w-[90vw] flex-col gap-6 font-medium md:w-[60vw] lg:w-[45vw] xl:w-[30vw]">
          <p className="text-xl tracking-wide">
            <span className="text-blue-500">Hello! </span>I’m Jerry, a 4th-year
            Software Engineering student at{" "}
            <span className="bg-gradient-to-r from-blue-700 from-20% to-orange-700 bg-clip-text text-transparent">
              OntarioTech University
            </span>
            , and I’m currently exploring the fascinating intersection of tech
            and business as an{" "}
            <span className="bg-gradient-to-r from-gray-500 to-red-700 bg-clip-text text-transparent">
              IT Business Application Developer intern at Celestica
            </span>
            .
          </p>
          <p className="text-xl tracking-wide">
            {" "}
            My role focuses on designing and implementing{" "}
            <span className="bg-green-500 bg-clip-text text-transparent">
              ServiceNow{" "}
            </span>
            based solutions to improve operational efficiency, support different
            Celestica teams globally, and tackle complex challenges and
            problems.
          </p>
          <p className="text-xl tracking-wide">
            Recently, I’ve been focusing on refining my skills in both{" "}
            <span className="bg-blue-500 bg-clip-text text-transparent">
              front-end
            </span>{" "}
            and{" "}
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              back-end{" "}
            </span>{" "}
            development. My previous experiences have helped me grow into a
            well-rounded developer who’s always eager to learn and adapt.
          </p>
          <p className="text-xl tracking-wide">
            When I’m not coding, you can likely find me exploring new
            technologies, reading a nice book, playing exciting video games, or
            enjoying a good coffee.
          </p>
          <p className="text-xl tracking-wide">
            Thanks for visiting my corner of the web! Feel free to reach out or
            take a look at my resume to learn more about my journey so far. 😁
          </p>
        </div>
      </div>

      <FooterComponent />
    </PageWrapper>
  );
}

export default AboutPage;
