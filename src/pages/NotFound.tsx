import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a] flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">404</div>
        <p className="text-slate-400 text-xl mb-8">Page not found</p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
