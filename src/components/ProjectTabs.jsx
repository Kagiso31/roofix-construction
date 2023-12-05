import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProjectTabs = ({ projects, projectsTabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All Projects");

  const handleClick = (e, index, tag) => {
    e.preventDefault();
    setSelectedIndex(index);
    setActiveTab(tag);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <ul
          role="tablist"
          className="border-[#d7d7d7] rounded-lg sm:flex sm:flex-wrap border-2"
        >
          {projectsTabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`w-full relative font-medium py-4 px-5 transition-all duration-500 ease hover:text-accent before:absolute before:left-0 before:bottom-0 before:bg-accent before:w-full before:h-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:duration-500 before:ease-in-out sm:w-fit sm:after:bg-[#d7d7d7] sm:after:absolute sm:after:top-1/2 sm:after:right-0 sm:after:w-0.5 sm:after:h-4 sm:after:-translate-y-1/2 sm:after:last-of-type:hidden ${
                selectedIndex === index
                  ? "text-accent before:opacity-100"
                  : "text-black"
              }`}
              onClick={(e) => handleClick(e, index, tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </ul>
      </div>

      <div>
        <div className="grid sm:grid-cols-auto-fit gap-8">
          {activeTab === "All Projects"
            ? projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))
            : projects
                .filter((project) => project.tags.includes(activeTab))
                .map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, img, tags, link }) => {
  return (
    <div className="group isolate relative w-full h-[350px] before:absolute before:inset-0 before:bg-black before:opacity-40">
      <img className="w-full h-full object-cover" src={img} />
      <div className="before:transition-all before:duration-500 before:ease-in-out before:opacity-0  before:bg-black before:absolute before:group-hover:opacity-50 before:inset-0">
        <div className="text-white absolute bottom-7 left-10 space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <strong className="font-medium ps-4">
            {tags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-accent transition-all duration-300 ease-in-out"
              >
                {index !== tags.length - 1 ? `${tag}, ` : `${tag}`}
              </a>
            ))}
          </strong>
          <h3 className="relative font-bold text-2xl ps-4 transition-all duration-300 ease-in-out hover:text-accent before:absolute before:top-0 before:left-0 before:bg-accent before:h-4 before:w-1 before:translate-y-1/2">
            <NavLink to={`/roofix-construction/projects/${link}`}>
              {title}
            </NavLink>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
