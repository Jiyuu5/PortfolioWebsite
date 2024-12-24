/* eslint-disable react/prop-types */
export default function Impressum({ isImpressumOpen }) {
  if (!isImpressumOpen) return;

  return (
    <div className="">
      <h2>Impressum</h2>
      <p>
        Eric Grebe <br />
        Hochgericht 8 <br />
        38640 Goslar
      </p>
      <p>
        E-Mail: <a href="mailto:kontakt@ericgrebe.de"></a>
        kontakt@ericgrebe.de
      </p>
    </div>
  );
}
