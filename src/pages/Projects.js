import { ProjectCard } from "../components/cards";
import { projects } from "../utils";

export function Projects() {
  return (
    <div className="flex flex-col items-center py-5 bg-gradient-to-b from-blue-200 via-white to-red-50">
      <h1 className="text-5xl my-5">Projects</h1>
      <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-10 p-10">
        {projects.map((item) => (
          <ProjectCard
            name={item.name}
            color={item.color}
            skills={item.skills}
            description={item.description}
            image={item.image}
          >
            {item.body}
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}
