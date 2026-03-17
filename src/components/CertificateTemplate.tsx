import { forwardRef } from "react";
import certificateBg from "@/assets/certificate-bg.png";

interface CertificateTemplateProps {
  name: string;
}

const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ name }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width: 1060,
          height: 600,
          position: "relative",
          overflow: "hidden",
          background: "#f0eef3",
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
            width: 1060,
            height: 600,
            objectFit: "fill",
            display: "block",
          }}
        />

        {/* Participant name — positioned on the line between "presented to" and "for successfully" */}
        {/* Using percentage-based top to stay consistent across scales */}
        <div
          style={{
            position: "absolute",
            left: 265,
            top: "44.5%",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28,
              fontWeight: 400,
              fontStyle: "italic",
              color: "hsl(220 20% 22%)",
              letterSpacing: 0.3,
              display: "inline-block",
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
