import { useParams } from "react-router-dom";
import projectsData from "../../projects.json";
import PageHeading from "../../ui/Layout/PageHeading";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import FooterComponent from "../../ui/Layout/FooterComponent";
import SkillPill from "../../ui/SkillPill";
import { useEffect } from "react";
import ProjectLink from "../../ui/ProjectLink";

function ProjectDetail() {
  const { projectID } = useParams();
  const project = projectsData.find((project) => project.id === projectID);

  console.log(project);

  if (!project) {
    throw new Error("Project not found!" + projectID);
  }

  return (
    <>
      <PageHeading>{project.projectName}</PageHeading>
      <div className="my-20 grid items-center justify-center gap-4 px-6 md:px-10 lg:grid-cols-11 lg:px-20 xl:mb-40 xl:gap-10 2xl:px-72">
        <motion.img
          src={project.projectImage}
          className="col-span-11 rounded-[30px] lg:col-span-6 lg:mb-0"
        />
        <div className="col-span-11 flex flex-col items-center gap-6 rounded-[30px] p-4 md:p-6 lg:col-span-5 xl:px-10 xl:py-6">
          <p className="w-full border-b py-1 text-start font-serif text-sm font-semibold uppercase text-yellow-300 md:text-base lg:text-lg xl:text-2xl">
            Category:{" "}
            <span className="block font-sans text-sm font-normal capitalize text-white md:text-base lg:text-lg">
              {project.category}
            </span>
          </p>
          <p className="w-full border-b py-1 text-start font-serif text-sm font-semibold uppercase text-green-300 md:text-base lg:text-lg xl:text-2xl">
            Year:{" "}
            <span className="block font-sans text-sm font-normal capitalize text-white md:text-base lg:text-lg">
              {project.year}
            </span>
          </p>
          <p className="w-full border-b py-1 text-start font-serif text-sm font-semibold uppercase text-blue-300 md:text-base lg:text-lg xl:text-2xl">
            Skills:{" "}
            <span className="block space-x-4 font-sans text-sm font-normal capitalize text-white md:text-base lg:text-lg">
              {/* {project.skills.map((skill) => (
                <SkillPill skill={skill} />
              ))} */}
              {project.skills.join(", ")}
            </span>
          </p>
          <p className="w-full border-b py-1 text-start font-serif text-sm font-semibold uppercase text-red-300 md:text-base lg:text-lg xl:text-2xl">
            Description:{" "}
            <span className="block font-sans text-sm font-normal capitalize text-white md:text-base lg:text-lg">
              {project.description}
            </span>
          </p>

          <ProjectLink URL={project.url}>View Project</ProjectLink>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProjectDetail;
