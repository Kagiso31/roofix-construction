import { useParams } from "react-router-dom";
import { teamMembers } from "../../data";
import { Mail, Phone } from "../../data/icons";

const TeamMemberContent = () => {
  const { name } = useParams();
  const teamMember = teamMembers.find((teamMember) => teamMember.path === name);
  return (
    <section className="py-28 text-[#707173] leading-relaxed">
      <div className="xl:px-0 px:8 mx-auto max-w-[1200px]">
        <div className="flex gap-12 md+:flex-row flex-col items-center">
          <div className=" flex-auto basis-2/4">
            <div className="relative w-fit">
              <img src={teamMember.img} className="rounded-md" />
              <div className="flex absolute bottom-0 w-full justify-center gap-2">
                {teamMember.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    className="group w-[55px] h-[55px] rounded-full bg-white grid place-content-center translate-y-1/2 shadow-md"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-auto basis-3/4 space-y-6">
            <div className="pb-2.5 border-b border-[#d8d8d8]">
              <h2 className="font-bold text-3xl text-[#393738] mb-2.5">
                {teamMember.name}
              </h2>
              <strong className="font-medium text-lg">{teamMember.role}</strong>
            </div>

            <div className="flex gap-3.5">
              <p className="flex gap-2 font-semibold">
                <Mail className="w-5 h-5 fill-accent" />
                {teamMember.email}
              </p>
              <p className="flex gap-2 font-semibold">
                <Phone className="w-5 h-5 fill-accent -rotate-90" />
                {teamMember.phoneNumber}
              </p>
            </div>

            <p className="max-w-[65ch] ">{teamMember.bio}</p>

            <div>
              <h3 className="font-bold text-xl text-[#393738] mb-2.5">
                Areas of Expertise:
              </h3>
              <ul className="ps-5">
                {teamMember.expertise.map((val, index) => (
                  <li
                    key={index}
                    className="relative ps-5 mb-1 before:absolute before:bg-accent before:w-2 before:h-2 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2"
                  >
                    <p>{val}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#393738] mb-2.5">
                Education History:
              </h3>
              <ul className="ps-5">
                {teamMember.education.map((val, index) => (
                  <li
                    key={index}
                    className="relative ps-5 mb-1 last-of-type:mb-0 before:absolute before:bg-accent before:w-2 before:h-2 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2"
                  >
                    <p>{val}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberContent;
