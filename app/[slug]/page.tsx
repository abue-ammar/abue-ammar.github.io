import Link from "next/link";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const projects = await import("../data/data").then((mod) => mod.projects);
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
  const projects = await import("../data/data").then((mod) => mod.projects);
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
    <div>
      <h1>{project.name}</h1>
      <p>{project.details}</p>
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        Visit Project
      </Link>
    </div>
  );
}
