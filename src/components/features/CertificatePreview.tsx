import React from "react";
import { CertificateData } from "@/types";
import { QRCodeDisplay } from "@/components/features/QRCodeDisplay";
import maximLogo from "@/assets/maxim-code-logo.jpg";
import msmeEmblem from "@/assets/msme-emblem.png";
import signaturesImg from "@/assets/signatures.png";

interface CertificatePreviewProps {
  data: CertificateData;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Certificate Info Bar */}
      <div className="no-print flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
          <span className="text-cyan-400 font-mono font-bold">{data.certificateId}</span>
          <span className="text-slate-500">Certificate ID</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
          <span className="text-green-400">✓</span>
          <span className="text-slate-400">Issued: {data.issueDate}</span>
        </div>
        <a
          href={data.qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/5 border border-cyan-400/30 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
        >
          🔗 Verify Certificate
        </a>
      </div>

      {/* Certificate Document */}
      <div
        className="w-full print-page"
        style={{ maxWidth: "900px" }}
      >
        {/* Outer glow wrapper */}
        <div
          className="relative rounded-2xl p-0.5 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4, #7c3aed)",
            boxShadow: "0 0 40px rgba(124,58,237,0.4), 0 0 80px rgba(6,182,212,0.2)",
          }}
        >
          {/* Certificate Body */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #05050f 0%, #080820 40%, #040418 100%)",
              minHeight: "620px",
            }}
          >
            {/* Corner decorative glows */}
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", transform: "translate(-30%,-30%)" }} />
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)", transform: "translate(-30%,30%)" }} />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-15 pointer-events-none"
              style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", transform: "translate(30%,30%)" }} />

            {/* Inner border */}
            <div className="absolute inset-3 rounded-xl pointer-events-none"
              style={{ border: "1px solid rgba(6,182,212,0.25)" }} />
            <div className="absolute inset-4 rounded-xl pointer-events-none"
              style={{ border: "1px solid rgba(124,58,237,0.15)" }} />

            {/* Abstract wave shapes */}
            <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 900 620" preserveAspectRatio="none">
              <path d="M0,200 C150,120 300,280 450,200 C600,120 750,280 900,200 L900,0 L0,0 Z" fill="url(#waveTop)" />
              <path d="M0,420 C150,500 300,340 450,420 C600,500 750,340 900,420 L900,620 L0,620 Z" fill="url(#waveBot)" />
              <defs>
                <linearGradient id="waveTop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="waveBot" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>

            {/* Main content */}
            <div className="relative z-10 p-8 flex flex-col" style={{ minHeight: "620px" }}>
              {/* Header row: Logo | Title | QR */}
              <div className="flex items-start justify-between mb-6">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl overflow-hidden" style={{ width: 56, height: 56, border: "1px solid rgba(124,58,237,0.5)", boxShadow: "0 0 12px rgba(124,58,237,0.4)" }}>
                    <img src={maximLogo} alt="Maxim Code" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-base tracking-widest" style={{ background: "linear-gradient(90deg,#a78bfa,#60a5fa,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      MAXIM CODE
                    </div>
                    <div className="text-[9px] text-cyan-400/60 tracking-widest uppercase">Building Future Innovators</div>
                    <div className="text-[8px] text-slate-500 mt-0.5">B. Guhan · CEO & Founder</div>
                  </div>
                </div>

                {/* Center header tag */}
                <div className="flex-1 text-center px-4 mt-1">
                  <div
                    className="inline-block text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))",
                      border: "1px solid rgba(6,182,212,0.3)",
                      color: "#06b6d4",
                      textShadow: "0 0 8px rgba(6,182,212,0.6)",
                    }}
                  >
                    MSME Registered · India
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-end gap-1">
                  <QRCodeDisplay value={data.qrUrl} size={72} />
                  <div className="text-[7px] text-slate-500 text-right font-mono">{data.certificateId}</div>
                </div>
              </div>

              {/* Divider line */}
              <div className="relative mb-6">
                <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #7c3aed, #06b6d4, #7c3aed, transparent)" }} />
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", boxShadow: "0 0 8px rgba(6,182,212,0.6)" }} />
              </div>

              {/* Certificate Title */}
              <div className="text-center mb-4">
                <div
                  className="font-cinzel text-3xl font-bold tracking-[0.15em] mb-1"
                  style={{
                    background: "linear-gradient(90deg, #c4b5fd, #93c5fd, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "none",
                    filter: "drop-shadow(0 0 12px rgba(6,182,212,0.5))",
                  }}
                >
                  {data.title}
                </div>
                <div className="w-24 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #eab308, transparent)" }} />
              </div>

              {/* Subtitle */}
              <div className="text-center mb-3">
                <p className="font-playfair italic text-slate-300 text-sm tracking-wide">{data.subtitle}</p>
              </div>

              {/* Name */}
              <div className="text-center mb-5">
                <div
                  className="font-cinzel font-bold tracking-widest"
                  style={{
                    fontSize: "clamp(22px, 4vw, 36px)",
                    background: "linear-gradient(90deg, #eab308, #f59e0b, #fcd34d, #eab308)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 16px rgba(234,179,8,0.6))",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  {data.name}
                </div>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #eab308)" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #eab308, transparent)" }} />
                </div>
              </div>

              {/* Description */}
              <div
                className="text-center mb-5 px-6 font-playfair leading-relaxed text-slate-300"
                style={{ fontSize: "11.5px", lineHeight: "1.8" }}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                    style={{
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.4)",
                      color: "#c4b5fd",
                      boxShadow: "0 0 6px rgba(124,58,237,0.2)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom divider */}
              <div className="h-px w-full mb-5" style={{ background: "linear-gradient(90deg, transparent, #7c3aed, #06b6d4, #7c3aed, transparent)" }} />

              {/* Footer row */}
              <div className="flex items-end justify-between gap-4 mt-auto">
                {/* Left Signature */}
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-24 h-12 mb-1 overflow-hidden">
                    <img
                      src={signaturesImg}
                      alt="CEO Signature"
                      className="w-full object-cover object-left-top"
                      style={{ height: "100%", objectPosition: "0% 20%" }}
                    />
                  </div>
                  <div className="h-px w-28 mb-1" style={{ background: "linear-gradient(90deg, transparent, #06b6d4, transparent)" }} />
                  <div className="text-[10px] font-bold text-cyan-300 tracking-wide">B. Guhan</div>
                  <div className="text-[8px] text-slate-400">CEO & Founder</div>
                  <div className="text-[8px] text-purple-400 font-semibold">Maxim Code</div>
                </div>

                {/* Center bottom info */}
                <div className="flex-1 text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden" style={{ border: "1px solid rgba(234,179,8,0.4)", boxShadow: "0 0 8px rgba(234,179,8,0.3)" }}>
                      <img src={msmeEmblem} alt="MSME" className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="text-[8px] text-slate-400 leading-tight max-w-[220px] mx-auto">{data.msme}</div>
                  <div className="text-[8px] text-slate-500 mt-1">Issue Date: {data.issueDate}</div>
                  <div className="font-mono text-[8px] text-cyan-500/60 mt-0.5">{data.certificateId}</div>
                </div>

                {/* Right Signature */}
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-24 h-12 mb-1 overflow-hidden">
                    <img
                      src={signaturesImg}
                      alt="Program Director Signature"
                      className="w-full object-cover"
                      style={{ height: "100%", objectPosition: "100% 20%" }}
                    />
                  </div>
                  <div className="h-px w-28 mb-1" style={{ background: "linear-gradient(90deg, transparent, #7c3aed, transparent)" }} />
                  <div className="text-[10px] font-bold text-purple-300 tracking-wide">B. Guhan</div>
                  <div className="text-[8px] text-slate-400">Program Director</div>
                  <div className="text-[8px] text-purple-400 font-semibold">Maxim Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
