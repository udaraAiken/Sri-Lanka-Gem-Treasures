import { useState } from "react";
import { MapPin } from "lucide-react";

const MapSection = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: "ratnapura",
      name: "Ratnapura",
      x: "38%",
      y: "70%",
      title: "City of Gems",
      description:
        "The historic heart of Sri Lanka's gem industry, famous for Sapphires, Rubies, and Chrysoberyl.",
    },
    {
      id: "meetiyagoda",
      name: "Meetiyagoda",
      x: "25%",
      y: "85%",
      title: "Moonstone Mines",
      description:
        "One of the world's few sources for rare blue-sheen Moonstones, mined by hand.",
    },
    {
      id: "elahera",
      name: "Elahera",
      x: "50%",
      y: "45%",
      title: "Sapphire Deposits",
      description:
        "A prolific region producing fine blue sapphires, vibrant spinels, and garnets.",
    },
  ];

  return (
    <div className="map-section">
      <div className="map-container">
        {/* Simple Abstract SVG representing Sri Lanka */}
        <svg
          viewBox="0 0 400 600"
          className="sri-lanka-svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M200,50 C180,100 150,150 120,200 C90,250 80,300 85,350 C90,400 110,450 140,500 C170,550 200,580 230,550 C260,520 280,470 290,420 C300,370 290,320 270,270 C250,220 220,170 200,50 Z"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="2"
          />
        </svg>

        {/* Hotspots */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className={`map-hotspot ${activeHotspot === spot.id ? "active" : ""}`}
            style={{ left: spot.x, top: spot.y }}
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
            onClick={() => setActiveHotspot(spot.id)}
          >
            <div className="hotspot-dot"></div>
            <div className="hotspot-pulse"></div>

            {activeHotspot === spot.id && (
              <div className="hotspot-tooltip">
                <h4>{spot.title}</h4>
                <p>{spot.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="map-legend">
        <h3>Explore the Gem Hotspots</h3>
        <p>
          Hover over or click the markers to learn about Sri Lanka's legendary
          mining regions.
        </p>
        <ul className="legend-list">
          {hotspots.map((spot) => (
            <li key={spot.id}>
              <MapPin size={16} className="legend-icon" />
              <strong>{spot.name}:</strong> {spot.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapSection;
