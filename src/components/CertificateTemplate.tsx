import { forwardRef } from "react";
import certificateBg from "@/assets/certificate-bg.png";

interface CertificateTemplateProps {
  name: string;
}

const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ name }, ref) => {
    // Match the uploaded image's landscape aspect ratio (~1500x850 ≈ 1.76:1)
    return (
      <div
        ref={ref}
        style={{
          width: 1060,
          height: 600,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Certificate background — full image, no cropping */}
        <img
          src={certificateBg}
          alt="Certificate"
          crossOrigin="anonymous"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            display: "block",
          }}
        />

        {/* Participant name — on the line above "for successfully participating" */}
        <div
          style={{
            position: "absolute",
            left: 62,
            top: 295,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30,
              fontWeight: 400,
              fontStyle: "italic",
              color: "hsl(220 15% 25%)",
              letterSpacing: 0.5,
            }}
          >
            {name}
          </span>
        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = "CertificateTemplate";

export default CertificateTemplate;
