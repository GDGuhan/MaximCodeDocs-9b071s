import React from "react";
import { useNavigate } from "react-router-dom";
import { DocumentForm } from "@/components/features/DocumentForm";
import { DocumentFormData } from "@/types";
import { generateCertificateData, generateOfferLetterData } from "@/lib/documentGenerator";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGenerate = (data: DocumentFormData) => {
    const certificate = generateCertificateData(data);
    const offerLetter = generateOfferLetterData(data);
    sessionStorage.setItem("mc_certificate", JSON.stringify(certificate));
    sessionStorage.setItem("mc_offer_letter", JSON.stringify(offerLetter));
    sessionStorage.setItem("mc_form", JSON.stringify(data));
    navigate("/preview");
  };

  return <DocumentForm onGenerate={handleGenerate} />;
};
