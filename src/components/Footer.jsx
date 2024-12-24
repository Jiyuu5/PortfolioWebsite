/* eslint-disable react/prop-types */
export default function Footer({ isImpressumOpen, onToggleImpressum }) {
  return (
    <footer>
      <ul className="flex flex-row justify-center gap-8 mb-4 mt-8">
        <li>
          <button
            onClick={() => onToggleImpressum(!isImpressumOpen)}
            className="hover:text-teal-500"
          >
            Impressum
          </button>
        </li>
        <li>
          <button className="hover:text-teal-500">Datenschutz</button>
        </li>
      </ul>
    </footer>
  );
}
