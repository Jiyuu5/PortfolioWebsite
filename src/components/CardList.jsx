import Card from "./Card";
import { PROJECTS } from "./data";

export default function CardList() {
  return (
    <ul className="mt-12 lg:mt-20">
      {PROJECTS.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          imgID={project.imgID}
        />
      ))}
    </ul>
  );
}
