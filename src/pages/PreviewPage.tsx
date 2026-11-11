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
  const [printMode, setPrintMode] = useState<"current" | null>(null);

  useEffect(() => {
    const cert = sessionStorage.getItem("mc_certificate");
    const offer = sessionStorage.getItem("mc_offer_letter");
    if (!cert || !offer) { navigate("/"); return; }
    setCertificate(JSON.parse(cert));
    setOfferLetter(JSON.parse(offer));
  }, [navigate]);

  const handlePrint = () => {
    setPrintMode("current");
    setTimeout(() => {
      window.print();
      setPrintMode(null);
    }, 100);
  };

  const handlePrintBoth = () => {
    // Switch to cert, print, then offer letter will follow on next page via print-break
    setActiveTab("certificate");
    setTimeout(() => {
      window.print();
    }, 200);
  };

  if (!certificate || !offerLetter) {
    return (
      <div className="min-h-screen bg-[#04040e] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-10 h-10 rounded-full border-2 border-t-cyan-400 border-r-purple-500 border-b-transparent border-l-transparent animate-spin"
          />
          <div className="text-cyan-400 text-sm tracking-widest">Loading Documents…</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04040e] via-[#080818] to-[#04040e]">
      {/* ── TOPBAR ── */}
      <div className="no-print sticky top-0 z-50 bg-[#04040e]/90 backdrop-blur-md border-b border-white/8 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          {/* Left: back + brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              ← Back
            </button>
            <div className="w-px h-5 bg-white/15" />
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center"
                style={{ boxShadow:"0 0 10px rgba(124,58,237,.4)" }}
              >
                <span className="text-white font-bold text-xs">MC</span>
              </div>
              <span className="text-white font-semibold text-sm">Maxim Code</span>
              <span className="text-slate-600 text-xs hidden sm:block">· Documents</span>
            </div>
          </div>

          {/* Center: Tabs */}
          <div className="flex glass-card rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveTab("certificate")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "certificate"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🏆 Certificate
            </button>
            <button
              onClick={() => setActiveTab("offer-letter")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "offer-letter"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📄 Offer Letter
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-xl glass-card hover:bg-white/10 text-slate-300 text-sm font-medium transition-all flex items-center gap-1.5"
            >
              🖨️ <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handlePrintBoth}
              className="px-3 py-2 rounded-xl glass-card border-purple-400/25 hover:bg-white/10 text-purple-300 text-sm font-medium transition-all flex items-center gap-1.5"
            >
              📑 <span className="hidden sm:inline">Print Both</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-white text-sm font-bold transition-all flex items-center gap-2"
              style={{
                background:"linear-gradient(90deg,#7c3aed,#06b6d4)",
                boxShadow:"0 0 20px rgba(124,58,237,.3)",
              }}
            >
              ⬇️ Save PDF
            </button>
          </div>
        </div>
      </div>

      {/* ── DOCUMENT META PILLS ── */}
      <div className="no-print px-4 pt-5 pb-1 flex justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="glass-card rounded-full px-3 py-1.5 text-xs text-slate-400 flex items-center gap-1.5">
            <span className="text-yellow-400">👤</span>
            {certificate.name}
          </div>
          <div className="glass-card rounded-full px-3 py-1.5 text-xs text-slate-400 flex items-center gap-1.5">
            <span className="text-cyan-400">🎓</span>
            {certificate.domain}
          </div>
          <div className="glass-card rounded-full px-3 py-1.5 text-xs text-slate-400 flex items-center gap-1.5">
            <span className="text-purple-400">📅</span>
            {certificate.duration}
          </div>
          <div className="glass-card rounded-full px-3 py-1.5 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            {certificate.certificateId}
          </div>
        </div>
      </div>

      {/* ── DOCUMENT CONTENT ── */}
      <div className="py-6 px-4">
        {activeTab === "certificate"
          ? <CertificatePreview data={certificate} />
          : <OfferLetterPreview data={offerLetter} />
        }
      </div>

      {/* Print-both hidden section: both docs for full print */}
      <div className="hidden print:block">
        <div className="print-break">
          <CertificatePreview data={certificate} />
        </div>
        <div>
          <OfferLetterPreview data={offerLetter} />
        </div>
      </div>
    </div>
  );
};
