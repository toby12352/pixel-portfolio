const logotext = "TAT";
const meta = {
  title: "Tun Aung(Toby) Thaung",
  description:
    "Hello, I’m Toby, a software devloper, currently working for a research project in Oregon State University",
};

const introdata = {
  title: "I’m Tun Aung(Toby) Thaung",
  animated: {
    zero: "Full-Stack Developer",
    first: "Front-End Developer",
    second: "Back-End Developer",
    third: "Web Designer",
  },
  description:
    "Welcome to my portfolio website! I'm a passionate Full Stack Developer with a love for crafting web experiences that are both beautiful and functional.",
  your_img_url:
    "https://storage.ko-fi.com/cdn/useruploads/post/0a340988-1a6c-46bf-a17f-96c926d246ae_cloudshoritzonalwm.png",
};

const dataabout = {
  title: "Abit about myself",
  aboutme:
    "An experienced recent graduate with a B.S in Computer Science, focus in A.I. After working as an Undergraduate Learning Assistant in college, I'm now a software engineer for a research project at Oregon State University, mainly focusing on the full-stack development of an OpenAI powered virtual-notebook website.",
};

const worktimeline = [
  {
    jobtitle: "Research Software Engineer",
    where: "Corvallis, Oregon",
    date: "August 2023 - Present",
  },
  {
    jobtitle: "Software Engineer Intern",
    where: "Yangon, Myanmar",
    date: "Jan 2023 - Jun 2023",
  },
  {
    jobtitle: "Undergraduate Learning Assistant",
    where: "Corvallis, Oregon",
    date: "Jan 2023 - Jun 2023",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 88,
  },
  {
    name: "HTML",
    value: 80,
  },
  {
    name: "CSS",
    value: 80,
  },
  {
    name: "C++",
    value: 75,
  },
  {
    name: "MySQL",
    value: 70,
  },
  {
    name: "MongoDB",
    value: 70,
  },
];

const tools = [
  {
    title: "Amazon Web Services (EC2, RDS, Route 53)",
  },
  {
    title: "Node.js",
  },
  {
    title: "React.js",
  },
  {
    title: "TailWind CSS",
  },
  {
    title: "Google Cloud",
  },
  {
    title: "OpenAI API (GPT-3.5-Turbo, GPT-4, GPT-4-Vision)",
  },
  {
    title: "Docker",
  },
];

const dataportfolio = [
  {
    img: "https://i.pinimg.com/originals/c7/d5/9d/c7d59ddc9346ba8d41f83de6718f7d57.gif",
    description: "A pixel theme chatroom for my visitors. No need to sign up!",
    link: "http://52.34.201.95/",
  },
  //   {
  //     img: "https://media1.giphy.com/media/4XXo8A7CIW1lZGgdhm/giphy.gif?cid=6c09b952f8ibj4v9hsw7z87sql8yqkcaqnoqc8q7ajiziqrk&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
  //     description:
  //       "Redesigning frontend design for V-Notebook (Work In Progress)",
  //     link: "https://reliable-fairy-9217d9.netlify.app/",
  //   },
  {
    img: "https://cdn.dribbble.com/userupload/10411701/file/original-77f4a57d9e45fef6510a4b11c8549e45.gif",
    description: "Virtual-Notebook website fully powered by OpenAI [Research]",
    link: "https://v-notebook.com/",
  },
  {
    img: "https://art.ngfiles.com/images/2655000/2655047_urutaudevstudios_airplane-animation-pixel-art-game.gif?f1659140280",
    description: "3D Interactable Sky Island",
    link: "https://verdant-cupcake-e6a27a.netlify.app/",
  },
  {
    img: "https://art.pixilart.com/170f54c4f7fa6cb.gif",
    description: "Nike landing page website's recreation (Frontend only)",
    link: "https://gorgeous-mermaid-314b25.netlify.app/",
  },
  {
    img: "https://media.istockphoto.com/id/1015350564/vector/pixel-art-vector-weather-application-icons-set.jpg?s=612x612&w=0&k=20&c=OVdCKUnMuuaD9OuFwU0UO3N5pbClY70s42gOvysdD-I=",
    description:
      "Code for an android application, designed to deliver daily weather forecasts to users in a day-to-day life.",
    link: "https://github.com/toby12352/OpenWeather",
  },
  {
    img: "https://community.gamedev.tv/uploads/db2322/original/3X/0/a/0a86cbc5e12df24cb8c1ae277c4332a2d2a95ad4.png",
    description:
      "Code for a lightweight course management API, designed for education industry's use and powered with enhanced database security and scalability. Similar to Canvas.",
    link: "https://github.com/toby12352/Tarpaulin-Restful-API",
  },
  {
    img: "https://img.freepik.com/premium-vector/take-board-with-pixel-art-style_475147-252.jpg",
    description:
      "Code for an android application which provides users with the most recent trending movies and TVseries information like IMDB.",
    link: "https://github.com/toby12352/Eivom",
  },
  {
    img: "https://i.ibb.co/ygvbhVM/resume-logo3.png",
    description:
      "Thank you for visiting my website😁! (P.S: The code for all the projects above can be found within my github repo)",
    link: "https://drive.google.com/file/d/1ZFseNSofUexMaPTa4EA0tn2j7AfIbCzo/view?usp=sharing",
  },
];

const contactConfig = {
  YOUR_EMAIL: "tobythaung@gmail.com",
  YOUR_FONE: "(541)908-2749",
  description: "Contact me via email or phone number!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_ox69sum",
  YOUR_TEMPLATE_ID: "template_xa6sgr1",
  YOUR_PUBLIC_KEY: "QLf8DwQXA5_NmsPZL",
};

const socialprofils = {
  github: "https://github.com/toby12352",
  linkedin: "https://linkedin.com/in/tobythaung",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  tools,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
