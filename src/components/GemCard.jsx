import { ChevronRight } from "lucide-react";

const GemCard = ({ gem, onClick }) => {
  return (
    <div className="gem-card" onClick={() => onClick(gem)}>
      <div className="gem-card-image-wrapper">
        {/* We use the first image as the cover */}
        <img src={gem.images[0]} alt={gem.name} className="gem-card-image" />
        <div className="gem-card-category">{gem.category}</div>
      </div>
      <div className="gem-card-content">
        <h3 className="gem-card-title">{gem.name}</h3>
        <p className="gem-card-tagline">{gem.tagline}</p>
        <button className="btn-view-details">
          <span>View Details</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default GemCard;
