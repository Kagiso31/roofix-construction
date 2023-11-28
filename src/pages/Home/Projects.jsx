import ProjectsTabs from "./ProjectsTabs";

const Projects = () => {
  return (
    <section className="py-28 px-8 xl:px-0">
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div className="grid gap-8 md+:grid-cols-2 md+:justify-start md+:items-end">
          <div className="space-y-5">
            <strong className="relative text-sm text-[#707173] uppercase tracking-widest ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
              Latest Projects
            </strong>
            <h2 className="font-extrabold text-4xl">Explore Our Recent Work</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex
            enim illum dolore quam consectetur soluta. Illum rem, dolore quas
            impedit ducimus voluptates, molestias quaerat alias temporibus
            aperiam aspernatur!
          </p>
        </div>

        {/* Tabs */}
        <ProjectsTabs />
      </div>
    </section>
  );
};

export default Projects;
