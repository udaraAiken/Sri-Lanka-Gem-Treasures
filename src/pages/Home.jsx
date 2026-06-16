import { useNavigate } from "react-router-dom";

import GemCard from "../components/GemCard";
import MapSection from "../components/MapSection";

import { gemsData } from "../data/gemsData";

import { useGems } from "../hooks/useGems";

const Home = () => {
  const { setSelectedGem } = useGems();
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <img
          src="/assets/hero_gem.jpg"
          alt="Ceylon Gems Background"
          className="hero-bg"
        />
        <div className="hero-content">
          <h1 className="hero-title">Discover Sri Lanka's Treasures</h1>
          <p className="hero-subtitle">
            Explore the world's finest sapphires, rubies, and exotic gemstones
            from the legendary Ratnadeepa—the Island of Gems.
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate("/collection")}
          >
            Explore Our Collection
          </button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Gemstones</h2>
        <div className="gem-grid">
          {gemsData.slice(0, 3).map((gem) => (
            <GemCard key={gem.id} gem={gem} onClick={setSelectedGem} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            className="btn-primary"
            onClick={() => navigate("/collection")}
          >
            View All Gems
          </button>
        </div>
      </section>

      <section
        className="section"
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <h2 className="section-title">The Gem Island</h2>
        <MapSection />
      </section>
    </>
  );
};

export default Home;
