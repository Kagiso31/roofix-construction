// Images
import sliderImg1 from "../assets/home/hero-carousel/slider-11.jpeg";
import sliderImg2 from "../assets/home/hero-carousel/slider-21.jpeg";

import service1 from "../assets/home/services/roof_1.jpg";
import service2 from "../assets/home/services/roof_2.jpg";
import service3 from "../assets/home/services/roof_3.jpg";
import service4 from "../assets/home/services/roof_4.jpg";
import service5 from "../assets/home/services/roof_5.jpg";
import service6 from "../assets/home/services/roof_6.jpg";

import project1 from "../assets/home/projects/roof-construction-residential.jpg";
import project2 from "../assets/home/projects/roof-construction-commercial.jpg";
import project3 from "../assets/home/projects/modern-roofing.jpg";
import project4 from "../assets/home/projects/renovation-roof.jpg";
import project5 from "../assets/home/projects/classic-roofing.jpg";
import project6 from "../assets/home/projects/repair-roof.jpg";

// Icons
import {
  Roof1,
  Roof2,
  Roof3,
  Roof4,
  Roof5,
  Roof6,
  Roof7,
  Roof8,
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  YouTube,
  Map,
  Mail,
} from "./icons";

export const iconStyles = {
  NAV_ICON_SIZE: "w-[18px]",
  ICON_COLOR_NEUTRAL: `fill-[#ccc]`,
  ICON_COLOR_ACCENT: `fill-accent`,
  ICON_COLOR_HOVER: `group-hover:fill-accent`,
  ICON_COLOR_HOVER_INVERSE: `group-hover:fill-white`,
  ICON_TRANSITION: "transition-all duration-500 ease-out",
};

// Socials
const socials = {
  facebook: {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: (
      <Facebook
        className={`${iconStyles.ICON_TRANSITION} ${iconStyles.ICON_COLOR_NEUTRAL} ${iconStyles.ICON_COLOR_HOVER} ${iconStyles.NAV_ICON_SIZE}`}
      />
    ),
  },
  twitter: {
    id: 2,
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: (
      <Twitter
        className={`${iconStyles.ICON_TRANSITION} ${iconStyles.ICON_COLOR_NEUTRAL} ${iconStyles.ICON_COLOR_HOVER} ${iconStyles.NAV_ICON_SIZE}`}
      />
    ),
  },
  pinterest: {
    id: 3,
    title: "Pinterest",
    link: "https://www.pinterest.com",
    icon: (
      <Pinterest
        className={`${iconStyles.ICON_TRANSITION} ${iconStyles.ICON_COLOR_NEUTRAL} ${iconStyles.ICON_COLOR_HOVER} ${iconStyles.NAV_ICON_SIZE}`}
      />
    ),
  },
  instagram: {
    id: 4,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: (
      <Instagram
        className={`${iconStyles.ICON_TRANSITION} ${iconStyles.ICON_COLOR_NEUTRAL} ${iconStyles.ICON_COLOR_HOVER} ${iconStyles.NAV_ICON_SIZE}`}
      />
    ),
  },
  youtube: {
    id: 5,
    title: "Youtube",
    link: "https://www.youtube.com",
    icon: (
      <YouTube
        className={`${iconStyles.ICON_TRANSITION} ${iconStyles.ICON_COLOR_NEUTRAL} ${iconStyles.ICON_COLOR_HOVER} ${iconStyles.NAV_ICON_SIZE}`}
      />
    ),
  },
};

export const socialsList = [
  socials.facebook,
  socials.twitter,
  socials.youtube,
  socials.pinterest,
  socials.instagram,
];

// Navigation
const navLinks = {
  home: {
    id: 1,
    title: "Home",
    link: "/roofix-construction",
  },
  about: {
    id: 2,
    title: "About",
    link: "/roofix-construction/about",
  },
  projects: {
    id: 3,
    title: "Projects",
    link: "/roofix-construction/projects",
  },
  blog: {
    id: 4,
    title: "Blog",
    link: "/roofix-construction/blog",
  },
  contact: {
    id: 5,
    title: "Contact",
    link: "/roofix-construction/contact",
  },
};

