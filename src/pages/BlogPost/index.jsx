import Sidebar from "../../components/Sidebar";
import BlogPostContent from "./BlogPostContent";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { blogs } from "../../data";

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <main>
      <Hero {...blogPost} />
      <div className="py-32">
        <div className="flex flex-wrap px-8 xl:p-0 mx-auto max-w-[1200px]">
          <Sidebar />
          <BlogPostContent {...blogPost} />
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
