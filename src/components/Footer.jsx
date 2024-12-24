/* eslint-disable react/prop-types */
export default function Footer({
  isImpressumOpen,
  isDatenschutzOpen,
  onToggleDatenschutz,
  onToggleImpressum,
}) {
  function handleOnClickImpressum() {
    onToggleDatenschutz(false);
    !isImpressumOpen ? onToggleImpressum(true) : onToggleImpressum(false);
  }

  function handleOnClickDatenschutz() {
    onToggleImpressum(false);
    !isDatenschutzOpen ? onToggleDatenschutz(true) : onToggleDatenschutz(false);
  }

  const styleImpressum = isImpressumOpen
    ? "size-5 text-teal-400 rotate-90"
    : "size-5 group-hover:text-teal-400 group-hover:rotate-90 transition-all";
  const styleDatenschutz = isDatenschutzOpen
    ? "size-5 text-teal-400 rotate-90"
    : "size-5 group-hover:text-teal-400 group-hover:rotate-90 transition-all";

  return (
    <footer>
      <ul className="flex flex-row justify-center gap-8 mb-4 mt-8">
        <li className="group flex flex-row gap-2 items-end">
          <button
            onClick={handleOnClickImpressum}
            className="hover:text-teal-500"
          >
            Impressum
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styleImpressum}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </li>
        <li className="group flex flex-row gap-2 items-end">
          <button
            onClick={handleOnClickDatenschutz}
            className="hover:text-teal-500"
          >
            Datenschutz
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styleDatenschutz}
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