export const navList = [
  navLinks.home,
  navLinks.about,
  navLinks.projects,
  navLinks.blog,
  navLinks.contact,
];

// Hero
export const slides = [
  {
    id: 1,
    title: "Our Best Roofing Services & Consulting",
    subtitle: "Smart Solution",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tempora voluptatem eligendi eius temporibus deserunt.",
    bgImg: `url(${sliderImg1})`,
  },
  {
    id: 2,
    title: "Our Best Roofing Services & Consulting",
    subtitle: "Smart Solution",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate porta dolor, nec facilisis metus tincidunt ut. Sed a sem.",
    bgImg: `url(${sliderImg2})`,
  },
];

// Features
export const features = [
  {
    id: 1,
    title: "Residential",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste laboriosam numquam?",
    icon: (
      <Roof4
        className={`${iconStyles.ICON_COLOR_HOVER_INVERSE} ${iconStyles.ICON_COLOR_ACCENT} ${iconStyles.ICON_TRANSITION} w-[60px] h-[60px]`}
      />
    ),
  },
  {
    id: 2,
    title: "Commercial",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste laboriosam numquam?",
    icon: (
      <Roof6
        className={`${iconStyles.ICON_COLOR_HOVER_INVERSE} ${iconStyles.ICON_COLOR_ACCENT} ${iconStyles.ICON_TRANSITION} w-[60px] h-[60px]`}
      />
    ),
  },
  {
    id: 3,
    title: "Industrial",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste laboriosam numquam?",
    icon: (
      <Roof2
        className={`${iconStyles.ICON_COLOR_HOVER_INVERSE} ${iconStyles.ICON_COLOR_ACCENT} ${iconStyles.ICON_TRANSITION} w-[60px] h-[60px]`}
      />
    ),
  },
];

// Get To Know
export const getToKnowFeatures = [
  {
    id: 1,
    title: "Build Roof Standard",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque esse illum distinctio dolore amet deleniti?",
    icon: (
      <Roof7
        className={`${iconStyles.ICON_COLOR_HOVER_INVERSE} ${iconStyles.ICON_COLOR_ACCENT} ${iconStyles.ICON_TRANSITION} w-[40px] h-[40px]`}
      />
    ),
  },
  {
    id: 2,
    title: "Renovation Roofing",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error pariatur, vitae eligendi alias omnis voluptas.",
    icon: (
      <Roof8
        className={`${iconStyles.ICON_COLOR_HOVER_INVERSE} ${iconStyles.ICON_COLOR_ACCENT} ${iconStyles.ICON_TRANSITION} w-[40px] h-[40px]`}
      />
    ),
  },
];

