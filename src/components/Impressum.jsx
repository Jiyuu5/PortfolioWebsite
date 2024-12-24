/* eslint-disable react/prop-types */
export default function Impressum({ isImpressumOpen, handleCloseImpressum }) {
  if (!isImpressumOpen) return;

  return (
    <div className="mt-8">
      <div className="flex flex-row justify-between">
        <h2 className="text-lg lg:text-2xl font-bold mb-3">Impressum</h2>
        <button
          className="hover:text-teal-500"
          onClick={() => handleCloseImpressum(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p className="mb-1">
        Eric Grebe <br />
        Hochgericht 8 <br />
        38640 Goslar
      </p>
      <p>
        <span>E-Mail: </span>
        <a className="hover:text-teal-500" href="mailto:kontakt@ericgrebe.de">
          kontakt@ericgrebe.de
        </a>
      </p>
    </div>
  );
}
