import Hero from "./Hero";
import ProjectDescription from "./ProjectDescription";
import ProjectGallery from "./ProjectGallery";
import RelatedProjects from "./RelatedProjects";

const Project = () => {
  return (
    <main>
      <Hero />
      <section className="py-28">
        <div className="max-w-[1200px] px-8 mx-auto xl:px-0">
          <ProjectDescription />
          <ProjectGallery />
        </div>
      </section>
      <RelatedProjects />
    </main>
  );
};

export default Project;
