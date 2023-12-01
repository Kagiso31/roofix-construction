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

import pricing1 from "../assets/home/pricing-plans/price_bg1.jpg";
import pricing2 from "../assets/home/pricing-plans/price_bg2.jpg";
import pricing3 from "../assets/home/pricing-plans/price_bg3.jpg";

import testimonial1 from "../assets/home/testimonials/testimonial-1.jpg";
import testimonial2 from "../assets/home/testimonials/testimonial-2.jpg";
import testimonial3 from "../assets/home/testimonials/testimonial-3.jpg";

import blog1 from "../assets/home/blogs/blog1.jpg";
import blog2 from "../assets/home/blogs/blog2.jpg";
import blog3 from "../assets/home/blogs/blog3.jpg";

import history1988 from "../assets/about/history/1988.jpg";
import history2000 from "../assets/about/history/2000.jpg";
import history2008 from "../assets/about/history/2008.jpg";
import history2015 from "../assets/about/history/2015.jpg";
import history2023 from "../assets/about/history/2023.jpg";

import team1 from "../assets/about/team/team1.jpg";
import team2 from "../assets/about/team/team2.jpg";
import team3 from "../assets/about/team/team3.jpg";

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
  Linkedin,
  MailOutline,
  Phone,
  Location,
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
  linkedin: {
    id: 6,
    title: "Linkedin",
    link: "https://www.linkedin.com",
    icon: (
      <Linkedin
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

// Pricing Plan
export const pricingPlans = [
  {
    id: 1,
    title: "Residential",
    price: 199,
    img: pricing1,
    features: [
      "Maintenance of fences",
      "Gate maintenance",
      "Checking electrical wiring",
      "Maintenance of barriers",
      "Configuring access systems",
      "Video surveillance system support",
      "Staff training",
    ],
  },
  {
    id: 2,
    title: "Commercial",
    price: 299,
    img: pricing2,
    features: [
      "Maintenance of fences",
      "Gate maintenance",
      "Checking electrical wiring",
      "Maintenance of barriers",
      "Configuring access systems",
      "Video surveillance system support",
      "Staff training",
    ],
  },
  {
    id: 3,
    title: "Industrial",
    price: 399,
    img: pricing3,
    features: [
      "Maintenance of fences",
      "Gate maintenance",
      "Checking electrical wiring",
      "Maintenance of barriers",
      "Configuring access systems",
      "Video surveillance system support",
      "Staff training",
    ],
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Hailey Cooper",
    profession: "Artist",
    comment:
      "“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor laboriosam, nesciunt odio corporis at ab amet inventore libero repellendus cumque, dolores atque iure numquam non similique rerum aut quaerat repudiandae animi! ”",
    img: testimonial1,
  },
  {
    id: 2,
    name: "Miles Morales",
    profession: "Student",
    comment:
      "“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor laboriosam, nesciunt odio corporis at ab amet inventore libero repellendus cumque, dolores atque iure numquam non similique rerum aut quaerat repudiandae animi! ”",
    img: testimonial2,
  },
  {
    id: 3,
    name: "Michelle Jones",
    profession: "Model",
    comment:
      "“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor laboriosam, nesciunt odio corporis at ab amet inventore libero repellendus cumque, dolores atque iure numquam non similique rerum aut quaerat repudiandae animi! ”",
    img: testimonial3,
  },
];

export const blogs = [
  {
    id: 1,
    img: blog1,
    title: "10 Roof Facts You Should Know",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sequi reiciendis id ullam adipisci laudantium, doloribus praesentium atque...",
    date: "18 November 2020",
    author: "RadiusTheme",
    postLink: "#",
    authorLink: "#",
  },
  {
    id: 2,
    img: blog2,
    title: "Best Roof Designs For Your Home",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sequi reiciendis id ullam adipisci laudantium, doloribus praesentium atque...",
    date: "13 November 2020",
    author: "RadiusTheme",
    postLink: "#",
    authorLink: "#",
  },
  {
    id: 3,
    img: blog3,
    title: "Best Roof Designs For Your Home",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sequi reiciendis id ullam adipisci laudantium, doloribus praesentium atque...",
    date: "13 November 2020",
    author: "RadiusTheme",
    postLink: "#",
    authorLink: "#",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Damage Roofing",
    link: "#",
  },
  {
    id: 2,
    title: "Siding Corner",
    link: "#",
  },
  {
    id: 3,
    title: "Roof Repair",
    link: "#",
  },
  {
    id: 4,
    title: "Roof Installation",
    link: "#",
  },
  {
    id: 5,
    title: "Roof Renovation",
    link: "#",
  },
  {
    id: 6,
    title: "Roof Animation",
    link: "#",
  },
];

export const workingHours = [
  {
    id: 1,
    day: "Monday",
    timePeriod: "10.00AM - 4.00PM",
  },
  {
    id: 2,
    day: "Tuesday",
    timePeriod: "10.00AM - 4.00PM",
  },
  {
    id: 3,
    day: "Wednesday",
    timePeriod: "10.00AM - 4.00PM",
  },
  {
    id: 4,
    day: "Thursday",
    timePeriod: "10.00AM - 4.00PM",
  },
  {
    id: 5,
    day: "Friday",
    timePeriod: "Closed",
  },
];

// About

export const historyTabsConfig = [
  {
    id: 1,
    label: "1988",
    title: "Roofing History (1988)",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni aliquam impedit porro facilis nisi corrupti ut, ullam voluptate architecto pariatur, deleniti laborum! Nesciunt architecto laudantium dicta excepturi repellat voluptatem.",
    features: [
      "Technology Management",
      "Roofing Solutions",
      "Modern Worker",
      "Quick Response",
    ],
    img: history1988,
  },
  {
    id: 2,
    label: "2000",
    title: "Roofing History (2000)",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sint incidunt fugit obcaecati, eum ipsam consectetur quisquam voluptatibus repellat dolor hic quis qui unde, voluptates provident minima impedit doloribus nesciunt!",
    features: [
      "Technology Management",
      "Roofing Solutions",
      "Modern Worker",
      "Quick Response",
    ],
    img: history2000,
  },
  {
    id: 3,
    label: "2008",
    title: "Roofing History (2008)",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione alias quam ullam corporis, eaque, harum sed nisi ut amet dolores, numquam recusandae consectetur quas cum quod quasi. Voluptatibus, nam.",
    features: [
      "Technology Management",
      "Roofing Solutions",
      "Modern Worker",
      "Quick Response",
    ],
    img: history2008,
  },
  {
    id: 4,
    label: "2015",
    title: "Roofing History (2015)",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa sunt illum iste. Voluptatum, ducimus perspiciatis reprehenderit quod dolorum omnis, itaque pariatur minima officia libero recusandae, corrupti alias eum id?",
    features: [
      "Technology Management",
      "Roofing Solutions",
      "Modern Worker",
      "Quick Response",
    ],
    img: history2015,
  },
  {
    id: 5,
    label: "2023",
    title: "Roofing History (2023)",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sit ab quam porro repudiandae deleniti culpa itaque voluptatem et illo. Itaque dolorum tempora ducimus autem voluptate totam ratione, officia rem!",
    features: [
      "Technology Management",
      "Roofing Solutions",
      "Modern Worker",
      "Quick Response",
    ],
    img: history2023,
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Elizabeth Allan",
    role: "CEO, Roofix",
    img: team1,
    href: "#",
    socials: [
      {
        ...socials.facebook,
        id: 1,
        link: "https://www.facebook.com/?—lizallan—?",
      },
      {
        ...socials.twitter,
        id: 2,
        link: "https://www.twitter.com/?—lizallan—?",
      },
      {
        ...socials.linkedin,
        id: 3,
        link: "https://www.linkedin.com/?—lizallan—?",
      },
      {
        ...socials.instagram,
        id: 4,
        link: "https://www.instagram.com/?—lizallan—?",
      },
    ],
  },
  {
    id: 2,
    name: "Benjamin Reilly",
    role: "COO, Roofix",
    img: team2,
    href: "#",
    socials: [
      {
        ...socials.facebook,
        id: 1,
        link: "https://www.facebook.com/?—benreilly—?",
      },
      {
        ...socials.twitter,
        id: 2,
        link: "https://www.twitter.com/?—benreilly—?",
      },
      {
        ...socials.linkedin,
        id: 3,
        link: "https://www.linkedin.com/?—benreilly—?",
      },
      {
        ...socials.instagram,
        id: 4,
        link: "https://www.instagram.com/?—benreilly—?",
      },
    ],
  },
  {
    id: 3,
    name: "Cindy Moon",
    role: "CFO, Roofix",
    img: team3,
    href: "#",
    socials: [
      {
        ...socials.facebook,
        id: 1,
        link: "https://www.facebook.com/?—cindymoon—?",
      },
      {
        ...socials.twitter,
        id: 2,
        link: "https://www.twitter.com/?—cindymoon—?",
      },
      {
        ...socials.linkedin,
        id: 3,
        link: "https://www.linkedin.com/?—cindymoon—?",
      },
      {
        ...socials.instagram,
        id: 4,
        link: "https://www.instagram.com/?—cindymoon—?",
      },
    ],
  },
];

export const getInTouchCards = [
  {
    id: 1,
    title: "Our head office address",
    body: "Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,",
    body2: "Australia City",
    icon: <Location className="w-[30px] h-[30px] fill-white" />,
  },
  {
    id: 2,
    title: "Mail us for information",
    body: "info@roofing.com",
    icon: <MailOutline className="w-[30px] h-[30px] fill-white" />,
  },
  {
    id: 3,
    title: "Emergency Phone",
    body: "+8123 (456) 788 99",
    icon: <Phone className="w-[30px] h-[30px] fill-white" />,
  },
];
