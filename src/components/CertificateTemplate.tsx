import { forwardRef } from "react";

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
          background: "linear-gradient(135deg, hsl(250 60% 97%) 0%, hsl(0 0% 100%) 40%, hsl(260 40% 96%) 100%)",
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        {/* Decorative border */}
        <div
          style={{
            position: "absolute",
            inset: 16,
            border: "2px solid hsl(35 92% 33% / 0.35)",
            borderRadius: 8,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 22,
            border: "1px solid hsl(35 92% 33% / 0.18)",
            borderRadius: 6,
            pointerEvents: "none",
          }}
        />

        {/* Purple wave decoration — bottom-right */}
        <svg
          style={{ position: "absolute", bottom: 0, right: 0, width: 400, height: 280, opacity: 0.18 }}
          viewBox="0 0 400 280"
          fill="none"
        >
          <path
            d="M400 280V80C350 120 280 40 220 80C160 120 120 60 60 100C30 120 0 100 0 100V280H400Z"
            fill="url(#waveGrad)"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="400" y2="280">
              <stop offset="0%" stopColor="hsl(260 50% 70%)" />
              <stop offset="100%" stopColor="hsl(222 47% 30%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top-left wave */}
        <svg
          style={{ position: "absolute", top: 0, left: 0, width: 300, height: 200, opacity: 0.10 }}
          viewBox="0 0 300 200"
          fill="none"
        >
          <path
            d="M0 0V140C50 100 100 160 160 120C220 80 260 130 300 100V0H0Z"
            fill="url(#waveGrad2)"
          />
          <defs>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="300" y2="200">
              <stop offset="0%" stopColor="hsl(222 47% 30%)" />
              <stop offset="100%" stopColor="hsl(260 50% 70%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "48px 64px",
            textAlign: "center",
          }}
        >
          {/* Logo / Academy Name */}
          <div style={{ marginBottom: 4 }}>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 3,
                color: "hsl(222 47% 11%)",
                textTransform: "uppercase",
              }}
            >
              Artificial Intelligence Academy
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: 6,
              color: "hsl(222 47% 11%)",
              margin: "20px 0 6px",
              textTransform: "uppercase",
            }}
          >
            Certificate of Completion
          </h2>

          <p
            style={{
              fontSize: 13,
              color: "hsl(215 16% 47%)",
              marginBottom: 16,
              letterSpacing: 1,
            }}
          >
            This certificate is proudly presented to
          </p>

          {/* Student Name */}
          <div
            style={{
              borderBottom: "2px solid hsl(35 92% 33% / 0.5)",
              paddingBottom: 6,
              marginBottom: 18,
              minWidth: 400,
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 38,
                fontWeight: 700,
                fontStyle: "italic",
                color: "hsl(222 47% 11%)",
              }}
            >
              {name}
            </span>
          </div>

          <p
            style={{
              fontSize: 14,
              color: "hsl(222 47% 20%)",
              maxWidth: 520,
              lineHeight: 1.7,
              marginBottom: 6,
            }}
          >
            for the successful completion of the{" "}
            <strong>5-Day GEN AI Workshop</strong>
          </p>

          <p
            style={{
              fontSize: 12,
              color: "hsl(215 16% 47%)",
              marginBottom: 32,
            }}
          >
            Issued after successful assessment &amp; participation
          </p>

          {/* Bottom row: Date + Signature */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
              maxWidth: 600,
            }}
          >
            {/* Date */}
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: 11, color: "hsl(215 16% 47%)", marginBottom: 2 }}>
                Issue Date
              </p>
              <p style={{ fontSize: 14, fontWeight: 600, color: "hsl(222 47% 11%)" }}>
                March 2026
              </p>
            </div>

            {/* Signature */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "hsl(222 47% 20%)",
                  marginBottom: 2,
                }}
              >
                KDP Sree Adithya
              </p>
              <div
                style={{
                  width: 180,
                  height: 1,
                  background: "hsl(222 47% 11% / 0.3)",
                  margin: "0 auto 4px",
                }}
              />
              <p style={{ fontSize: 11, color: "hsl(215 16% 47%)" }}>
                Co-Founder &amp; Director
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = "CertificateTemplate";

export default CertificateTemplate;
