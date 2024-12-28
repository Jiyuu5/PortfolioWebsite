/* eslint-disable react/prop-types */
export default function Card({ title, description, tags, imgID, url }) {
  return (
    <li>
      <a href={url} target="_blank">
        <div className="group mb-12 grid gap-4 grid-cols-3 sm:grid-cols-8 lg:opacity-50 hover:opacity-100">
          <picture className="sm:col-span-2 ">
            <source srcSet={`/img/projekt${imgID}.webp`} type="image/webp" />
            <img
              className="object-cover border-2 rounded border-gray-900"
              src={`/img/projekt${imgID}.png`}
              alt={title}
            ></img>
          </picture>
          <div className="col-span-2 sm:col-span-6">
            <div className="flex flex-row gap-2 items-end">
              <h2>
                <span className="text-slate-100 text-base font-bold group-hover:text-teal-400">
                  {title}
                </span>
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 group-hover:text-teal-400 group-hover:translate-x-2 group-hover:-rotate-45 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
            <p className="text-sm leading-normal">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {tags.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-xs bg-teal-950 group-hover:bg-teal-900 text-teal-100 rounded-full px-3 py-1 leading-5 font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </li>
  );
}
