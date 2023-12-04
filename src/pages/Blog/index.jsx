import Hero from "./Hero";
import Blogs from "./Blogs";
import Sidebar from "./Sidebar";

const Blog = () => {
  return (
    <main>
      <Hero />
      <div className="py-32">
        <div className="flex flex-wrap px-8 xl:p-0 mx-auto max-w-[1200px]">
          <Sidebar />
          <Blogs />
        </div>
      </div>
    </main>
  );
};

export default Blog;
