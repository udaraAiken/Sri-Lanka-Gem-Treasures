import { useState } from "react";
import {
  ShieldCheck,
  Search,
  AlertCircle,
  ExternalLink,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const VerifyCertificate = () => {
  const [certNumber, setCertNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null); // 'success', 'error', or null
  const [mockData, setMockData] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certNumber.trim()) return;

    setIsSearching(true);
    setResult(null);

    // Simulate API Call Delay
    setTimeout(() => {
      setIsSearching(false);
      // Demo logic: NGJA-12345 succeeds, everything else fails
      if (certNumber.trim().toUpperCase() === "NGJA-12345") {
        setResult("success");
        setMockData({
          reportNo: "NGJA-12345",
          date: "October 12, 2025",
          gemType: "Natural Corundum",
          variety: "Blue Sapphire",
          weight: "4.52 Carats",
          cut: "Oval Mixed Cut",
          color: "Vivid Blue (Cornflower)",
          dimensions: "10.2 x 8.4 x 5.1 mm",
          comments: "No indications of heating (NTE). Origin: Sri Lanka.",
        });
      } else {
        setResult("error");
      }
    }, 1200);
  };

  return (
    <div className="verify-container">
      <div className="verify-card">
        <div className="verify-header">
          <ShieldCheck size={40} className="verify-icon" />
          <h2>Authenticity Verification</h2>
          <p>
            Verify your gem's certification with the National Gem and Jewellery
            Authority (NGJA).
          </p>
        </div>

        <form onSubmit={handleVerify} className="verify-form">
          <div className="verify-input-group">
            <input
              type="text"
              placeholder="Enter Certificate No. (Try: NGJA-12345)"
              value={certNumber}
              onChange={(e) => setCertNumber(e.target.value)}
              className="verify-input"
            />
            <button type="submit" className="btn-verify" disabled={isSearching}>
              {isSearching ? (
                <Loader2 size={20} className="spinner" />
              ) : (
                <Search size={20} />
              )}
              <span>Verify</span>
            </button>
          </div>
        </form>

        {/* Results Area */}
        {result === "success" && mockData && (
          <div className="verify-result success slide-down">
            <div className="result-header">
              <CheckCircle2 size={24} className="success-icon" />
              <h3>Certificate Verified</h3>
            </div>
            <div className="cert-details">
              <div className="cert-row">
                <span>Report No:</span> <strong>{mockData.reportNo}</strong>
              </div>
              <div className="cert-row">
                <span>Date:</span> <strong>{mockData.date}</strong>
              </div>
              <div className="cert-row">
                <span>Species:</span> <strong>{mockData.gemType}</strong>
              </div>
              <div className="cert-row">
                <span>Variety:</span> <strong>{mockData.variety}</strong>
              </div>
              <div className="cert-row">
                <span>Weight:</span> <strong>{mockData.weight}</strong>
              </div>
              <div className="cert-row">
                <span>Color:</span> <strong>{mockData.color}</strong>
              </div>
              <div className="cert-row">
                <span>Comments:</span> <strong>{mockData.comments}</strong>
              </div>
            </div>
          </div>
        )}

        {result === "error" && (
          <div className="verify-result error slide-down">
            <AlertCircle size={24} className="error-icon" />
            <div>
              <h3>Certificate Not Found</h3>
              <p>
                We could not find a match for "{certNumber}". Please check the
                number and try again.
              </p>
            </div>
          </div>
        )}

        {/* Official Link */}
        <div className="verify-disclaimer">
          <p>
            This is a demonstration interface. For official verification of any
            Sri Lankan gem certificate, please visit the official government
            portal.
          </p>
          <a
            href="https://www.ngja.gov.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-official-link"
          >
            <span>Visit Official NGJA Portal</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
