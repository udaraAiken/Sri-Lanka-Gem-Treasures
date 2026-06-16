import GemCard from "../components/GemCard";
import { gemsData } from "../data/gemsData";
import { useGems } from "../hooks/useGems";

const Collection = () => {
  const { setSelectedGem } = useGems();
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Our Collection</h1>
        <p className="page-subtitle">
          A curated selection of Sri Lanka's most exceptional gemstones.
        </p>
      </div>
      <section className="section">
        <div className="gem-grid">
          {gemsData.map((gem) => (
            <GemCard key={gem.id} gem={gem} onClick={setSelectedGem} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Collection;
