import { blogs } from "../../data";
import { Calendar, Profile } from "../../data/icons";

const Blogs = () => {
  return (
    <section className="py-28 px-8 xl:px-0 bg-[#F8F8F8]">
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div className="grid gap-8 md+:grid-cols-2 md+:justify-start md+:items-end">
          <div className="space-y-5">
            <strong className="relative text-sm text-[#707173] uppercase tracking-widest ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
              What's New
            </strong>
            <h2 className="font-extrabold text-4xl md+:w-[18ch]">
              Our Latest News & Blog Post
            </h2>
          </div>
          <p className="text-[#646464]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex
            enim illum dolore quam consectetur soluta. Illum rem, dolore quas
            impedit ducimus voluptates, molestias quaerat alias temporibus
            aperiam aspernatur!
          </p>
        </div>

        <section className="grid md+:grid-cols-auto-fit gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </section>
      </div>
    </section>
  );
};

const BlogCard = ({ title, body, date, author, img, postLink, authorLink }) => {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="blog-card-header relative overflow-hidden">
        <img className="w-full rounded-t-md" src={img} />
      </div>
      <div className="flex flex-col gap-3 px-9 pb-9 pt-6 sm:p-9">
        <div className="flex flex-col-reverse gap-1 justify-between w-full sm:flex-row sm:items-center">
          <p className="flex items-center gap-1 font-medium text-[0.9375rem] text-[#7b7b7b]">
            <Calendar className="w-[14px] h-[14px] fill-accent" />
            {date}
          </p>
          <p className="flex items-center gap-2 font-medium text-[0.9375rem] text-accent">
            <Profile className="w-[14px] h-[14px] fill-accent" />
            <a title={`Post by ${author}`} href={authorLink}>
              {author}
            </a>
          </p>
        </div>
        <h3 className="font-bold text-2xl transition-all duration-500 ease-in-out hover:text-accent">
          <a href={postLink}>{title}</a>
        </h3>
        <p className="text-[#707173]">{body}</p>
      </div>
    </div>
  );
};

export default Blogs;
