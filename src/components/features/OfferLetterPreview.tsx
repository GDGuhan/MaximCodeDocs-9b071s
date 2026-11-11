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
      <div className="no-print flex flex-wrap items-center justify-center gap-3 text-xs">
        <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-yellow-400">📋</span>
          <span className="text-slate-400">Internship Offer Letter</span>
        </div>
        <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-green-400">●</span>
          <span className="text-slate-400">Dated: {data.date}</span>
        </div>
        <div className="glass-card border-green-400/20 rounded-full px-4 py-2 text-green-400">
          🏢 MSME Aligned
        </div>
        <div className="glass-card border-purple-400/20 rounded-full px-4 py-2 text-purple-400 font-mono text-[11px]">
          {data.refNumber}
        </div>
      </div>

      {/* A4 Paper */}
      <div
        className="offer-letter-paper w-full print-page shadow-2xl overflow-hidden"
        style={{ maxWidth: "794px", borderRadius: "8px" }}
      >
        {/* ── HEADER ── */}
        <div
          className="px-10 pt-7 pb-6"
          style={{
            background:
              "linear-gradient(135deg,#07071c 0%,#0e0a3a 45%,#07071c 100%)",
            borderBottom: "3px solid",
            borderImage: "linear-gradient(90deg,#7c3aed,#2563eb,#06b6d4) 1",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo + Company */}
            <div className="flex items-center gap-4">
              <div
                className="rounded-xl overflow-hidden flex-shrink-0"
                style={{
                  width: 64,
                  height: 64,
                  border: "2px solid rgba(139,92,246,.6)",
                  boxShadow: "0 0 18px rgba(124,58,237,.5)",
                }}
              >
                <img src={maximLogo} alt="Maxim Code" className="w-full h-full object-cover" />
              </div>
              <div>
                <div
                  className="text-[22px] font-bold tracking-[.18em]"
                  style={{
                    background: "linear-gradient(90deg,#c4b5fd,#93c5fd,#06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MAXIM CODE
                </div>
                <div className="text-[10px] text-cyan-400/70 tracking-[.2em] uppercase mt-0.5">
                  Building Future Innovators
                </div>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[9px] text-slate-400">🌐 maximcode.in</span>
                  <span className="text-[9px] text-slate-400">✉ hr@maximcode.in</span>
                  <span className="text-[9px] text-slate-400">📍 Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* MSME */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5"
                style={{
                  border: "2px solid rgba(234,179,8,.5)",
                  boxShadow: "0 0 12px rgba(234,179,8,.3)",
                }}
              >
                <img src={msmeEmblem} alt="MSME" className="w-full h-full object-contain" />
              </div>
              <div className="text-[8px] text-yellow-400/80 text-center tracking-wider font-bold uppercase">
                MSME<br/>Registered
              </div>
            </div>
          </div>
        </div>

        {/* ── RED ACCENT STRIPE ── */}
        <div className="h-1" style={{ background: "linear-gradient(90deg,#dc2626,#ef4444,#dc2626)" }} />
        {/* thin gold stripe */}
        <div className="h-0.5" style={{ background: "linear-gradient(90deg,rgba(234,179,8,.4),rgba(234,179,8,.7),rgba(234,179,8,.4))" }} />

        {/* ── CONTENT ── */}
        <div className="px-12 py-8 bg-white">
          {/* Title block */}
          <div className="text-center mb-7">
            <div className="inline-block px-8 py-2 mb-3 rounded" style={{ background:"rgba(30,27,75,.06)", border:"1px solid rgba(30,27,75,.12)" }}>
              <h1 className="text-[17px] font-bold tracking-[.22em] uppercase" style={{ color:"#1e1b4b" }}>
                {data.title}
              </h1>
            </div>
            <div className="w-16 h-0.5 mx-auto" style={{ background:"linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
          </div>

          {/* Date + Ref */}
          <div className="flex justify-between items-start mb-5 text-[12px] text-slate-600">
            <div><span className="font-semibold text-slate-800">Date:</span> {data.date}</div>
            <div><span className="font-semibold text-slate-800">Ref.:</span> <span className="font-mono text-purple-700">{data.refNumber}</span></div>
          </div>

          {/* To */}
          <div className="mb-5">
            <p className="text-[12px] text-slate-600 font-semibold">To,</p>
            <p className="text-[17px] font-bold text-slate-900 mt-0.5">{data.recipient}</p>
          </div>

          {/* Subject */}
          <div
            className="mb-5 px-4 py-3 rounded-lg"
            style={{ background:"rgba(124,58,237,.05)", borderLeft:"3px solid #7c3aed" }}
          >
            <p className="text-[12px] font-bold text-slate-800">
              Subject: Internship Offer – {data.details.role} ({data.details.domain})
            </p>
          </div>

          {/* Dear */}
          <p className="text-[12px] text-slate-700 mb-4">
            Dear <strong>{data.recipient.split(" ")[0]}</strong>,
          </p>

          {/* Opening */}
          <p
            className="text-[12px] text-slate-700 leading-[1.85] mb-6"
            dangerouslySetInnerHTML={{ __html: data.opening }}
          />

          {/* Details Table */}
          <div className="mb-6 rounded-xl overflow-hidden" style={{ border:"1px solid #e2e8f0" }}>
            <div
              className="px-4 py-2 text-[10px] font-bold text-white tracking-[.18em] uppercase"
              style={{ background:"linear-gradient(90deg,#1e1b4b,#2563eb)" }}
            >
              Internship Details
            </div>
            <table className="w-full text-[12px]">
              <tbody>
                {[
                  { label:"Role / Designation",   value: data.details.role },
                  { label:"Domain / Department",   value: data.details.domain },
                  { label:"Internship Duration",   value: data.details.duration },
                  { label:"Work Mode",             value: data.details.mode },
                  { label:"Stipend",               value: "Certificate-based (Unpaid)" },
                  { label:"Reporting To",          value: "Program Director, Maxim Code" },
                  { label:"Organization",          value: "Maxim Code, Chennai, Tamil Nadu" },
                ].map(({ label, value }, i) => (
                  <tr key={label} style={{ background: i % 2 === 0 ? "#f8fafc" : "#ffffff" }}>
                    <td className="px-4 py-2 font-semibold text-slate-700 w-52">{label}</td>
                    <td className="px-3 py-2 text-slate-400 w-4">:</td>
                    <td className="px-4 py-2 font-medium text-slate-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-[12px] font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full inline-flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0"
                style={{ background:"#7c3aed" }}
              >✦</span>
              Key Responsibilities
            </h3>
            <ul className="space-y-1.5">
              {data.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[12px] text-slate-700 leading-[1.7]">
                  <span
                    className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background:"linear-gradient(135deg,#7c3aed,#06b6d4)" }}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div
            className="mb-6 p-5 rounded-xl"
            style={{
              background:"linear-gradient(135deg,rgba(124,58,237,.04),rgba(6,182,212,.04))",
              border:"1px solid rgba(124,58,237,.15)",
            }}
          >
            <h3 className="text-[12px] font-bold mb-3" style={{ color:"#1e1b4b" }}>
              What You Will Gain at Maxim Code
            </h3>
            <div className="grid grid-cols-2 gap-1.5">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-[11.5px] text-slate-700 leading-[1.6]">
                  <span className="text-purple-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <p
            className="text-[12px] text-slate-700 leading-[1.85] mb-8"
            dangerouslySetInnerHTML={{ __html: data.closing }}
          />

          {/* Signatures */}
          <div className="flex justify-between items-end mt-6 mb-4">
            {/* Accepted by */}
            <div className="text-[12px] text-slate-600">
              <p className="font-semibold text-slate-800 mb-5">Accepted By:</p>
              <div className="w-36 border-b border-slate-400 mb-1" />
              <p className="text-slate-600 font-medium">{data.recipient}</p>
              <p className="text-slate-400 text-[11px]">Date: ___________</p>
            </div>

            {/* CEO signature */}
            <div className="text-right">
              <div className="flex justify-end mb-1">
                <div className="w-36 h-16 overflow-hidden rounded">
                  <img
                    src={signaturesImg}
                    alt="CEO Signature"
                    className="w-full h-full object-cover"
                    style={{ objectPosition:"5% 30%" }}
                  />
                </div>
              </div>
              <div className="h-px w-44 ml-auto mb-1" style={{ background:"linear-gradient(90deg,transparent,#7c3aed)" }} />
              <p className="text-[13px] font-bold text-slate-900">B. Guhan</p>
              <p className="text-[11px] text-slate-600">CEO &amp; Founder</p>
              <p className="text-[11px] font-semibold text-purple-700">Maxim Code</p>
            </div>
          </div>

          {/* Seal / official note */}
          <div
            className="text-center py-2 rounded-lg text-[10px] text-slate-500 italic"
            style={{ borderTop:"1px dashed #e2e8f0" }}
          >
            This is a digitally generated official document issued by Maxim Code · For verification contact hr@maximcode.in
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div
          className="px-10 py-4"
          style={{ background:"linear-gradient(135deg,#07071c 0%,#0e0a3a 100%)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="text-[9px] text-slate-400 leading-relaxed max-w-xs">{data.msme}</div>
            <div className="text-right flex-shrink-0">
              <div
                className="text-[11px] font-bold tracking-[.2em]"
                style={{
                  background:"linear-gradient(90deg,#c4b5fd,#06b6d4)",
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                }}
              >
                MAXIM CODE
              </div>
              <div className="text-[9px] text-slate-500">www.maximcode.in</div>
              <div className="text-[8px] text-slate-600">© {new Date().getFullYear()} All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
