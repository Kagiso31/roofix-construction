import { useState } from "react";
import { blogs } from "../../data";
import { ChevronDoubleRight, ChevronDoubleLeft } from "../../data/icons";
import { Profile, Calendar, Comment } from "../../data/icons";
import ReactPaginate from "react-paginate";

const Blogs = () => {
  const [blogPosts] = useState(blogs);
  const [pageNumber, setPageNumber] = useState(0);

  const blogPostsPerPage = 5;
  const pagesVisited = pageNumber * blogPostsPerPage;

  const displayBlogPosts = blogPosts
    .slice(pagesVisited, pagesVisited + blogPostsPerPage)
    .map((blog) => <BlogPost key={blog.id} {...blog} />);

  const pageCount = Math.ceil(blogPosts.length / blogPostsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="sm:flex-auto sm:basis-2/3">
      <div className="space-y-10">
        {displayBlogPosts}
        <ReactPaginate
          previousLabel={<ChevronDoubleLeft className="w-[18px] h-[18px]" />}
          nextLabel={<ChevronDoubleRight className="w-[18px] h-[18px]" />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="flex items-center gap-2"
          previousLinkClassName="bg-[#f2f2f2] text-[#393738] w-[44px] h-[40px] rounded grid place-content-center rounded transition-all duration-500 ease-in-out hover:bg-accent hover:fill-white"
          nextLinkClassName="bg-[#f2f2f2] text-[#393738] w-[44px] h-[40px] rounded grid place-content-center rounded transition-all duration-500 ease-in-out hover:bg-accent hover:fill-white"
          disabledClassName="opacity-0"
          activeClassName="text-white !bg-accent"
          pageClassName="font-bold bg-[#f2f2f2] text-[#393738] w-[44px] h-[40px] rounded grid place-content-center rounded transition-all duration-500 ease-in-out hover:bg-accent hover:text-white"
        />
      </div>
    </section>
  );
};

const BlogPost = ({ img, title, body, date, author, postLink, authorLink }) => {
  return (
    <article className="bg-white rounded-md shadow-lg p-8">
      <div className="grid sm:grid-cols-2 items-center gap-[30px]">
        <div className="blog-card-header relative overflow-hidden flex-auto basis-1/3">
          <img className="w-full rounded-t-md" src={img} />
        </div>

        <div className="flex-auto basis-2/3 grid gap-3">
          <p className="flex items-center gap-1 font-medium text-[0.9375rem] text-[#7b7b7b]">
            <Calendar className="w-[14px] h-[14px] fill-accent" />
            {date}
          </p>
          <h3 className="font-extrabold text-2xl transition-all duration-500 ease-in-out hover:text-accent">
            <a href={postLink}>{title}</a>
          </h3>
          <p className="text-[#707173]">{body}</p>

          <div className="flex justify-between">
            <p className="flex items-center gap-2 font-medium text-[0.9375rem] text-[#7b7b7b]">
              <Profile className="w-[14px] h-[14px] fill-accent" />
              <a
                title={`Post by ${author}`}
                href={authorLink}
                className="transition-all duration-500 ease-in-out hover:text-accent"
              >
                {author}
              </a>
            </p>
            <a className="group flex items-center gap-1">
              <Comment className="w-[14px] h-[14px] fill-accent group-hover:fill-[#d21c1d]" />
              <span className="group-hover:text-[#d21c1d]">0</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blogs;
