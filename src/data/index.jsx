// Images
import sliderImg1 from "../assets/home/hero-carousel/slider-11.jpeg";
import sliderImg2 from "../assets/home/hero-carousel/slider-21.jpeg";

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
