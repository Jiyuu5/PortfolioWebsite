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

  return (
    <footer>
      <ul className="flex flex-row justify-center gap-8 mb-4 mt-8">
        <li>
          <button
            onClick={handleOnClickImpressum}
            className="hover:text-teal-500"
          >
            Impressum
          </button>
        </li>
        <li>
          <button
            onClick={handleOnClickDatenschutz}
            className="hover:text-teal-500"
          >
            Datenschutz
          </button>
        </li>
      </ul>
    </footer>
  );
}
