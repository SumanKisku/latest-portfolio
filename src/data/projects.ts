export interface Project {
    title: string;
    description: string;
    github_link: string;
    deploy_link: string;
    keywords: string[];
}

export const projects = [
    {
        title: "React E-commerce website",
        description: "An E-commerce website built with React JS.",
        github_link: "https://github.com/SumanKisku/e-commerce-react",
        deploy_link: "https://ecommerce-react-website.netlify.app",
        keywords: ["React JS", "Context API", "Matelrial UI", "Cart Feature", "React Hot Toast"],
    },
    {
        title: "Web 3 Voting Website",
        description: "A decentralized voting app(Mimicking Lok Sabha Vote 2024). Where you can vote pseudonymously. Built on polygon Amoy Testnet",
        github_link: "https://github.com/SumanKisku/lok-sabha-2024-poll",
        deploy_link: "https://lok-sabha-2024-poll.netlify.app/",
        keywords: ["Solidity", "Polygon Testnet", "React JS", "Thirdweb", "Web 3", "Blockchain"],
    },
];