// Services
const servicesIconStyles = "w-[48px] fill-white";
const servicesBgStyles = "fill-[#f3f3f3] w-[200px]";
export const servicesTabsConfig = [
  {
    id: 1,
    label: (
      <span>
        Roof <br />
        Installation
      </span>
    ),
    title: "Roof Installation",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime distinctio provident tenetur iusto aliquam ut, illum, consectetur eum blanditiis praesentium reiciendis optio quis.",
    features: [
      "Modified Roofing",
      "Single Ply Roofing",
      "Quality Work",
      "100% Satisfied Reviews",
    ],
    icon: <Roof1 className={`${servicesIconStyles}`} />,
    img: service1,
    bgImg: <Roof1 className={`${servicesBgStyles}`} />,
  },
  {
    id: 2,
    label: (
      <span>
        Roof <br />
        Siding Install
      </span>
    ),
    title: "Roof Siding Install",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quia adipisci quo voluptatibus expedita alias quidem, animi temporibus pariatur exercitationem ea sapiente corrupti.",
    features: [
      "Modified Roofing",
      "Single Ply Roofing",
      "Quality Work",
      "100% Satisfied Reviews",
    ],
    icon: <Roof2 className={`${servicesIconStyles}`} />,
    img: service2,
    bgImg: <Roof2 className={`${servicesBgStyles}`} />,
  },
  {
    id: 3,
    label: (
      <span>
        Roof <br />
        Frame Design
      </span>
    ),
    title: "Roof Frame Design",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore porro, ex iusto sapiente maiores voluptatem accusantium fugiat nesciunt enim unde delectus quod!",
    features: [
      "Modified Roofing",
      "Single Ply Roofing",
      "Quality Work",
      "100% Satisfied Reviews",
    ],
    icon: <Roof3 className={`${servicesIconStyles}`} />,
    img: service3,
    bgImg: <Roof3 className={`${servicesBgStyles}`} />,
  },
  {
    id: 4,
    label: (
      <span>
        Roof <br /> Damage Repair
      </span>
    ),
    title: "Roof Damage Repair",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit possimus consectetur ex odit similique reiciendis, aspernatur tempora at dolores nobis, ea consequuntur velit.",
    features: [
      "Modified Roofing",
      "Single Ply Roofing",
      "Quality Work",
      "100% Satisfied Reviews",
    ],
    icon: <Roof4 className={`${servicesIconStyles}`} />,
    img: service4,
    bgImg: <Roof4 className={`${servicesBgStyles}`} />,
  },
  {
    id: 5,
    label: (
      <span>
        Roof <br /> Cornering
      </span>
    ),
    title: "Roof Cornering",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deleniti, hic repellendus animi, ea praesentium, quia consequatur eaque tempora illum quod veniam corporis.",
    features: [
      "Modified Roofing",
      "Single Ply Roofing",
      "Quality Work",
      "100% Satisfied Reviews",
    ],
    icon: <Roof5 className={`${servicesIconStyles}`} />,
    img: service5,
    bgImg: <Roof5 className={`${servicesBgStyles}`} />,
  },
  {
    id: 6,
    label: (
      <span>
        Roof <br /> Layer Fixing
      </span>
    ),
    title: "Roof Layer Fixing",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint accusantium, provident, quibusdam iure voluptatum odio minus ipsa explicabo dicta at vel quidem.",
    features: [
      "Modified Roofing",
      "Single Ply Roofing",
      "Quality Work",
      "100% Satisfied Reviews",
    ],
    icon: <Roof6 className={`${servicesIconStyles}`} />,
    img: service6,
    bgImg: <Roof6 className={`${servicesBgStyles}`} />,
  },
];

// Why Choose Us
export const whyChooseUsFeatures = [
  {
    id: 1,
    title: "Wooden Frame",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    icon: (
      <Roof7 className={`${iconStyles.ICON_COLOR_ACCENT} w-[60px] h-[60px]`} />
    ),
  },
  {
    id: 2,
    title: "Sliding Layout",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    icon: (
      <Roof8 className={`${iconStyles.ICON_COLOR_ACCENT} w-[60px] h-[60px]`} />
    ),
  },
  {
    id: 3,
    title: "Eco Insulation",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    icon: (
      <Roof6 className={`${iconStyles.ICON_COLOR_ACCENT} w-[60px] h-[60px]`} />
    ),
  },
  {
    id: 4,
    title: "New Roofing",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    icon: (
      <Roof2 className={`${iconStyles.ICON_COLOR_ACCENT} w-[60px] h-[60px]`} />
    ),
  },
];

// Projects
export const projectsTabs = [
  {
    id: 1,
    title: "All Projects",
  },
  {
    id: 2,
    title: "Factory",
  },
  {
    id: 3,
    title: "Residential",
  },
  {
    id: 4,
    title: "Commercial",
  },
  {
    id: 5,
    title: "Interior",
  },
];

export const projects = [
  {
    id: 1,
    title: "Roof Construction",
    tags: ["Factory", "Residential"],
    img: project1,
    link: "#",
  },
  {
    id: 2,
    title: "Roof Construction",
    tags: ["Commercial", "Residential"],
    img: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Modern Roofing",
    tags: ["Commercial", "Residential"],
    img: project3,
    link: "#",
  },
  {
    id: 4,
    title: "Renovation Roof",
    tags: ["Commercial", "Factory", "Residential"],
    img: project4,
    link: "#",
  },
  {
    id: 5,
    title: "Classic Roofing",
    tags: ["Interior", "Residential"],
    img: project5,
    link: "#",
  },
  {
    id: 6,
    title: "Repair Roof",
    tags: ["Interior", "Residential"],
    img: project6,
    link: "#",
  },
];
