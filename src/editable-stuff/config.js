// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Utsav",
  middleName: "",
  lastName: "Mishra",
  message: " Senior Software Engineer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/revel-um",
    },
    // {
    //   image: "fa-facebook",
    //   url: "",
    // },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/utsav_mishra_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/utsav-mishra-91405b1b6",
    },
    // {
    //   image: "fa-twitter",
    //   url: "",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/utsav.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/utsav.png"),
  imageSize: 375,
  message:
    "I'm not just a software engineer; I'm a tech enthusiast with an insatiable appetite for learning. My mission? To harness the power of emerging technologies and tackle real-world challenges head-on. I envision a future where convenience reigns supreme, where complex tasks are simplified to just a few clicks, and I'm determined to be at the forefront of making that vision a reality.",
  resume: "https://docs.google.com/document/d/1eXca412Qq7hh2m_GviYYp_NyYCDw-eCRurAEiBPdLik/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "revel-um",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/utsav.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/utsav.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "NodeJS", value: 100 },
    { name: "SQL", value: 85 },
    { name: "Data Structures", value: 90 },
    { name: "C++", value: 90 },
    { name: "TypeScript", value: 90 },
    { name: "Python", value: 90 },
    { name: "Microservices", value: 90 },
    { name: "Monolith", value: 100 },
    { name: "Serverless", value: 80 },
    { name: "AWS", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities in backend! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "utsavmishra1411@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/TA-logo.png'),
      date: 'Mar 2023 – Present',
    },
    {
      role: 'Associate Software Engineer',
      companylogo: require('../assets/img/skywa_solutions_logo.jpeg'),
      date: 'May 2021 – Feb 2023',
    },
    {
      role: 'Software Intern',
      companylogo: require('../assets/img/solar-logo.png'),
      date: 'Jan 2021 – Apr 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

