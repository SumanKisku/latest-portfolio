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
];
