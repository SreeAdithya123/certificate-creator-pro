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
          width: 960,
          height: 680,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Certificate background image */}
        <img
          src={certificateBg}
          alt="Certificate"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          crossOrigin="anonymous"
        />

        {/* Participant name overlay — positioned on the line above "for successfully participating" */}
        <div
          style={{
            position: "absolute",
            top: "52%",
            left: 60,
            right: 60,
            transform: "translateY(-100%)",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 36,
              fontWeight: 700,
              fontStyle: "italic",
              color: "hsl(222 35% 20%)",
              display: "block",
              paddingBottom: 8,
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
