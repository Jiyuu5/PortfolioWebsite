/* eslint-disable react/prop-types */
import Card from "./Project";
import { PROJECTS } from "./data";

export default function CardList({ language }) {
  return (
    <ul className="mt-12 lg:mt-24">
      {PROJECTS.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description[language]}
          tags={project.tags}
          imgID={project.imgID}
          url={project.url}
        />
      ))}
    </ul>
  );
}
