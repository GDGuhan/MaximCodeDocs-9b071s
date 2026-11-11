import React, { useEffect, useRef } from "react";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  className?: string;
}

// Minimal QR code renderer using a public API for client-side display
export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ value, size = 80, className = "" }) => {
  const encodedUrl = encodeURIComponent(value);
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedUrl}&bgcolor=06060f&color=06b6d4&margin=4`;

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className="rounded-lg overflow-hidden"
        style={{
          border: "1px solid rgba(6,182,212,0.4)",
          boxShadow: "0 0 10px rgba(6,182,212,0.3)",
          width: size + 4,
          height: size + 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06060f",
        }}
      >
        <img
          src={apiUrl}
          alt="QR Code"
          width={size}
          height={size}
          style={{ display: "block" }}
          onError={(e) => {
            // Fallback: show a placeholder grid
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <p className="text-[7px] text-cyan-400/70 text-center leading-tight" style={{ maxWidth: size + 4 }}>
        SCAN TO VERIFY
      </p>
    </div>
  );
};
