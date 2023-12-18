import { useState } from "react";
import { blogs } from "../../data";
import { ChevronDoubleRight, ChevronDoubleLeft } from "../../data/icons";
import ReactPaginate from "react-paginate";
import BlogPost from "./BlogPost";

const BlogList = () => {
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

export default BlogList;
