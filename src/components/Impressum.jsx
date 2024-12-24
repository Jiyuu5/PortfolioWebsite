/* eslint-disable react/prop-types */
export default function Impressum({ isImpressumOpen }) {
  if (!isImpressumOpen) return;

  return (
    <div>
      <h2 className="text-lg lg:text-xl font-bold mb-3">Impressum</h2>
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
