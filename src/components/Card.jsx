/* eslint-disable react/prop-types */
export default function Card({ title, description, tags, imgID }) {
  return (
    <li className="mb-12">
      <div className="size-24 ">
        <img
          className="object-contain h-24 w-24"
          src={`src/assets/projekt${imgID}.png`}
        ></img>
      </div>
      <div>
        <h2>
          <a href="https://leseweltoker.de/">{title}</a>
        </h2>
        <p>{description}</p>
        <div>{tags}</div>
      </div>
    </li>
  );
}
