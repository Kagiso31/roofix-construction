// images
// hero
import sliderImg1 from "../assets/home/hero-carousel/slider-11.jpeg";
import sliderImg2 from "../assets/home/hero-carousel/slider-21.jpeg";

// icon styles
const ICON_SIZE = 18;
const ICON_COLOR_NEUTRAL = `fill-[#ccc]`;
const ICON_COLOR_ACCENT = `fill-accent`;
const ICON_COLOR_HOVER = `group-hover:fill-accent`;
const ICON_COLOR_HOVER_INVERSE = `group-hover:fill-white`;
const ICON_TRANSITION = "transition-all duration-500 ease-out";

export const icons = {
  chevronRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#FFF"
      viewBox="0 0 16 16"
      className={`group-hover:bg-accent p-0.5 bg-[#d5d5d5] rounded-full ${ICON_TRANSITION}`}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  play: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="32"
      className={`fill-accent ${ICON_COLOR_HOVER_INVERSE} ${ICON_TRANSITION}`}
    >
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    </svg>
  ),
  chevronDoubleRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#FFF"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  map: (
    <svg
      className={`${ICON_COLOR_NEUTRAL}`}
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
      />
    </svg>
  ),
  mail: (
    <svg
      className={`${ICON_COLOR_NEUTRAL}`}
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE}
      viewBox="0 0 16 16"
    >
      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
    </svg>
  ),
  facebook: (
    <svg
      className={`${ICON_TRANSITION} ${ICON_COLOR_NEUTRAL} ${ICON_COLOR_HOVER}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={ICON_SIZE}
    >
      <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" />
    </svg>
  ),
  twitter: (
    <svg
      className={`${ICON_TRANSITION} ${ICON_COLOR_NEUTRAL} ${ICON_COLOR_HOVER}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={ICON_SIZE}
    >
      <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
    </svg>
  ),
  youtube: (
    <svg
      className={`${ICON_TRANSITION} ${ICON_COLOR_NEUTRAL} ${ICON_COLOR_HOVER}`}
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE}
      viewBox="0 0 50 50"
    >
      <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
    </svg>
  ),
  pinterest: (
    <svg
      className={`${ICON_TRANSITION} ${ICON_COLOR_NEUTRAL} ${ICON_COLOR_HOVER}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={ICON_SIZE}
    >
      <path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z" />
    </svg>
  ),
  instagram: (
    <svg
      className={`${ICON_TRANSITION} ${ICON_COLOR_NEUTRAL} ${ICON_COLOR_HOVER}`}
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE}
      viewBox="0 0 32 32"
    >
      <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
    </svg>
  ),
  phoneDark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="#000"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
  ),
  phone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
  ),
};

//  Socials
const socials = {
  facebook: {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: icons.facebook,
  },
  twitter: {
    id: 2,
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: icons.twitter,
  },
  pinterest: {
    id: 3,
    title: "Pinterest",
    link: "https://www.pinterest.com",
    icon: icons.pinterest,
  },
  instagram: {
    id: 4,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: icons.instagram,
  },
  youtube: {
    id: 5,
    title: "Youtube",
    link: "https://www.youtube.com",
    icon: icons.youtube,
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

// Home
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

// features
export const features = [
  {
    id: 1,
    title: "Residential",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste laboriosam numquam?",
    icon: (
      <svg
        className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
        height="60px"
        width="60px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 362.787 362.787"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M260.945,144.979c-2.667,0-5.133,1.416-6.477,3.719l-47.484,81.333c-1.354,2.319-1.365,5.186-0.027,7.516 c1.337,2.329,3.818,3.766,6.504,3.766h94.968c2.686,0,5.167-1.437,6.504-3.766c1.338-2.33,1.327-5.196-0.027-7.516l-47.483-81.333 C266.078,146.395,263.612,144.979,260.945,144.979z M226.524,226.312l34.421-58.958l34.42,58.958H226.524z"></path>
            <path d="M355.287,254.69h-175.62l81.278-139.218l62.926,107.783c2.088,3.578,6.683,4.784,10.258,2.696 c3.577-2.088,4.784-6.681,2.695-10.258L267.422,96.815c-0.021-0.036-0.048-0.067-0.069-0.103c-0.126-0.208-0.262-0.408-0.407-0.603 c-0.044-0.059-0.086-0.118-0.131-0.176c-0.183-0.23-0.376-0.451-0.584-0.658c-0.024-0.024-0.051-0.045-0.076-0.069 c-0.186-0.18-0.383-0.349-0.587-0.509c-0.065-0.051-0.132-0.1-0.199-0.148c-0.187-0.137-0.379-0.264-0.578-0.384 c-0.055-0.033-0.108-0.068-0.164-0.1c-0.261-0.147-0.53-0.282-0.809-0.397c-0.011-0.004-0.022-0.008-0.033-0.012 c-0.26-0.106-0.528-0.196-0.802-0.273c-0.073-0.021-0.146-0.038-0.22-0.056c-0.222-0.055-0.447-0.1-0.677-0.135 c-0.079-0.012-0.157-0.026-0.236-0.036c-0.297-0.036-0.598-0.06-0.906-0.06H101.842c-2.667,0-5.133,1.416-6.477,3.719 L1.023,258.408c-1.354,2.319-1.365,5.186-0.027,7.516c1.337,2.329,3.818,3.766,6.504,3.766h86.538c0.008,0,0.015,0.001,0.023,0.001 s0.015-0.001,0.023-0.001h35.889c0.008,0,0.015,0.001,0.023,0.001s0.015-0.001,0.023-0.001h36.586h188.684 c4.143,0,7.5-3.358,7.5-7.5S359.43,254.69,355.287,254.69z M162.298,254.69h-19.263l69.43-119.47 c2.081-3.582,0.865-8.172-2.716-10.253c-3.58-2.083-8.173-0.866-10.253,2.716l-73.81,127.007H107.1l85.192-146.594h55.59 L162.298,254.69z M106.147,108.096h34.091L74.789,220.717c-2.081,3.582-0.865,8.172,2.716,10.253 c1.186,0.689,2.482,1.017,3.762,1.017c2.584,0,5.1-1.337,6.491-3.733l69.83-120.158h17.356L89.751,254.69H20.563L106.147,108.096z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Commercial",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste laboriosam numquam?",
    icon: (
      <svg
        height="60px"
        width="60px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.991 511.991"
        xmlSpace="preserve"
        className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <polygon
            fill="transparent"
            points="426.65,90.657 85.332,90.657 10.662,389.32 71.739,367.994 133.331,389.32 194.658,367.994 255.999,389.32 317.325,367.994 378.651,389.32 439.994,367.994 501.32,389.32 "
          ></polygon>
          <g>
            <polygon
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              points="511.664,386.726 493.008,312.073 493.008,312.073 "
            ></polygon>
            <path
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              d="M511.976,389.086c0.078,3.031-1.156,6-3.453,8.109c-2.906,2.641-7,3.484-10.703,2.203 l-57.826-20.107l-57.827,20.107c-0.016,0-0.016,0-0.031,0c-0.109,0.047-0.219,0.062-0.328,0.109 c-0.203,0.062-0.422,0.125-0.641,0.172c-0.109,0.031-0.234,0.047-0.344,0.078c-0.219,0.047-0.453,0.078-0.672,0.109 c-0.062,0.016-0.109,0.031-0.172,0.031c-0.094,0.016-0.188,0.031-0.281,0.031c-0.078,0.016-0.172,0.016-0.25,0.031 c-0.266,0.016-0.531,0.031-0.812,0.031c-0.125,0-0.266-0.016-0.391-0.016c-0.172-0.016-0.344-0.016-0.5-0.031 c-0.188-0.016-0.375-0.047-0.562-0.062c-0.109-0.016-0.234-0.031-0.359-0.062c-0.188-0.031-0.375-0.062-0.547-0.109 c-0.125-0.031-0.234-0.047-0.344-0.078c-0.187-0.047-0.358-0.109-0.546-0.172c-0.078-0.016-0.156-0.031-0.234-0.062l-57.827-20.107 L259.5,399.398c-0.047,0.016-0.094,0.031-0.141,0.047c-0.156,0.047-0.312,0.094-0.469,0.141c-0.172,0.047-0.328,0.078-0.5,0.125 c-0.141,0.031-0.297,0.062-0.438,0.094c-0.203,0.031-0.391,0.062-0.594,0.094c-0.125,0.016-0.25,0.031-0.375,0.047 c-0.656,0.047-1.328,0.047-1.984,0c-0.125-0.016-0.25-0.031-0.375-0.047c-0.188-0.031-0.391-0.062-0.594-0.094 c-0.141-0.031-0.297-0.062-0.438-0.094c-0.172-0.047-0.328-0.078-0.5-0.125c-0.156-0.047-0.312-0.094-0.469-0.141 c-0.031-0.016-0.094-0.031-0.141-0.047l-57.826-20.107l-57.827,20.107c-0.078,0.031-0.156,0.047-0.234,0.078 c-0.188,0.047-0.359,0.109-0.531,0.156c-0.109,0.031-0.234,0.047-0.344,0.078c-0.188,0.047-0.375,0.078-0.562,0.109 c-0.109,0.031-0.234,0.047-0.344,0.062c-0.188,0.016-0.375,0.047-0.562,0.062c-0.156,0.016-0.328,0.016-0.484,0.031 c-0.141,0-0.281,0.016-0.422,0.016c-0.266,0-0.531-0.016-0.812-0.031c-0.078-0.016-0.156-0.016-0.234-0.031 c-0.094,0-0.188-0.016-0.297-0.031c-0.047,0-0.109-0.016-0.172-0.031c-0.219-0.031-0.438-0.062-0.656-0.109 c-0.125-0.031-0.234-0.047-0.359-0.078c-0.219-0.047-0.438-0.109-0.656-0.188c-0.094-0.031-0.203-0.047-0.297-0.094 c-0.016,0-0.016,0-0.016,0L71.755,379.29l-57.577,20.107c-1.141,0.391-2.328,0.594-3.516,0.594c-2.609,0-5.187-0.969-7.187-2.797 c-2.297-2.094-3.531-5.062-3.469-8.109c0,0.078,0,0.156,0,0.234v32c0,3.452,1.672,6.702,4.484,8.702c2.828,2,6.437,2.5,9.687,1.375 l57.577-20.108l58.092,20.108c2.266,0.781,4.718,0.781,6.984,0l57.827-20.108l57.826,20.108c2.281,0.781,4.75,0.781,7.015,0 l57.826-20.108l57.827,20.108c2.265,0.781,4.733,0.781,7.015,0l57.827-20.108l57.826,20.108c1.141,0.391,2.328,0.594,3.5,0.594 c2.188,0,4.359-0.672,6.172-1.984c2.828-2,4.5-5.234,4.5-8.687v-32C511.992,389.242,511.976,389.164,511.976,389.086z"
            ></path>
            <path
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              d="M511.664,386.726c0.062,0.234,0.109,0.453,0.156,0.688 C511.773,387.18,511.726,386.961,511.664,386.726z"
            ></path>
            <path
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              d="M0.178,387.414c0.031-0.234,0.078-0.453,0.141-0.688C0.256,386.961,0.209,387.18,0.178,387.414z"
            ></path>
            <path
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              d="M511.976,388.773c-0.016-0.125-0.031-0.266-0.031-0.391 C511.945,388.508,511.961,388.648,511.976,388.773z"
            ></path>
            <path
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              d="M511.914,388.101c-0.016-0.156-0.047-0.297-0.062-0.453 C511.867,387.805,511.898,387.945,511.914,388.101z"
            ></path>
            <path
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              d="M0.069,388.101c0.016-0.156,0.047-0.297,0.062-0.453C0.116,387.805,0.084,387.945,0.069,388.101z"
            ></path>
            <path
              className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
              d="M0.022,388.773c0-0.125,0.016-0.266,0.031-0.391C0.038,388.508,0.022,388.648,0.022,388.773z"
            ></path>
          </g>
          <path
            className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
            d="M511.664,386.726l-26.688-106.73c0-0.016,0-0.016,0-0.031L437.01,88.079 c-1.188-4.75-5.453-8.078-10.359-8.078H85.332c-4.891,0-9.156,3.328-10.343,8.078L27.006,279.965c0,0.016,0,0.016,0,0.031 L0.319,386.726c-0.953,3.812,0.266,7.828,3.156,10.469c2,1.828,4.578,2.797,7.187,2.797c1.188,0,2.375-0.203,3.516-0.594 l57.577-20.107l58.092,20.107c0,0,0,0,0.016,0c0.094,0.047,0.203,0.062,0.297,0.094c0.219,0.078,0.438,0.141,0.656,0.188 c0.125,0.031,0.234,0.047,0.359,0.078c0.219,0.047,0.438,0.078,0.656,0.109c0.062,0.016,0.125,0.031,0.172,0.031 c0.109,0.016,0.203,0.031,0.297,0.031c0.078,0.016,0.156,0.016,0.234,0.031c0.281,0.016,0.547,0.031,0.812,0.031 c0.141,0,0.281-0.016,0.422-0.016c0.156-0.016,0.328-0.016,0.484-0.031c0.188-0.016,0.375-0.047,0.562-0.062 c0.109-0.016,0.234-0.031,0.344-0.062c0.188-0.031,0.375-0.062,0.562-0.109c0.109-0.031,0.234-0.047,0.344-0.078 c0.172-0.047,0.344-0.109,0.531-0.156c0.078-0.031,0.156-0.047,0.234-0.078l57.827-20.107l57.826,20.107 c0.047,0.016,0.109,0.031,0.141,0.047c0.156,0.047,0.312,0.094,0.469,0.141c0.172,0.047,0.328,0.078,0.5,0.125 c0.141,0.031,0.297,0.062,0.438,0.094c0.203,0.031,0.406,0.062,0.594,0.094c0.125,0.016,0.25,0.031,0.375,0.047 c0.656,0.047,1.328,0.047,1.984,0c0.125-0.016,0.25-0.031,0.375-0.047c0.203-0.031,0.391-0.062,0.594-0.094 c0.141-0.031,0.297-0.062,0.438-0.094c0.172-0.047,0.328-0.078,0.5-0.125c0.156-0.047,0.312-0.094,0.469-0.141 c0.047-0.016,0.094-0.031,0.141-0.047l57.826-20.107l57.827,20.107c0.078,0.031,0.156,0.047,0.234,0.062 c0.188,0.062,0.359,0.125,0.546,0.172c0.109,0.031,0.219,0.047,0.344,0.078c0.172,0.047,0.359,0.078,0.547,0.109 c0.125,0.031,0.25,0.047,0.359,0.062c0.188,0.016,0.375,0.047,0.562,0.062c0.156,0.016,0.328,0.016,0.5,0.031 c0.125,0,0.266,0.016,0.391,0.016c0.281,0,0.547-0.016,0.812-0.031c0.078-0.016,0.172-0.016,0.25-0.031 c0.094,0,0.188-0.016,0.281-0.031c0.062,0,0.109-0.016,0.172-0.031c0.219-0.031,0.453-0.062,0.672-0.109 c0.109-0.031,0.234-0.047,0.344-0.078c0.219-0.047,0.438-0.109,0.641-0.172c0.109-0.047,0.219-0.062,0.328-0.109 c0.016,0,0.016,0,0.031,0l57.827-20.107l57.826,20.107c3.703,1.281,7.797,0.438,10.703-2.203 C511.414,394.555,512.617,390.539,511.664,386.726z M70.27,194.873l40.186-13.796l36.562,12.812l-9.312,74.389l-42.858-14.78 c-2.281-0.797-4.75-0.781-7.031,0.016l-35.328,12.482L70.27,194.873z M245.328,101.328v70.327l-34.327-11.938 c-2.266-0.781-4.719-0.797-6.984-0.016l-32.639,11.281l8.703-69.655h65.247V101.328z M331.903,101.328l8.719,69.655l-32.641-11.281 c-2.266-0.781-4.734-0.766-7,0.016l-34.326,11.938v-70.327L331.903,101.328L331.903,101.328z M168.424,194.576l39.061-13.499 l37.843,13.171v73.404l-40.702-14.155c-2.281-0.797-4.75-0.797-7.031,0.016l-38.217,13.39L168.424,194.576z M266.655,194.248 l37.842-13.171l39.062,13.499l9.047,72.295l-38.219-13.374c-2.281-0.797-4.75-0.797-7.031,0l-40.701,14.155L266.655,194.248 L266.655,194.248z M364.98,193.889l36.545-12.812l40.188,13.796l17.78,71.123l-35.327-12.483c-2.281-0.797-4.766-0.812-7.047-0.016 l-42.842,14.812L364.98,193.889z M435.541,170.202l-30.594-10.5c-2.266-0.781-4.719-0.766-6.984,0.016l-35.686,12.516l-8.874-70.905 h64.919L435.541,170.202z M93.66,101.328h64.92l-8.859,70.905l-35.703-12.516c-2.25-0.781-4.718-0.797-6.984-0.016l-30.593,10.5 L93.66,101.328z M71.739,357.322c-1.187,0-2.375,0.203-3.515,0.594l-42.421,14.812l20.484-81.92l45.124-15.938l43.592,15.047 l-10.625,85.014l-49.14-17.016C74.098,357.525,72.926,357.322,71.739,357.322z M191.158,357.916l-45.108,15.688l10.375-83.061 l44.702-15.672l44.202,15.375v84.076l-47.155-16.406C195.892,357.119,193.423,357.119,191.158,357.916z M313.825,357.916 l-47.17,16.406v-84.076l44.201-15.375l44.703,15.625l10.39,83.107l-45.124-15.688C318.559,357.119,316.091,357.119,313.825,357.916z M443.494,357.916c-2.266-0.797-4.734-0.797-7.016,0l-48.874,17l-10.625-84.967l43.593-15.078l45.123,15.938l20.484,81.951 L443.494,357.916z"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Industrial",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste laboriosam numquam?",
    icon: (
      <svg
        className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
        height="60px"
        width="60px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.999 511.999"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M246.858,33.002c-0.794-4.319-4.937-7.172-9.256-6.383c-29.545,5.43-46.818,23.145-60.697,37.38 c-14.443,14.814-23.983,24.6-44.933,24.6c-20.949,0-30.49-9.785-44.934-24.6C70.992,47.541,49.014,24.998,7.95,24.998 c-4.391,0-7.95,3.56-7.95,7.95v102.207c0,4.391,3.56,7.95,7.95,7.95s7.95-3.56,7.95-7.95V41.239 C45.134,43.8,61.278,60.355,75.656,75.103c13.158,13.495,24.79,25.408,45.189,28.571v226.529c0,4.391,3.56,7.95,7.95,7.95 s7.95-3.56,7.95-7.95V104.356c24.463-1.483,37.078-14.417,51.546-29.256c12.945-13.278,27.618-28.327,52.185-32.841 C244.794,41.465,247.652,37.321,246.858,33.002z"></path>
            </g>
          </g>
          <g>
            <g>
              <path d="M504.05,24.998c-41.063,0-63.042,22.542-79.092,39.003C410.515,78.814,400.972,88.6,380.023,88.6 c-20.951,0-30.492-9.786-44.937-24.601c-13.877-14.232-31.148-31.945-60.686-37.377c-4.319-0.79-8.462,2.064-9.257,6.381 c-0.794,4.319,2.063,8.463,6.381,9.257c24.562,4.516,39.233,19.563,52.178,32.839c14.471,14.841,27.088,27.774,51.554,29.256 v98.642c0,4.391,3.56,7.95,7.95,7.95s7.95-3.56,7.95-7.95v-99.325c20.397-3.164,32.029-15.077,45.189-28.574 c14.377-14.745,30.521-31.3,59.756-33.861v334.759c-36.009,2.685-56.161,23.34-71.139,38.702l-0.002,0.002 c-11.61,11.906-20.057,20.561-33.803,23.5V245.4c0-4.391-3.56-7.95-7.95-7.95s-7.95,3.56-7.95,7.95v193.712 c-17.719-1.401-26.87-10.772-40.169-24.412c-16.049-16.459-38.028-39.001-79.091-39.001s-63.041,22.543-79.089,39.002 c-13.296,13.638-22.446,23.009-40.161,24.411v-66.507c0-4.391-3.56-7.95-7.95-7.95c-4.391,0-7.95,3.56-7.95,7.95v65.596 c-13.747-2.938-22.194-11.593-33.806-23.502c-14.979-15.362-35.13-36.018-71.139-38.702V186.037c0-4.391-3.56-7.95-7.95-7.95 S0,181.647,0,186.037v229.411c0,4.391,3.56,7.95,7.95,7.95c20.949,0,30.49,9.785,44.934,24.6 c16.048,16.459,38.026,39.002,79.089,39.002c41.063,0,63.041-22.543,79.089-39.002c14.443-14.814,23.983-24.6,44.933-24.6 s30.492,9.786,44.937,24.601c16.048,16.459,38.027,39.001,79.09,39.001c41.064,0,63.043-22.542,79.091-39.001 c14.444-14.814,23.986-24.601,44.936-24.601c4.391,0,7.95-3.56,7.95-7.95v-382.5C512,28.558,508.44,24.998,504.05,24.998z M496.099,407.903L496.099,407.903c-22.408,2.367-34.54,14.812-48.371,28.997c-15.631,16.031-33.347,34.201-67.706,34.201 s-52.075-18.17-67.708-34.203c-15.381-15.776-28.666-29.399-56.32-29.399c-27.653,0-40.938,13.625-56.318,29.4 c-15.63,16.032-33.346,34.202-67.704,34.202c-34.359,0-52.075-18.17-67.706-34.204c-13.828-14.182-25.964-26.626-48.367-28.993 v-15.965c29.234,2.561,45.377,19.116,59.756,33.864c15.381,15.774,28.665,29.398,56.317,29.398 c27.653,0,40.938-13.625,56.318-29.4c15.63-16.032,33.346-34.202,67.704-34.202c34.359,0,52.076,18.17,67.706,34.201 c15.382,15.777,28.667,29.401,56.321,29.401s40.939-13.625,56.32-29.399l0.002-0.001c14.377-14.745,30.521-31.3,59.756-33.861 V407.903z"></path>
            </g>
          </g>
        </g>
      </svg>
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
      <svg
        className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT} ${ICON_TRANSITION}`}
        height="40px"
        width="40px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512.001 512.001"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M511.702,427.936l-43.886-263.314c-1.764-10.581-10.917-18.335-21.644-18.335H409.6v-45.161 c8.517-3.015,14.629-11.118,14.629-20.667c0-12.118-9.825-21.943-21.943-21.943h-14.629h-87.771h-14.629 c-12.118,0-21.943,9.825-21.943,21.943c0,9.549,6.112,17.652,14.629,20.667v45.161H65.829c-10.727,0-19.88,7.755-21.644,18.335 L0.299,427.936c-1.061,6.362,0.733,12.869,4.902,17.791c4.169,4.921,10.293,7.759,16.742,7.759h468.114 c6.45,0,12.573-2.838,16.742-7.759C510.97,440.805,512.762,434.298,511.702,427.936z M321.829,102.4h43.886v43.886h-43.886V102.4z M84.417,190.172h215.469h87.771h39.926l7.314,43.886H77.103L84.417,190.172z M69.789,277.943h372.423l7.314,43.886H62.475 L69.789,277.943z M47.846,409.6l7.314-43.886h401.68l7.314,43.886H47.846z"></path>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Renovation Roofing",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error pariatur, vitae eligendi alias omnis voluptas.",
    icon: (
      <svg
        className={`${ICON_COLOR_HOVER_INVERSE} ${ICON_COLOR_ACCENT}`}
        height="40px"
        width="40px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M491.342,0H20.659c-5.632,0-10.199,4.567-10.199,10.199v413.154c0,48.88,39.767,88.646,88.646,88.646 c33.997,0,63.581-19.242,78.447-47.404C192.419,492.758,222.003,512,256,512s63.581-19.242,78.447-47.404 C349.314,492.758,378.897,512,412.894,512c48.88,0,88.646-39.767,88.646-88.646V10.199C501.541,4.567,496.974,0,491.342,0z M167.354,423.354c0,37.632-30.616,68.248-68.248,68.248s-68.248-30.616-68.248-68.248v-80.629 c16.273,19.619,40.825,32.138,68.248,32.138s51.975-12.517,68.248-32.138V423.354z M167.354,285.635v0.58 c0,37.632-30.616,68.248-68.248,68.248s-68.248-30.616-68.248-68.248v-0.58v-81.209c16.273,19.62,40.825,32.138,68.248,32.138 s51.975-12.517,68.248-32.138V285.635z M167.354,147.917c0,37.632-30.616,68.248-68.248,68.248 c-37.632,0-68.248-30.616-68.248-68.248V20.398h136.496V147.917z M324.248,423.354c0,37.632-30.616,68.248-68.248,68.248 s-68.248-30.616-68.248-68.248v-80.629c16.273,19.619,40.825,32.138,68.248,32.138s51.975-12.517,68.248-32.138V423.354z M324.248,285.636v0.58c0,37.632-30.616,68.248-68.248,68.248s-68.248-30.616-68.248-68.248v-0.58v-81.209 c16.273,19.619,40.825,32.138,68.248,32.138s51.975-12.517,68.248-32.138V285.636z M324.248,147.917 c0,37.632-30.616,68.248-68.248,68.248s-68.248-30.616-68.248-68.248V20.398h136.496V147.917z M481.142,423.354 c0,37.632-30.616,68.248-68.248,68.248s-68.248-30.616-68.248-68.248v-80.629c16.273,19.619,40.825,32.138,68.248,32.138 s51.975-12.517,68.248-32.138V423.354z M481.142,285.636v0.58c0,37.632-30.616,68.248-68.248,68.248s-68.248-30.616-68.248-68.248 v-0.58v-81.209c16.273,19.619,40.825,32.138,68.248,32.138s51.975-12.517,68.248-32.138V285.636z M481.142,147.917 c0,37.632-30.616,68.248-68.248,68.248s-68.248-30.616-68.248-68.248V20.398h136.496V147.917z"></path>
            </g>
          </g>
          <g>
            <g>
              <path d="M462.024,31.669c-5.632,0-10.199,4.567-10.199,10.199v46.916c0,5.632,4.567,10.199,10.199,10.199 s10.199-4.567,10.199-10.199V41.868C472.223,36.236,467.656,31.669,462.024,31.669z"></path>
            </g>
          </g>
          <g>
            <g>
              <path d="M462.024,109.182c-5.632,0-10.199,4.567-10.199,10.199v10.199c0,5.632,4.567,10.199,10.199,10.199 s10.199-4.567,10.199-10.199v-10.199C472.223,113.75,467.656,109.182,462.024,109.182z"></path>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
];
