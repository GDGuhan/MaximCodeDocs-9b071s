import React, { useEffect, useRef } from "react";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  className?: string;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ value, size = 80, className = "" }) => {
  const encodedUrl = encodeURIComponent(value);
  // Use a reliable QR API with matching dark theme colors
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size * 2}x${size * 2}&data=${encodedUrl}&bgcolor=04040e&color=06b6d4&margin=6&ecc=M`;

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className="rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          width: size + 6,
          height: size + 6,
          background: "#04040e",
          border: "1px solid rgba(6,182,212,.4)",
          boxShadow: "0 0 12px rgba(6,182,212,.25), inset 0 0 6px rgba(6,182,212,.06)",
        }}
      >
        <img
          src={apiUrl}
          alt="QR Code"
          width={size}
          height={size}
          style={{ display: "block", imageRendering: "crisp-edges" }}
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement;
            if (parent) {
              parent.innerHTML = `<div style="width:${size}px;height:${size}px;display:grid;grid-template-columns:repeat(5,1fr);gap:2px;padding:4px">
                ${Array.from({length:25}).map((_,i)=>`<div style="background:${[0,1,3,6,7,8,10,14,16,17,18,20,21,24].includes(i)?'#06b6d4':'transparent'};border-radius:1px"></div>`).join('')}
              </div>`;
            }
          }}
        />
      </div>
      <p className="text-[7px] text-cyan-400/60 text-center leading-tight tracking-widest uppercase" style={{ maxWidth: size + 6 }}>
        Scan to Verify
      </p>
    </div>
  );
};
