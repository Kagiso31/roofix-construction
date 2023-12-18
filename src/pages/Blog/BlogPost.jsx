import { Profile, Calendar, Comment } from "../../data/icons";
import { NavLink } from "react-router-dom";

const BlogPost = ({
  id,
  img,
  title,
  summary,
  date,
  author,
  comments,
  postLink,
  authorLink,
}) => {
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
            <NavLink to={postLink}>{title}</NavLink>
          </h3>
          <p className="text-[#707173]">{summary}</p>

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
              <span className="group-hover:text-[#d21c1d]">
                {comments.length}
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
