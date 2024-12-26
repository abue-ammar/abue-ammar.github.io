export type Project = {
  id: string;
  slug: string;
  name: string;
  link: string;
  technologies: string;
  shortDescription: string;
  description: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "us-bangla-airlines-website-and-cms",
    name: "US-Bangla Airlines Website & CMS",
    link: "https://usbair.com/",
    technologies: "NextJS, Tailwind CSS, Ant Design, Redux Toolkit",
    shortDescription:
      "Built US-Bangla Airlines corporate site and content management.",
    description: [
      "Developed usbair.com, serving millions of users with SSR for optimal performance.",
      "Designed a slick, responsive UI using Tailwind CSS.",
      "Built a CMS using ReactJS, integrating Ant Design for robust component libraries.",
    ],
  },
  {
    id: "2",
    slug: "us-bangla-payment-gateway",
    name: "US-Bangla Payment Gateway",
    link: "",
    technologies: "ReactJS, Material UI, React Query, Zustand",
    shortDescription:
      "Developed a robust payment gateway system serving US-Bangla partnered companies.",
    description: [
      "Created a robust payment gateway system serving multiple platforms, enabling real-time transaction insights and improved refund handling.",
      "Enhanced data flow performance for faster analytics and reporting.",
    ],
  },
  {
    id: "3",
    slug: "rtv-news-and-cms",
    name: "RTV News & CMS",
    link: "https://www.rtvonline.com/",
    technologies: "ReactJS, NextJS, Ant Design, Tailwind CSS",
    shortDescription:
      "Developed CMS with features like Page Builder, Template Customization, and a Rich Text Editor for content creation.",
    description: [
      "Designed a fully customizable CMS with RBAC, monthly statistics, and rich text editing features.",
      "Implemented AMP and SEO optimizations, resulting in a 40% increase in organic traffic.",
    ],
  },
  {
    id: "4",
    slug: "dhakamail-news-and-cms",
    name: "DhakaMail News & CMS",
    link: "https://dhakamail.com/",
    technologies: "ReactJS, NextJS, Ant Design, Redux Toolkit",
    shortDescription:
      "Built a comprehensive CMS supporting role-based access, managing news articles, templates etc.",
    description: [
      "Built a comprehensive CMS supporting role-based access and real-time user analytics.",
      "Enhanced responsiveness and SEO performance, increasing page load speeds by 20%.",
    ],
  },
];
