/* eslint-disable react/prop-types */
export default function Card({ title, description, tags, imgID, url }) {
  return (
    <li>
      <a href={url} target="_blank">
        <div className="group mb-12 grid gap-4 grid-cols-3 sm:grid-cols-8 opacity-50 hover:opacity-100">
          <div className="sm:col-span-2 ">
            <img
              className="object-cover border-2 rounded border-gray-900"
              src={`src/assets/projekt${imgID}.png`}
            ></img>
          </div>
          <div className="col-span-2 sm:col-span-6">
            <h2>
              <span className="text-slate-100 text-base font-bold group-hover:text-teal-400">
                {title}
              </span>
            </h2>
            <p className="text-sm leading-normal">{description}</p>
            <ul className="flex gap-2 mt-2">
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
