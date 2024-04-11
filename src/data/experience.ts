export interface Experience {
    title: string;
    description: string;
    duration: string;
    join_exit: string;
    proof_link?: string;
    bullet_points?: string[];
}

export const experiences: Experience[] = [
    {
        title: "CuFoodz - React.js Intern",
        description: "Joined as a React.js Intern at CuFoodz as my first internship",
        duration: "3 Months",
        join_exit: "26th Dec, 2023 - 30th Mar, 2024",
        // proof_link: "https://github.com/SumanKisku/e-commerce-react",
        bullet_points: ["Successfully implemented debounced search functionality in the food search bar, resulting in faster and more efficient search queries, enhancing user satisfaction and retention.", "Enhanced website Lighthouse Performance score from 49 to 61, Accessibility score from 52 to 88, Best Practices score from 91 to 95, and SEO score from 73 to 91.", "Achieved a remarkable overall improvement in Lighthouse scores, showcasing dedication to optimizing website performance and user experience."],
    },
];
