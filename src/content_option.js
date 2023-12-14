const logotext = "TAT";
const meta = {
    title: "Tun Aung(Toby) Thaung",
    description: "Hello, I’m Toby, a software devloper,currently working for a research in Oregon State University",
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
    // your_img_url: "https://images.hdqwalls.com/wallpapers/waves-4k-wm.jpg",
    // your_img_url:"https://static.vecteezy.com/system/resources/previews/027/896/244/non_2x/lo-fi-design-bw-cute-kawaii-lo-fi-backgrounds-set-park-swimming-pool-monochromatic-2d-cartoon-landscape-illustrations-lofi-aesthetic-wallpapers-desktop-japanese-anime-scenery-dreamy-vibes-vector.jpg"
    your_img_url:"https://storage.ko-fi.com/cdn/useruploads/post/0a340988-1a6c-46bf-a17f-96c926d246ae_cloudshoritzonalwm.png",
};

const dataabout = {
    title: "Abit about myself",
    aboutme: "An experienced recent graduate with a B.S in Computer Science with a passion for full-stack development. During the school years, I've served as an undergraduate learning assistant and a mentor for my fellow students and juniors. At the present, I'm working as a Research Software Engineer at Oregon State University, mainly focusing on backend features of an OpenAI powered virtual-notebook website. We are at the initial phase of software development and preparing to deploy by the end of February.",
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
        name: "Node.js",
        value: 88,
    },
    {
        name: "React.js",
        value: 85,
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
    }
];

const tools = [
    {
        title: "Amazon Web Services (EC2, RDS, Route 53)"
    },
    {
        title: "OpenAI API (GPT-3.5-Turbo, GPT-4, GPT-4-Vision)"
    },
    {
        title: "Google Cloud"
    },
    {
        title: "Docker"
    }
];

const dataportfolio = [
    {
        // img: "https://static.vecteezy.com/system/resources/previews/012/581/533/non_2x/black-and-white-notebook-01-vector.jpg",
        img: "https://static.vecteezy.com/ti/vetor-gratis/p3/7816869-vector-pixel-art-book-icon-for-game-development-gratis-vetor.jpg",
        description: "Virtual notebook website fully powered by OpenAI (Since website is unsecured right now, please refrain from putting in sensitive information.)",
        link: "http://54.70.119.142:3000/"
    },
    {
        // img:"https://static.vecteezy.com/system/resources/previews/005/749/511/original/propelier-aircraft-retro-vintage-small-plane-single-engine-contour-outline-line-icon-black-color-illustration-image-thin-flat-style-vector.jpg",
        img:"https://static.vecteezy.com/system/resources/previews/007/530/656/original/pixel-art-airplane-artwork-vector.jpg",
        description: "Interactable website built using React & Three.js",
        link: "https://verdant-cupcake-e6a27a.netlify.app/"
    },
    {
        // img: "https://static.vecteezy.com/system/resources/previews/024/672/801/original/weather-forecast-outline-web-icon-set-thin-line-icons-collection-editable-stroke-vector.jpg",
        img:"https://media.istockphoto.com/id/1015350564/vector/pixel-art-vector-weather-application-icons-set.jpg?s=612x612&w=0&k=20&c=OVdCKUnMuuaD9OuFwU0UO3N5pbClY70s42gOvysdD-I=",
        description: "An android application, designed to deliver daily weather forecasts to users. The users can search weather forecast for 5 days with data every 3 hours by geographic coordinates.",
        link: "https://github.com/toby12352/OpenWeather",
    },
    {
        // img: "https://thumbs.dreamstime.com/b/business-woman-costume-making-presentation-explaining-charts-board-audience-conference-hall-seminar-lecture-ve-126392865.jpg",
        img:"https://community.gamedev.tv/uploads/db2322/original/3X/0/a/0a86cbc5e12df24cb8c1ae277c4332a2d2a95ad4.png",
        description: "Tarpaulin Restful API is a lightweight course management tool aimed at enhancing database security and scalability using cutting-edge technologies.",
        link: "https://github.com/toby12352/Tarpaulin-Restful-API",
    },
    {
        // img: "https://static.vecteezy.com/system/resources/previews/027/739/083/original/simple-film-camera-icon-movie-camera-vector.jpg",
        img:"https://img.freepik.com/premium-vector/take-board-with-pixel-art-style_475147-252.jpg",
        description: "An android application that provides users with trending rich movie and series data in a collaborative, team-oriented environment.",
        link: "https://github.com/toby12352/Eivom",
    },
    {
        // img: "https://img.freepik.com/premium-vector/thin-line-teamwork-icon-like-virtual-webinar-chatroom-simple-outline-trend-modern-thought-logotype-graphic-lineart-stroke-art-design-isolated-white-concept-three-people-with-speechbubble_995545-40.jpg?w=2000",
        img:"https://static.vecteezy.com/system/resources/previews/007/581/530/original/speech-bubble-place-for-text-boxes-with-pixel-art-illustration-free-vector.jpg",
        description: "A simple groupchatroom for every users. No need to sign up!",
        link: "https://github.com/toby12352/react-chatroom"
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