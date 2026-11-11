export interface DocumentFormData {
  name: string;
  domain: string;
  role: string;
  internship: string;
  startDate: string;
  endDate: string;
  workMode: "Remote" | "Hybrid" | "On-site";
}

export interface CertificateData {
  title: string;
  subtitle: string;
  name: string;
  description: string;
  skills: string[];
  duration: string;
  issueDate: string;
  certificateId: string;
  qrUrl: string;
  signatureLeft: string;
  signatureRight: string;
  msme: string;
  domain: string;
  role: string;
  internship: string;
  design: {
    theme: string;
    logoPosition: string;
    qrPosition: string;
    signaturePosition: string;
    msmePosition: string;
  };
}

export interface OfferLetterData {
  title: string;
  date: string;
  recipient: string;
  opening: string;
  details: {
    role: string;
    domain: string;
    duration: string;
    mode: string;
  };
  responsibilities: string[];
  benefits: string[];
  closing: string;
  signature: string;
  msme: string;
  refNumber: string;
}

export type DocumentType = "certificate" | "offer-letter";
