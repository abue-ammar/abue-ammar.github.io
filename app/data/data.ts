export type Project = {
  id: string;
  slug: string;
  name: string;
  link: string;
  details: string;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "us-bangla-airlines-website-and-cms",
    name: "US-Bangla Airlines Website & CMS",
    link: "https://usbair.com/",
    details: "Built US-Bangla Airlines corporate site and content management.",
  },
  {
    id: "2",
    slug: "us-bangla-payment-gateway",
    name: "US-Bangla Payment Gateway",
    link: "",
    details:
      "Developed Payment Gateway system serving US-Bangla partnered companies.",
  },
  {
    id: "3",
    slug: "rtv-news-and-cms",
    name: "RTV News & CMS",
    link: "https://www.rtvonline.com/",
    details:
      "Developed CMS with features like Page Builder, Template Customization, and a Rich Text Editor for content creation.",
  },
  {
    id: "4",
    slug: "dhakamail-news-and-cms",
    name: "DhakaMail News & CMS",
    link: "https://dhakamail.com/",
    details: "Built a powerful CMS for managing news, roles, templates, etc.",
  },
];
