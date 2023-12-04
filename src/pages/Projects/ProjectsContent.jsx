import ProjectTabs from "../../components/ProjectTabs";
import { projects, projectsTabs } from "../../data";

const ProjectsContent = () => {
  return (
    <section className="py-28">
      <div className="xl:px-0 px-8 mx-auto max-w-[1200px]">
        <ProjectTabs projects={projects} projectsTabs={projectsTabs} />
      </div>
    </section>
  );
};

export default ProjectsContent;
