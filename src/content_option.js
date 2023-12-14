const logotext = "TAT";
const meta = {
    title: "Tun Aung(Toby) Thaung",
    description: "Hello, I’m Toby, a software devloper, currently working for a research project in Oregon State University",
};

const introdata = {
    title: "I’m Tun Aung(Toby) Thaung",
    animated: {
        zero: "Interested Roles:",
        first: "Full-Stack Developer",
        second: "Back-End Developer",
        third: "Front-End Developer",
    },
    description: "Welcome to my portfolio website! I'm a passionate Full Stack Developer with a love for crafting web experiences that are both beautiful and functional.",
    your_img_url:"https://storage.ko-fi.com/cdn/useruploads/post/0a340988-1a6c-46bf-a17f-96c926d246ae_cloudshoritzonalwm.png",
};

const dataabout = {
    title: "Abit about myself",
    aboutme: "An experienced recent graduate with a B.S in Computer Science, focus in A.I. After working as an Undergraduate Learning Assistant in college, I'm now a software engineer for a research project at Oregon State University, mainly focusing on the full-stack development of an OpenAI powered virtual-notebook website. Our website is at the initial phase of development and the prototype can be experimented through this link",
};

const worktimeline = [{
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
        value: 80   ,
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
    }
];

const tools = [
    {
        title: "Amazon Web Services (EC2, RDS, Route 53)"
    },
    {
        title: "Node.js"
    },
    {
        title: "React.js"
    },
    {
        title: "TailWind CSS"
    },
    {
        title: "Google Cloud"
    },
    {
        title: "OpenAI API (GPT-3.5-Turbo, GPT-4, GPT-4-Vision)"
    },
    {
        title: "Docker"
    }
];

const dataportfolio = [
    {
        img: "https://static.vecteezy.com/ti/vetor-gratis/p3/7816869-vector-pixel-art-book-icon-for-game-development-gratis-vetor.jpg",
        description: "Virtual notebook website fully powered by OpenAI ---  (Since website is unsecured right now, please refrain from putting in sensitive information.⚠️)",
        link: "http://54.70.119.142:3000/"
    },
    {
        img:"https://static.vecteezy.com/system/resources/previews/007/530/656/original/pixel-art-airplane-artwork-vector.jpg",
        description: "3D Interactable website built using React & Three.js",
        link: "https://verdant-cupcake-e6a27a.netlify.app/"
    },
    {
        img:"https://static.vecteezy.com/system/resources/previews/007/581/530/original/speech-bubble-place-for-text-boxes-with-pixel-art-illustration-free-vector.jpg",
        description: "A simple group chatroom for visitors to this website. No need to sign up! --- (Since website is unsecured right now, please refrain from putting in sensitive information.⚠️)",
        link: "http://52.34.201.95/"
    },
    {
        img:"https://media.istockphoto.com/id/1015350564/vector/pixel-art-vector-weather-application-icons-set.jpg?s=612x612&w=0&k=20&c=OVdCKUnMuuaD9OuFwU0UO3N5pbClY70s42gOvysdD-I=",
        description: "Code for an android application, designed to deliver daily weather forecasts to users in a day-to-day life.",
        link: "https://github.com/toby12352/OpenWeather",
    },
    {
        img:"https://community.gamedev.tv/uploads/db2322/original/3X/0/a/0a86cbc5e12df24cb8c1ae277c4332a2d2a95ad4.png",
        description: "Code for a lightweight course management API, designed for education industry's use and powered with enhanced database security and scalability. Similar to Canvas.",
        link: "https://github.com/toby12352/Tarpaulin-Restful-API",
    },
    {
        img:"https://img.freepik.com/premium-vector/take-board-with-pixel-art-style_475147-252.jpg",
        description: "Code for an android application which provides users with the most recent trending movies and TVseries information like IMDB.",
        link: "https://github.com/toby12352/Eivom",
    },
    {   
        img:"https://i.ibb.co/ygvbhVM/resume-logo3.png",
        description: "Please contact me for freelance or job offers😁! (P.S: The code for all the projects above can be found within my github repo)",
        link: "https://drive.google.com/file/d/1wW88zD5Dfdm17QRZGes-QDMBwgohXy6O/view?usp=sharing"
    }
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
    linkedin: "https://linkedin.com/in/tobythaung"
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