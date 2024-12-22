/* eslint-disable react/prop-types */
export default function Card({ title, description, tags, imgID }) {
  return (
    <>
      <div>
        <div>
          <img
            className="size-24 "
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
      </div>
    </>
  );
}
