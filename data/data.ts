import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandMongodb,
  TbBrandTailwind,
  TbBrandSass,
  TbBrandTypescript,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandGmail,
  TbBrandWhatsapp,
  TbMap,
  TbArrowRight,
  TbNetwork,
  TbServer,
  TbRoadSign,
  TbToolsKitchen2,
  TbSocial,
  TbMovie,
  TbPalette,
} from "react-icons/tb";
import client from "@/public/Grad/client.png";
import fullClient from "@/public/Grad/fullClient.png";
import register from "@/public/Grad/register.png";
import restaurantClient from "@/public/restaurant/talebClient.png";
import fullRestaurantClient from "@/public/restaurant/fullTalebClient.png";
import restaurantLogin from "@/public/restaurant/talebLogin.png";
import socialRegister from "@/public/social/register.png";
import socialClient from "@/public/social/profile.png";
import socialFull from "@/public/social/fullSocial.png";
import moviesHome from "@/public/movies/moviesHome.png";
import moviesFull from "@/public/movies/fullMovies.png";
import moviesItem from "@/public/movies/moviesItem.png";
import oldHome from "@/public/oldPortfolio/oldHome.png";
import oldFull from "@/public/oldPortfolio/oldFull.png";
import oldSkills from "@/public/oldPortfolio/oldSkills.png";
import {
  FaCalendar,
  FaDownload,
  FaGraduationCap,
  FaNodeJs,
} from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoCodeWorking } from "react-icons/io5";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
export const tools = [
  TbBrandNextjs,
  TbBrandReact,
  FaNodeJs,
  TbBrandMongodb,
  TbBrandTypescript,
  TbBrandSass,
  TbBrandTailwind,
];
export const social = [
  {
    icon: TbBrandFacebook,
    address: "https://www.facebook.com/mahmod.hmmadia.58",
  },
  {
    icon: TbBrandInstagram,
    address: "https://www.instagram.com/hmmadia.mh/",
  },
  {
    icon: TbBrandGithub,
    address: "https://github.com/MahmoudHmmadia",
  },
  {
    icon: TbBrandLinkedin,
    address: "",
  },
];
export const contact = [
  {
    icon: TbBrandWhatsapp,
    address: "+963967224804",
    color: "#25D366",
  },
  {
    icon: TbBrandGmail,
    address: "mahmoudhmmadia19988@gmail.com",
    color: "#DB4437",
  },
  {
    icon: TbMap,
    address: "Syria - Damascus",
    color: "#ff0",
  },
];
export const aboutIcons = {
  download: FaDownload,
  engineer: MdEngineering,
  code: IoCodeWorking,
  calender: FaCalendar,
  more: TbArrowRight,
};
export const aboutInfo = [
  {
    title: "beginning",
    icon: TbRoadSign,
    content:
      "it's start in my second year on collage with introduction to programming world from c++ door, and i know from the first loop and condition i wrote thats the thing what i wanna to do",
  },
  {
    title: "network",
    icon: TbNetwork,
    content:
      "in my 4th year i started in network world with 100 hours course of ccna ,and i got and certificate from expo of this training course ,and it was a great to me, because he give me a forward push to find my own road, In addition to have knowledge in network and how it works and how to implement it and working with routers, switches, And so on",
  },
  {
    title: "system",
    icon: TbServer,
    content:
      "after i've finished form ccna training i jump throw mcsa training 100 hours course, and i got certificate from expo in this training course too, In addition to have knowledge about windows server and his services and how to implement the system for work area, this course encourage me to mix all this Experiences about network and system up, and start with web development road, to become a full stack web developer",
  },
  {
    title: "coding",
    icon: IoCodeWorking,
    content:
      "i learned every thing by my self from the internet, i watched courses and worked hard, and step by step, and now i can built any website from a to z, programming the ui, even i can design it , and implement the server and build api and create database, and chose the write network strategy for working area if the app was for a work it self, and hosting the whole web app in to internet",
  },
];
export const myWorks: work[] = [
  {
    id: "grad",
    clientName: "patient page",
    clientNameI: "student web app",
    mainTitle:
      "Web System For The Dentist Students In Damascus University Thats Help Theme To Find, Reserve, and Make A Treatment Plan For Patients",
    title: "My Graduated Project",
    details:
      "It Was Just An Idea, And I Turned To Web System, Designed And Development By Me",
    info: "My Graduated Project Was about making a Web System For The Dentist Students In Damascus University Thats Help Theme To Find, Reserve, and Make A Treatment Plan For Patients, And It Help Patients too, Because The Treatment That offered by The Doctor will be free or at a nominal price ,And This System consists of three main parts,First The Patient Interface Where The Patient Can Make Registration In The Web Application And Look What The Doctors Offer To Him And Take A Look About How We Are And Some Advices About The Dental Health, Second Doctor Interface Were He Can Reserve Patient, Make A Treatment Plan For Him, And Write Some Notes To Remind Him and so on, Finally The Web Server Were I Built The Api And The Database And The Authentication And Authorization Process For The Doctors",
    clientFull: fullClient,
    icon: FaGraduationCap,
    images: [
      { src: client, name: "patient page" },
      { src: register, name: "student web app" },
    ],
    done: true,
    tools: [
      TbBrandReact,
      FaNodeJs,
      TbBrandMongodb,
      TbBrandTypescript,
      TbBrandSass,
    ],
    pageLink: "https://dentist-world.onrender.com/",
    pageLinkI: "https://dentistsstudentw.onrender.com/",
  },
  {
    id: "restaurant",
    clientName: "restaurant page",
    clientNameI: "restaurant admin web app",
    mainTitle:
      "Web System For Management Restaurant, With All Details That You Can Imagine For Make This Process Super Cool And Smoothie",
    title: "Restaurant Training Project",
    details:
      "it was Like Challenge To Make Such Project With beautiful UI, And I Choose To Do It",
    info: "It Was Very Large Project, With many Ideas Like Tables Reservation By The Number And The Time, And Make Order From Menu And Rate The Dish Or The Restaurant It Self And Write A Feedback And The Whole Admin Part Where The Admin Can Add, Fired, Edit, His Chefs And Employees, And So On, So This Project consists of three main parts, First The Client Side, Second The Admin And Head Chef Ui, Finally The Web Server Were I Built The Api And The Database And The Authentication And Authorization Process For The Admin And The Head Chef",
    images: [
      {
        src: restaurantClient,
        name: "restaurant page",
      },
      {
        src: restaurantLogin,
        name: "restaurant admin web app",
      },
    ],
    clientFull: fullRestaurantClient,
    icon: TbToolsKitchen2,
    done: true,
    tools: [
      TbBrandReact,
      FaNodeJs,
      TbBrandMongodb,
      TbBrandTypescript,
      TbBrandSass,
    ],
    pageLink: "https://taleb-restaurant.onrender.com/",
    pageLinkI: "https://taleb-restaurant-amdin.onrender.com/",
  },
  {
    id: "social app",
    clientName: "social media page",
    mainTitle:
      "Web Social Media App For Get In Touch With People Who Share The Same Interest With You",
    title: "Social Media App Training Project",
    details:
      "it was Like Challenge To Make Such Project With beautiful UI, And I Choose To Do It",
    info: "There So Many Idea In My Mind Thats Will Make It Very Large Project, Like Full Real Time Messenger Real Time Between Friends With All Customization Ideas Will Gonna To Include In This Part, And There Is Posts And Comments And So On, And Manage The Database To Make Friends Suggestions Depending On Same Interests, And Posts Suggestions Too In The Same Way, And So Many Ideas It Will Appears In Development Process",
    images: [
      {
        src: socialClient,
        name: "profile page",
      },
      {
        src: socialRegister,
        name: "register page",
      },
    ],
    clientFull: socialFull,
    icon: TbSocial,
    done: false,
    tools: [
      TbBrandReact,
      FaNodeJs,
      TbBrandMongodb,
      TbBrandTypescript,
      TbBrandSass,
      TbBrandTailwind,
    ],
  },
  {
    id: "Movies App",
    clientName: "Movies And Series App",
    mainTitle:
      "Web Movies And Series App For See The Top, Popular, Upcoming, Movies And Series",
    title: "Movies And Series App Training Project",
    details:
      "it was Like Challenge To Make Such Project With beautiful UI, And I Choose To Do It",
    info: "It was My Last Front-end Project Before I Start In Backend Road To Be A fullstack web developer, I Make The Ui By My Self, There is Som Many Ideas In My Mind Now To Make It Better, Maybe In Coming Days I will Make Some Changes, But I Love This Project Because I Approved to my self when i finish it that i can start in back-end with strong heart",
    images: [
      {
        src: moviesHome,
        name: "Home Page",
      },
      {
        src: moviesItem,
        name: "Item Page",
      },
    ],
    clientFull: moviesFull,
    icon: TbMovie,
    done: true,
    tools: [TbBrandReact, TbBrandTypescript, TbBrandSass],
    pageLink: "https://movies-app-mahmoud.onrender.com/",
  },
  {
    id: "Old Portfolio",
    clientName: "Old Portfolio Pge",
    mainTitle:
      "My Old Portfolio Page, When I Was Training on react and trying to understand it more and fall in love with him more and more",
    title: "Portfolio web page training Project",
    details: "it was My First Page That I Built With Real Data And Love",
    info: "It was Lovely Project, I Make This Simple Design While I Wrote The Code, Even I Wasn't Have a Great Thoughts About Making A beautiful Ui Like What I have now, and what i make by my self in this new portfolio, but it's look great anyway, and it's include my first and small projects",
    images: [
      {
        src: oldHome,
        name: "Home Page",
      },
      {
        src: oldSkills,
        name: "Skills Page",
      },
    ],
    clientFull: oldFull,
    icon: TbPalette,
    done: true,
    tools: [TbBrandReact, TbBrandSass],
    pageLink: "https://old-portfolio-yh32.onrender.com/",
  },
];
export type work = {
  id: string;
  mainTitle: string;
  title: string;
  details: string;
  info: string;
  clientFull: StaticImageData;
  icon: IconType;
  done: boolean;
  tools: IconType[];
  images: { src: StaticImageData; name: string }[];
  pageLink?: string;
  pageLinkI?: string;
  clientName?: string;
  clientNameI?: string;
};
