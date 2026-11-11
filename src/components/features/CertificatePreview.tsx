import React from "react";
import { CertificateData } from "@/types";
import { QRCodeDisplay } from "@/components/features/QRCodeDisplay";
import maximLogo from "@/assets/maxim-code-logo.jpg";
import msmeEmblem from "@/assets/msme-emblem.png";
import signaturesImg from "@/assets/signatures.png";
import certBg from "@/assets/cert-bg-texture.jpg";

interface CertificatePreviewProps {
  data: CertificateData;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Info bar */}
      <div className="no-print flex flex-wrap items-center justify-center gap-3 text-sm">
        <div className="flex items-center gap-2 glass-card rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-neon" />
          <span className="text-cyan-400 font-mono font-bold tracking-wider">{data.certificateId}</span>
        </div>
        <div className="flex items-center gap-2 glass-card rounded-full px-4 py-2">
          <span className="text-green-400 text-xs">✓</span>
          <span className="text-slate-400 text-xs">Issued: {data.issueDate}</span>
        </div>
        <a
          href={data.qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 glass-card border-cyan-400/30 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-400/10 transition-colors text-xs"
        >
          🔗 Verify Certificate
        </a>
      </div>

      {/* Certificate — A4 Landscape wrapper */}
      <div className="w-full print-page" style={{ maxWidth: "960px" }}>
        {/* Animated outer glow border */}
        <div
          className="relative rounded-2xl p-[2px] animate-glow-pulse"
          style={{
            background: "linear-gradient(135deg,#7c3aed,#2563eb 35%,#06b6d4 65%,#7c3aed)",
          }}
        >
          {/* Certificate body */}
          <div
            className="relative rounded-2xl overflow-hidden cert-scanlines"
            style={{ minHeight: "640px" }}
          >
            {/* Background texture */}
            <div className="absolute inset-0">
              <img src={certBg} alt="" className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(4,4,14,.92) 0%,rgba(7,7,24,.88) 50%,rgba(4,4,14,.94) 100%)" }} />
            </div>

            {/* Radial spotlight from top center */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,.08) 0%, transparent 70%)" }} />

            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-56 h-56 pointer-events-none opacity-25" style={{ background:"radial-gradient(circle,#7c3aed,transparent 70%)",transform:"translate(-35%,-35%)" }} />
            <div className="absolute top-0 right-0 w-56 h-56 pointer-events-none opacity-25" style={{ background:"radial-gradient(circle,#06b6d4,transparent 70%)",transform:"translate(35%,-35%)" }} />
            <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none opacity-20" style={{ background:"radial-gradient(circle,#2563eb,transparent 70%)",transform:"translate(-30%,30%)" }} />
            <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-20" style={{ background:"radial-gradient(circle,#7c3aed,transparent 70%)",transform:"translate(30%,30%)" }} />

            {/* Inner frames */}
            <div className="absolute inset-3 rounded-xl pointer-events-none" style={{ border:"1.5px solid rgba(6,182,212,.18)" }} />
            <div className="absolute inset-5 rounded-xl pointer-events-none" style={{ border:"1px solid rgba(124,58,237,.12)" }} />

            {/* Corner brackets */}
            <div className="cert-corner-tl" />
            <div className="cert-corner-tr" />
            <div className="cert-corner-bl" />
            <div className="cert-corner-br" />

            {/* Wave SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" viewBox="0 0 960 640" preserveAspectRatio="none">
              <path d="M0,160 C160,100 320,220 480,160 C640,100 800,220 960,160 L960,0 L0,0 Z" fill="url(#wT)" />
              <path d="M0,480 C160,540 320,420 480,480 C640,540 800,420 960,480 L960,640 L0,640 Z" fill="url(#wB)" />
              <defs>
                <linearGradient id="wT" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
                <linearGradient id="wB" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient>
              </defs>
            </svg>

            {/* ── MAIN CONTENT ─────────────────────────────────── */}
            <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: "640px" }}>

              {/* ── ROW 1: Logo | MSME Badge | QR ── */}
              <div className="flex items-start justify-between mb-4 gap-4">
                {/* Logo + Brand */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div
                    className="rounded-xl overflow-hidden flex-shrink-0"
                    style={{ width:58,height:58, border:"1.5px solid rgba(124,58,237,.55)", boxShadow:"0 0 16px rgba(124,58,237,.45)" }}
                  >
                    <img src={maximLogo} alt="Maxim Code" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div
                      className="font-bold text-[15px] tracking-[.22em]"
                      style={{ background:"linear-gradient(90deg,#a78bfa,#60a5fa,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}
                    >
                      MAXIM CODE
                    </div>
                    <div className="text-[8.5px] text-cyan-400/60 tracking-[.2em] uppercase mt-px">Building Future Innovators</div>
                    <div className="text-[7.5px] text-slate-500 mt-px">B. Guhan · CEO &amp; Founder · maximcode.in</div>
                  </div>
                </div>

                {/* Center MSME Pill */}
                <div className="flex-1 flex flex-col items-center gap-1 mt-1">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[9px] font-bold tracking-[.25em] uppercase"
                    style={{
                      background:"linear-gradient(90deg,rgba(124,58,237,.12),rgba(6,182,212,.12))",
                      border:"1px solid rgba(6,182,212,.35)",
                      color:"#06b6d4",
                      textShadow:"0 0 10px rgba(6,182,212,.5)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-neon" />
                    MSME Registered &nbsp;·&nbsp; India
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse-neon" />
                  </div>
                  <div className="text-[7.5px] text-slate-500 tracking-widest uppercase">Govt. of India Recognised</div>
                </div>

                {/* QR */}
                <div className="flex-shrink-0 flex flex-col items-end gap-1">
                  <div
                    className="p-1.5 rounded-xl"
                    style={{ background:"rgba(6,182,212,.07)", border:"1px solid rgba(6,182,212,.25)", boxShadow:"0 0 12px rgba(6,182,212,.15)" }}
                  >
                    <QRCodeDisplay value={data.qrUrl} size={76} />
                  </div>
                  <div className="text-[7px] text-slate-500 font-mono text-right">{data.certificateId}</div>
                </div>
              </div>

              {/* ── DIVIDER ── */}
              <div className="relative mb-4">
                <div className="h-px" style={{ background:"linear-gradient(90deg,transparent,#7c3aed 20%,#06b6d4 50%,#7c3aed 80%,transparent)" }} />
                <div
                  className="absolute left-1/2 -translate-x-1/2 -top-[7px] w-3.5 h-3.5 rounded-full"
                  style={{ background:"linear-gradient(135deg,#7c3aed,#06b6d4)", boxShadow:"0 0 10px rgba(6,182,212,.7)" }}
                />
              </div>

              {/* ── TITLE ── */}
              <div className="text-center mb-2">
                <h1
                  className="font-cinzel font-bold tracking-[.18em] mb-1"
                  style={{
                    fontSize:"clamp(18px,3vw,28px)",
                    background:"linear-gradient(90deg,#c4b5fd 10%,#93c5fd 50%,#06b6d4 90%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    filter:"drop-shadow(0 0 14px rgba(6,182,212,.5))",
                    letterSpacing:".18em",
                  }}
                >
                  {data.title}
                </h1>
                {/* Ornamental underline */}
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-12" style={{ background:"linear-gradient(90deg,transparent,#eab308)" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" style={{ boxShadow:"0 0 6px #eab308" }} />
                  <div className="h-px w-20" style={{ background:"linear-gradient(90deg,#eab308,transparent,#eab308)" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" style={{ boxShadow:"0 0 6px #eab308" }} />
                  <div className="h-px w-12" style={{ background:"linear-gradient(90deg,#eab308,transparent)" }} />
                </div>
              </div>

              {/* ── SUBTITLE ── */}
              <p className="text-center font-playfair italic text-slate-300/80 text-[12px] tracking-wide mb-2">{data.subtitle}</p>

              {/* ── NAME ── */}
              <div className="text-center mb-3">
                <div
                  className="font-cinzel font-bold tracking-[.2em] uppercase inline-block"
                  style={{
                    fontSize:"clamp(24px,4.5vw,40px)",
                    background:"linear-gradient(90deg,#eab308 0%,#f59e0b 30%,#fde68a 55%,#f59e0b 75%,#eab308 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    filter:"drop-shadow(0 0 18px rgba(234,179,8,.65))",
                  }}
                >
                  {data.name.toUpperCase()}
                </div>
                <div className="flex items-center justify-center gap-3 mt-1.5">
                  <div className="h-px flex-1 max-w-[120px]" style={{ background:"linear-gradient(90deg,transparent,#eab308)" }} />
                  <div className="flex gap-1">
                    {[...Array(3)].map((_,i)=>(
                      <div key={i} className="w-1 h-1 rounded-full bg-yellow-400/70" />
                    ))}
                  </div>
                  <div className="h-px flex-1 max-w-[120px]" style={{ background:"linear-gradient(90deg,#eab308,transparent)" }} />
                </div>
              </div>

              {/* ── DESCRIPTION ── */}
              <div
                className="text-center mb-4 px-8 font-playfair text-slate-300/85 leading-[1.9]"
                style={{ fontSize:"11px" }}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />

              {/* ── SKILLS ── */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-full text-[9.5px] font-semibold tracking-wide"
                    style={{
                      background:"rgba(124,58,237,.12)",
                      border:"1px solid rgba(124,58,237,.4)",
                      color:"#c4b5fd",
                      boxShadow:"0 0 8px rgba(124,58,237,.18)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* ── BOTTOM DIVIDER ── */}
              <div className="h-px mb-4" style={{ background:"linear-gradient(90deg,transparent,#7c3aed 20%,#06b6d4 50%,#7c3aed 80%,transparent)" }} />

              {/* ── FOOTER ROW ── */}
              <div className="flex items-end justify-between gap-3 mt-auto">

                {/* Left: CEO signature */}
                <div className="flex flex-col items-center min-w-[148px]">
                  <div className="w-28 h-14 overflow-hidden mb-1 rounded">
                    <img
                      src={signaturesImg}
                      alt="CEO Signature"
                      className="w-full h-full object-cover"
                      style={{ objectPosition:"5% 25%" }}
                    />
                  </div>
                  <div className="h-px w-32 mb-1" style={{ background:"linear-gradient(90deg,transparent,#06b6d4,transparent)" }} />
                  <div className="text-[9.5px] font-bold text-cyan-300 tracking-wide">B. Guhan</div>
                  <div className="text-[8px] text-slate-400">CEO &amp; Founder</div>
                  <div className="text-[8px] font-semibold text-purple-400">Maxim Code</div>
                </div>

                {/* Center: MSME + meta */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-full overflow-hidden mb-2"
                    style={{ border:"1.5px solid rgba(234,179,8,.45)", boxShadow:"0 0 12px rgba(234,179,8,.3), 0 0 24px rgba(234,179,8,.1)" }}
                  >
                    <img src={msmeEmblem} alt="MSME Emblem" className="w-full h-full object-contain p-0.5 bg-white" />
                  </div>
                  <div className="text-[7.5px] text-slate-400 leading-[1.6] max-w-[220px] mb-1">{data.msme}</div>
                  <div className="text-[7.5px] text-yellow-400/70 font-semibold tracking-wider mb-0.5">✦ Aligned with MSME Guidelines ✦</div>
                  <div className="text-[7px] text-slate-500">Issue Date: {data.issueDate}</div>
                  <div className="font-mono text-[7px] text-cyan-500/50 mt-0.5">{data.certificateId}</div>
                </div>

                {/* Right: Program Director signature */}
                <div className="flex flex-col items-center min-w-[148px]">
                  <div className="w-28 h-14 overflow-hidden mb-1 rounded">
                    <img
                      src={signaturesImg}
                      alt="Director Signature"
                      className="w-full h-full object-cover"
                      style={{ objectPosition:"95% 25%" }}
                    />
                  </div>
                  <div className="h-px w-32 mb-1" style={{ background:"linear-gradient(90deg,transparent,#7c3aed,transparent)" }} />
                  <div className="text-[9.5px] font-bold text-purple-300 tracking-wide">B. Guhan</div>
                  <div className="text-[8px] text-slate-400">Program Director</div>
                  <div className="text-[8px] font-semibold text-purple-400">Maxim Code</div>
                </div>
              </div>
            </div>
            {/* ── END CONTENT ── */}
          </div>
        </div>
      </div>
    </div>
  );
};
