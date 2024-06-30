import { meta, shopify, starbucks, tesla,earbor } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    jquery,
    bootstrap,
    antd,
    postgresql,
    bolx,
    sbbs,
    MAI,
    whatsapp
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: jquery,
        name: "Jquery",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "FrameWork",
    },
    {
        imageUrl: antd,
        name: "Antd",
        type: "FrameWork",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: postgresql,
        name: "Postgresql",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
   
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "eArbor",
        icon: earbor,
        iconBg: "#d4edff",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developed the frontend part of the WMS application.",
            "Implemented user interfaces to manage inventory, track shipments, and optimize warehouse operations.",
            "Collaborated with backend developers to integrate APIs and ensure seamless data flow.",
            "Participated in code reviews and contributed to improving code quality and performance.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "eArbor",
        icon: earbor,
        iconBg: "#6cbc9e",
        date: "Jan 2023 - Present",
        points: [
            "Continued development and enhancement of the WMS application",
            "Improved user experience by implementing new features and optimizing existing ones.",
            "Developed the frontend for a printer rental service platform.",
            "Conducted user testing to gather feedback and make necessary improvements.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/raghava139',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/raghavendra-yallamanda-970794225/',
    },
    {
        name: 'Whatsapp',
        iconUrl: whatsapp,
        link: 'https://wa.me/9676324174',
    }
];

export const projects = [
    {
        iconUrl: bolx,
        theme: 'btn-back-red',
        name: 'BOLX - WMS',
        description: 'BOLX is a sophisticated Warehouse Management System designed to streamline warehouse operations, optimize inventory management, and improve overall efficiency. This project harnesses the power of modern web technologies to deliver a robust and user-friendly interface for managing complex warehousing tasks.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    {
        iconUrl: MAI,
        theme: 'btn-back-green',
        name: 'MAI - WMS',
        description: 'MAI is another advanced Warehouse Management System focused on enhancing logistics and supply chain operations. It offers a suite of tools to manage inventory, process orders, and track shipments efficiently. The system is built to cater to both small-scale and large-scale warehouse environments.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: sbbs,
        theme: 'btn-back-blue',
        name: 'SBBS - Printer Rental Services',
        description: 'SBBS is a dynamic web application designed for managing printer rental services. It provides a platform for customers to browse, rent, and manage printers. The application supports a variety of rental plans and integrates seamlessly with payment gateways for smooth transactions.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];