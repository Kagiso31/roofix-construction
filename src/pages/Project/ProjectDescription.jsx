import { useParams } from "react-router-dom";
import { projects } from "../../data";
import { Star } from "../../data/icons";

const ProjectDescription = () => {
  const { name } = useParams();
  const { title, bio1, bio2, details } = projects.find(
    (project) => project.link === name
  );

  return (
    <div className="grid md+:grid-cols-2 gap-[1.875rem] md+:items-end">
      <div className="text-[#707173] pr-4">
        <h2 className="relative font-bold text-3xl text-[#393738] mb-4 before:block before:absolute before:bg-accent before:w-1 before:-left-4 before:top-0 before:bottom-0">
          {title}
        </h2>
        <p className="mb-5">{bio1}</p>
        <p>{bio2}</p>
      </div>
      <div className="text-[#393738]">
        <ul className="space-y-3">
          {details.map((detail) => {
            return (
              <li className="flex items-center gap-4 pb-3 border-b border-b-[#dedede] font-medium text-lg text-[#393738]">
                <p className="relative min-w-[5rem] sm:min-w-[6.25rem] after:absolute after:content-[':'] after:right-0 after:text-xl after:text-[#393738]">
                  {detail.title}
                </p>
                <p>
                  {detail.title === "Category" ? (
                    <strong className="font-medium">
                      {detail.value.map((tag, index) => (
                        <a
                          key={index}
                          href="#"
                          className="text-[#707173] hover:text-accent transition-all duration-300 ease-in-out"
                        >
                          {index !== detail.value.length - 1
                            ? `${tag}, `
                            : `${tag}`}
                        </a>
                      ))}
                    </strong>
                  ) : detail.title === "Rating" ? (
                    [...Array(parseInt(detail.value))].map(() => (
                      <Star className="w-5 h-5 fill-yellow-500 inline-block ml-1 first-of-type:ml-0" />
                    ))
                  ) : (
                    detail.value
                  )}

                  {}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDescription;
