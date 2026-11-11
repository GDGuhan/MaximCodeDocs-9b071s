import React from "react";
import { OfferLetterData } from "@/types";
import maximLogo from "@/assets/maxim-code-logo.jpg";
import msmeEmblem from "@/assets/msme-emblem.png";
import signaturesImg from "@/assets/signatures.png";

interface OfferLetterPreviewProps {
  data: OfferLetterData;
}

export const OfferLetterPreview: React.FC<OfferLetterPreviewProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Status Bar */}
      <div className="no-print flex flex-wrap items-center justify-center gap-3 text-sm">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
          <span className="text-yellow-400 font-bold">📋</span>
          <span className="text-slate-400">Internship Offer Letter</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
          <span className="text-green-400">●</span>
          <span className="text-slate-400">Dated: {data.date}</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-green-400/30 rounded-full px-4 py-2 text-green-400">
          🏢 MSME Aligned
        </div>
      </div>

      {/* A4 Paper */}
      <div
        className="offer-letter-paper w-full print-page shadow-2xl rounded-lg overflow-hidden"
        style={{ maxWidth: "794px", background: "#ffffff", color: "#111111" }}
      >
        {/* Header Band */}
        <div
          className="px-10 pt-6 pb-5"
          style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1a1060 50%, #0a0a2e 100%)" }}
        >
          <div className="flex items-center justify-between">
            {/* Logo + Company Name */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl overflow-hidden" style={{ width: 60, height: 60, border: "2px solid rgba(139,92,246,0.6)", boxShadow: "0 0 15px rgba(124,58,237,0.5)" }}>
                <img src={maximLogo} alt="Maxim Code" className="w-full h-full object-cover" />
              </div>
              <div>
                <div
                  className="text-xl font-bold tracking-widest"
                  style={{ background: "linear-gradient(90deg,#c4b5fd,#93c5fd,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  MAXIM CODE
                </div>
                <div className="text-xs text-cyan-400/70 tracking-widest uppercase mt-0.5">Building Future Innovators</div>
                <div className="text-[10px] text-slate-400 mt-0.5">maximcode.in · hr@maximcode.in</div>
              </div>
            </div>

            {/* MSME Badge */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white" style={{ border: "2px solid rgba(234,179,8,0.5)", boxShadow: "0 0 10px rgba(234,179,8,0.3)" }}>
                <img src={msmeEmblem} alt="MSME" className="w-full h-full object-contain p-0.5" />
              </div>
              <div className="text-[8px] text-yellow-400/80 text-center tracking-wider font-semibold">MSME REG.</div>
            </div>
          </div>
        </div>

        {/* Gradient Separator */}
        <div className="h-1" style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4)" }} />

        {/* Content */}
        <div className="px-12 py-8">
          {/* Title */}
          <div className="text-center mb-6">
            <h1
              className="text-2xl font-bold tracking-widest uppercase"
              style={{ color: "#1e1b4b" }}
            >
              {data.title}
            </h1>
            <div className="w-20 h-0.5 mx-auto mt-2" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
          </div>

          {/* Date & Reference */}
          <div className="flex justify-between items-start mb-6 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-800">Date: </span>
              {data.date}
            </div>
            <div>
              <span className="font-semibold text-slate-800">Ref: </span>
              MC/HR/OFFER/{new Date().getFullYear()}
            </div>
          </div>

          {/* To Section */}
          <div className="mb-6">
            <p className="text-sm text-slate-600 font-semibold">To,</p>
            <p className="text-lg font-bold text-slate-900 mt-0.5">{data.recipient}</p>
          </div>

          {/* Subject */}
          <div
            className="mb-6 px-4 py-3 rounded-lg"
            style={{ background: "rgba(124,58,237,0.06)", borderLeft: "3px solid #7c3aed" }}
          >
            <p className="text-sm font-bold text-slate-800">
              Subject: Internship Offer Letter – {data.details.role} ({data.details.domain})
            </p>
          </div>

          {/* Dear */}
          <p className="text-sm text-slate-700 mb-4">Dear <strong>{data.recipient.split(" ")[0]}</strong>,</p>

          {/* Opening */}
          <p
            className="text-sm text-slate-700 leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: data.opening }}
          />

          {/* Internship Details Table */}
          <div className="mb-6 rounded-xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            <div className="px-4 py-2 text-xs font-bold text-white tracking-widest uppercase" style={{ background: "linear-gradient(90deg, #1e1b4b, #2563eb)" }}>
              Internship Details
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Role / Designation", value: data.details.role },
                  { label: "Domain", value: data.details.domain },
                  { label: "Duration", value: data.details.duration },
                  { label: "Work Mode", value: data.details.mode },
                  { label: "Stipend", value: "Certificate-based (Unpaid)" },
                  { label: "Reporting To", value: "Program Director, Maxim Code" },
                ].map(({ label, value }, i) => (
                  <tr key={label} style={{ background: i % 2 === 0 ? "#f8fafc" : "#ffffff" }}>
                    <td className="px-4 py-2.5 font-semibold text-slate-700 w-48">{label}</td>
                    <td className="px-4 py-2.5 text-slate-500">:</td>
                    <td className="px-4 py-2.5 font-medium text-slate-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full inline-flex items-center justify-center text-white text-[9px] font-bold" style={{ background: "#7c3aed" }}>✦</span>
              Key Responsibilities
            </h3>
            <ul className="space-y-2">
              {data.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", marginTop: "6px" }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-6 p-4 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.05), rgba(6,182,212,0.05))", border: "1px solid rgba(124,58,237,0.15)" }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: "#1e1b4b" }}>
              What You Will Gain
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <p className="text-sm text-slate-700 leading-relaxed mb-6">{data.closing}</p>

          {/* Signature */}
          <div className="flex justify-between items-end mt-8">
            {/* Left: HR Team */}
            <div className="text-sm text-slate-600">
              <p className="font-semibold text-slate-800">Accepted By:</p>
              <div className="mt-6 w-32 border-b border-slate-400" />
              <p className="mt-1 text-xs text-slate-500">{data.recipient}</p>
              <p className="text-xs text-slate-400">Date: ___________</p>
            </div>

            {/* Right: CEO Signature */}
            <div className="text-right">
              <div className="flex justify-end mb-1">
                <div className="w-32 h-14 overflow-hidden">
                  <img
                    src={signaturesImg}
                    alt="CEO Signature"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "0% 30%" }}
                  />
                </div>
              </div>
              <div className="h-px w-40 ml-auto mb-1" style={{ background: "linear-gradient(90deg, transparent, #7c3aed)" }} />
              <p className="text-sm font-bold text-slate-900">B. Guhan</p>
              <p className="text-xs text-slate-600">CEO & Founder</p>
              <p className="text-xs font-semibold" style={{ color: "#7c3aed" }}>Maxim Code</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-10 py-4 mt-2"
          style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1a1060 100%)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="text-[9px] text-slate-400 leading-tight max-w-xs">
              {data.msme}
            </div>
            <div className="text-right">
              <div
                className="text-[10px] font-bold tracking-widest"
                style={{ background: "linear-gradient(90deg,#c4b5fd,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                MAXIM CODE
              </div>
              <div className="text-[8px] text-slate-500">maximcode.in</div>
              <div className="text-[8px] text-slate-600">© {new Date().getFullYear()} All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
