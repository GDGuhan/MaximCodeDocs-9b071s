import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CertificatePreview } from "@/components/features/CertificatePreview";
import { OfferLetterPreview } from "@/components/features/OfferLetterPreview";
import { CertificateData, OfferLetterData } from "@/types";

export const PreviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"certificate" | "offer-letter">("certificate");
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [offerLetter, setOfferLetter] = useState<OfferLetterData | null>(null);

  useEffect(() => {
    const cert = sessionStorage.getItem("mc_certificate");
    const offer = sessionStorage.getItem("mc_offer_letter");
    if (!cert || !offer) {
      navigate("/");
      return;
    }
    setCertificate(JSON.parse(cert));
    setOfferLetter(JSON.parse(offer));
  }, [navigate]);

  const handlePrint = () => {
    window.print();
  };

  if (!certificate || !offerLetter) {
    return (
      <div className="min-h-screen bg-[#06060f] flex items-center justify-center">
        <div className="text-cyan-400 text-xl animate-pulse">Loading documents...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06060f] via-[#0a0a1a] to-[#06060f]">
      {/* Top Bar */}
      <div className="no-print sticky top-0 z-50 bg-[#06060f]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              ← Back
            </button>
            <div className="w-px h-5 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-xs">MC</span>
              </div>
              <span className="text-white font-semibold text-sm">Maxim Code · Documents</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex bg-white/5 rounded-xl p-1 gap-1 border border-white/10">
            <button
              onClick={() => setActiveTab("certificate")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "certificate"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🏆 Certificate
            </button>
            <button
              onClick={() => setActiveTab("offer-letter")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "offer-letter"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📄 Offer Letter
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-medium transition-all flex items-center gap-2"
            >
              🖨️ Print
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 text-white text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20"
            >
              ⬇️ Save PDF
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8 px-4">
        {activeTab === "certificate" ? (
          <CertificatePreview data={certificate} />
        ) : (
          <OfferLetterPreview data={offerLetter} />
        )}
      </div>
    </div>
  );
};
