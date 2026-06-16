import MapSection from "../components/MapSection";

const About = () => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">About Ceylon Gems</h1>
        <p className="page-subtitle">The rich history of Ratnadeepa.</p>
      </div>
      <section className="section" style={{ maxWidth: "800px" }}>
        <h3
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "var(--color-text-primary)",
          }}
        >
          A Legacy of Brilliance
        </h3>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
            fontSize: "1.1rem",
          }}
        >
          For over 2,000 years, Sri Lanka has been renowned as the "Island of
          Jewels." Historically known as Serendib and Ceylon, this small island
          nation produces an astonishing variety of high-quality gemstones.
        </p>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
            fontSize: "1.1rem",
          }}
        >
          Ancient royalty, including King Solomon and the Pharaohs, reportedly
          sought Ceylon gems. Today, Sri Lankan blue sapphires are considered
          the gold standard, famously adorning the engagement ring of Diana,
          Princess of Wales.
        </p>

        <h3
          style={{
            fontSize: "2rem",
            margin: "2rem 0 1rem",
            color: "var(--color-text-primary)",
          }}
        >
          Ethical Sourcing
        </h3>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem" }}>
          Unlike massive industrialized mining operations, Sri Lankan gem mining
          remains a largely artisanal endeavor. Mining is highly regulated to
          protect the environment. Pits are dug by hand and must be refilled and
          replanted once mining concludes, ensuring sustainable practices and
          fair livelihoods for local communities.
        </p>
      </section>
      <section
        className="section"
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <MapSection />
      </section>
    </>
  );
};

export default About;
