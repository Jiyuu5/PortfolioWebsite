import Card from "./Card";
import { PROJECTS } from "./data";

export default function CardList() {
  return (
    <ul className="mt-12 lg:mt-24">
      {PROJECTS.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          imgID={project.imgID}
          url={project.url}
        />
      ))}
    </ul>
  );
}
