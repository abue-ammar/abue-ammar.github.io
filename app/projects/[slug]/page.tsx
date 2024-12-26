import Link from "next/link";
import { projects } from "../../data/data";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-neutral-100 px-2 py-1 font-[400] no-underline"
          aria-label="home"
        >
          <svg
            viewBox="0 0 24 24"
            version="1.2"
            baseProfile="tiny"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 size-5"
          >
            <path d="M12 3s-6.186 5.34-9.643 8.232A1.04 1.04 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 .98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3" />
          </svg>
          Home
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
