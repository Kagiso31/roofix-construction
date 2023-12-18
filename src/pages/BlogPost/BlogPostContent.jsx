import { NavLink } from "react-router-dom";
import { Calendar, Profile, Comment, Tags, ArrowLeft } from "../../data/icons";
import { blogs } from "../../data";

const BlogPostContent = ({
  id,
  img,
  gallery,
  title,
  body1,
  body2,
  body3,
  body4,
  body5,
  date,
  author,
  authorImg,
  comments,
  authorLink,
  tags,
}) => {
  const previousPost = blogs.find((blog) => blog.id === id - 1);
  return (
    <section className="sm:flex-auto sm:basis-2/3">
      <div className="space-y-6 pb-10">
        <div className="relative group after:absolute before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-all before:duration-500 before:ease-in-out before:hover:opacity-50">
          <div className="flex items-center gap-1 p-4 bg-accent text-white absolute bottom-0 left-4 rounded-t-md sm:left-8">
            <Calendar className="w-5 h-5 fill-white" />
            <p>{date}</p>
          </div>
          <img className="w-full" src={img} />
        </div>

        <div className="">
          <div className="inline-flex gap-2 mr-5">
            {<Profile className="w-5 h-5 fill-accent" />}
            <span>
              By{" "}
              <a
                className="transition-all duration-500 ease-in-out hover:text-accent"
                href={authorLink}
              >
                {author}
              </a>
            </span>
          </div>

          <div className="inline-flex gap-2 mr-5">
            {<Tags className="w-5 h-5 fill-accent" />} Cleaning Roof
          </div>

          <div className="inline-flex gap-2 mr-5">
            {<Comment className="w-5 h-5 fill-accent" />}
            {comments.length} {comments.length !== 1 ? "Comments" : "Comment"}
          </div>
        </div>

        <p>{body1}</p>

        <p>{body2}</p>

        <blockquote className="relative font-normal italic text-xl text-[#707173] p-10 bg-[#f8f8f8] rounded-md border-l-[0.1875rem] border-accent before:absolute before:bottom-0 before:right-[3.125rem]  before:font-black before:translate-x-1/2 before:content-['”'] before:text-9xl before:rotate-180 before:text-[#707173] before:opacity-[0.07]">
          <p className="mb-3">
            Aimply dummy text of the printing and typesetting industry lorem
            Ipsum has been the industry’s standard dummy text ever area sector
            since{" "}
          </p>
          <cite className="font-extrabold text-lg text-[#393738]">
            Jessica Drew
          </cite>
        </blockquote>
        <p>{body3}</p>
        <p>{body4}</p>
        <div className="flex flex-col justify-between w-full gap-4 sm:flex-row">
          {gallery.map((galleryImg, index) => (
            <img
              key={index}
              className="w-[350px] h-[200px] object-cover"
              src={galleryImg}
            />
          ))}
        </div>
        <p>{body5}</p>
      </div>

      {/* tags and socials */}
      <div className="py-8 mb-[3.125rem] border-y border-[#e4e4e4]">
        <div>
          <div>
            <ul>
              {tags.map((tag, index) => (
                <NavLink
                  key={index}
                  to="#"
                  className="inline-block py-2 px-3.5 transition-all duration-300 ease-in-out bg-[#f8f8f8] text-[#707173] capitalize rounded mb-[3px] mr-[3px] hover:bg-accent hover:text-white"
                >
                  {tag}
                </NavLink>
              ))}
            </ul>
          </div>
          <div></div>
        </div>
      </div>

      {/* author */}
      <div className="p-[1.875rem] mb-[3.125rem] rounded-md bg-[#f8f8f8]">
        <div className="flex flex-col gap-[3.125rem] items-center text-center sm:text-left sm:flex-row sm:items-start">
          <div>
            <img className="rounded-full" src={authorImg} />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-xl">{author}</h3>
            <strong className="text-sm text-[#959595]">Author</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              explicabo corrupti porro exercitationem earum, atque suscipit!
              Aliquid, id. Nihil illo aut recusandae fugiat quasi, dignissimos
              distinctio magni magnam? Ex blanditiis harum sapiente.
            </p>
          </div>
        </div>
      </div>

      {/* previous post */}
      {previousPost && (
        <div className="p-10 mb-[3.125rem] rounded border border-[#e4e4e4]">
          <NavLink to={`/roofix-construction/blog/${previousPost.id}`}>
            <div className="relative ps-8 mb-[0.625rem] transition-all duration-300 ease-in-out hover:text-accent">
              <ArrowLeft className="fill-accent absolute -translate-y-1/2 top-1/2 left-0 w-4 h-4" />
              Previous Post
            </div>
            <h3 className="font-bold transition-all duration-300 ease-in-out hover:text-accent">
              {previousPost.title}
            </h3>
          </NavLink>
        </div>
      )}

      {/* leave a reply */}
      <div
        className={`px-12 pb-10 pt-[1.875rem] rounded border border-[#e4e4e4] ${
          previousPost ? "bg-[#f9f9f9]" : "bg-white"
        } `}
      >
        <h3 className="relative font-bold text-[1.375rem] ps-8 mb-5 before:absolute before:-translate-y-1/2 before:top-1/2 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
          Leave a Reply
        </h3>
        <p className="text-[#707173]">
          You must be{" "}
          <NavLink
            to="#"
            className="text-accent transition-all duration-300 ease-in-out hover:text-[#d21c1d]"
          >
            logged in
          </NavLink>{" "}
          to post a comment.
        </p>
      </div>
    </section>
  );
};

export default BlogPostContent;
