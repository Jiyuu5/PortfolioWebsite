/* eslint-disable react/prop-types */
export default function Card({ title, description, tags, imgID, url }) {
  return (
    <li className="mb-12 grid gap-4 grid-cols-3 sm:grid-cols-8">
      <div className="sm:col-span-2 ">
        <img
          className="object-cover border-2 rounded border-gray-900"
          src={`src/assets/projekt${imgID}.png`}
        ></img>
      </div>
      <div className="col-span-2 sm:col-span-6">
        <h2>
          <a
            href={url}
            className="text-slate-100 text-base font-bold hover:text-teal-400"
            target="_blank"
          >
            {title}
          </a>
        </h2>
        <p className="text-sm leading-normal">{description}</p>
        <div>{tags}</div>
      </div>
    </li>
  );
}
