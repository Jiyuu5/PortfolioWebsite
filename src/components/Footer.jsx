/* eslint-disable react/prop-types */
export default function Footer({
  isImpressumOpen,
  isDatenschutzOpen,
  onToggleDatenschutz,
  onToggleImpressum,
}) {
  function handleOnClickImpressum() {
    onToggleDatenschutz(false);
    onToggleImpressum(true);
  }

  function handleOnClickDatenschutz() {
    onToggleImpressum(false);
    onToggleDatenschutz(true);
  }

  const styleImpressumSvg = isImpressumOpen
    ? "size-5 text-teal-400 rotate-90"
    : "size-5 group-hover:text-teal-400 group-hover:rotate-90 transition-all";
  const styleDatenschutzSvg = isDatenschutzOpen
    ? "size-5 text-teal-400 rotate-90"
    : "size-5 group-hover:text-teal-400 group-hover:rotate-90 transition-all";

  return (
    <footer>
      <ul className="flex flex-row justify-center gap-8 mb-4 mt-8">
        <li
          onClick={handleOnClickImpressum}
          className=" group flex flex-row gap-2 items-end  hover:text-teal-500"
        >
          <button>Impressum</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styleImpressumSvg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
        <li
          onClick={handleOnClickDatenschutz}
          className="group flex flex-row gap-2 items-end hover:text-teal-500"
        >
          <button>Datenschutz</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styleDatenschutzSvg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
      </ul>
    </footer>
  );
}
