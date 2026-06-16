import VerifyCertificate from "../components/VerifyCertificate";

const Verify = () => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Certificate Verification</h1>
        <p className="page-subtitle">
          Confirm the authenticity of your gemstone.
        </p>
      </div>
      <section
        className="section"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <VerifyCertificate />
      </section>
    </>
  );
};

export default Verify;
