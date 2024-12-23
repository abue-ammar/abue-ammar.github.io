import Link from "next/link";
export async function generateStaticParams() {
  const projects = await import("../../data/data").then((mod) => mod.projects);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const projects = await import("../../data/data").then((mod) => mod.projects);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist.",
    };
  }

  return {
    title: project.name,
    description: project.details,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const projects = await import("../../data/data").then((mod) => mod.projects);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div>
        <h1>Project Not Found</h1>
        <Link href="/">Back to Projects</Link>
      </div>
    );
  }

  return (
    <article>
      <div className="mb-8 flex justify-between">
        <Link href="/" className="">
          Back To Home
        </Link>
      </div>
      <div className="fade-in">
        <h1 className="text-lg font-semibold">{project.name}</h1>
        <p>{project.details}</p>
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          Visit Project
        </Link>
      </div>
    </article>
  );
}
