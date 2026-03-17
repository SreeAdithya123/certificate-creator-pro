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
          background: "linear-gradient(160deg, hsl(220 20% 94%) 0%, hsl(250 30% 95%) 30%, hsl(0 0% 100%) 50%, hsl(260 30% 94%) 100%)",
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        {/* Outer decorative border */}
        <div
          style={{
            position: "absolute",
            inset: 14,
            border: "1.5px solid hsl(220 15% 80%)",
            pointerEvents: "none",
          }}
        />
        {/* Inner decorative border */}
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "1px solid hsl(220 15% 85%)",
            pointerEvents: "none",
          }}
        />

        {/* Purple/blue gradient waves — bottom-right */}
        <svg
          style={{ position: "absolute", bottom: 0, right: 0, width: 480, height: 320, opacity: 0.35 }}
          viewBox="0 0 480 320"
          fill="none"
        >
          <path
            d="M480 320V100C440 140 380 60 320 100C260 140 200 70 140 110C80 150 40 120 0 140V320H480Z"
            fill="url(#wave1)"
          />
          <path
            d="M480 320V160C430 190 370 120 310 160C250 200 190 140 130 170C70 200 30 180 0 190V320H480Z"
            fill="url(#wave2)"
            opacity="0.6"
          />
          <path
            d="M480 320V220C420 240 360 200 300 230C240 260 180 220 120 240C60 260 20 250 0 260V320H480Z"
            fill="url(#wave3)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="wave1" x1="0" y1="80" x2="480" y2="320">
              <stop offset="0%" stopColor="hsl(250 40% 82%)" />
              <stop offset="100%" stopColor="hsl(280 35% 75%)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0" y1="140" x2="480" y2="320">
              <stop offset="0%" stopColor="hsl(230 40% 78%)" />
              <stop offset="100%" stopColor="hsl(270 40% 72%)" />
            </linearGradient>
            <linearGradient id="wave3" x1="0" y1="200" x2="480" y2="320">
              <stop offset="0%" stopColor="hsl(260 45% 75%)" />
              <stop offset="100%" stopColor="hsl(290 35% 70%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content — left-aligned */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "48px 60px 44px 60px",
          }}
        >
          {/* Top: Logo + Academy Name */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            {/* Brain icon placeholder */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="24" cy="24" r="22" stroke="hsl(222 30% 40%)" strokeWidth="1" fill="none" />
              <path
                d="M24 10C20 10 17 13 17 16C17 17.5 17.5 18.8 18.3 19.8C16.9 20.8 16 22.3 16 24C16 25.5 16.7 26.8 17.8 27.7C17.3 28.5 17 29.5 17 30.5C17 33.5 19.5 36 22.5 36H25.5C28.5 36 31 33.5 31 30.5C31 29.5 30.7 28.5 30.2 27.7C31.3 26.8 32 25.5 32 24C32 22.3 31.1 20.8 29.7 19.8C30.5 18.8 31 17.5 31 16C31 13 28 10 24 10Z"
                stroke="hsl(222 30% 40%)"
                strokeWidth="1.2"
                fill="none"
              />
              <line x1="24" y1="16" x2="24" y2="36" stroke="hsl(222 30% 40%)" strokeWidth="0.8" />
              <line x1="20" y1="20" x2="28" y2="20" stroke="hsl(222 30% 40%)" strokeWidth="0.6" />
              <line x1="19" y1="24" x2="29" y2="24" stroke="hsl(222 30% 40%)" strokeWidth="0.6" />
              <line x1="20" y1="28" x2="28" y2="28" stroke="hsl(222 30% 40%)" strokeWidth="0.6" />
            </svg>
            {/* Vertical separator */}
            <div style={{ width: 1, height: 40, background: "hsl(222 20% 60%)" }} />
            <div style={{ lineHeight: 1.3 }}>
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: "hsl(222 30% 25%)",
                  display: "block",
                }}
              >
                ARTIFICIAL
              </span>
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: "hsl(222 30% 25%)",
                  display: "block",
                }}
              >
                INTELLIGENCE
              </span>
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: "hsl(222 30% 25%)",
                  display: "block",
                }}
              >
                ACADEMY
              </span>
            </div>
          </div>

          {/* CERTIFICATE heading */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: 4,
              color: "hsl(222 30% 30%)",
              margin: 0,
              lineHeight: 1.1,
              textTransform: "uppercase",
            }}
          >
            Certificate
          </h2>
          <p
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: 4,
              color: "hsl(222 20% 45%)",
              margin: "4px 0 20px 4px",
              textTransform: "uppercase",
            }}
          >
            of Completion
          </p>

          {/* Presented to */}
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              color: "hsl(222 15% 40%)",
              textTransform: "uppercase",
              margin: "0 0 10px 0",
            }}
          >
            This certificate is proudly presented to
          </p>

          {/* Horizontal line + Name */}
          <div
            style={{
              borderTop: "1.5px solid hsl(222 20% 60% / 0.5)",
              paddingTop: 14,
              marginBottom: 16,
              maxWidth: 520,
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 36,
                fontWeight: 700,
                fontStyle: "italic",
                color: "hsl(222 35% 20%)",
              }}
            >
              {name}
            </span>
          </div>

          {/* Description */}
          <p style={{ fontSize: 14, color: "hsl(222 15% 35%)", margin: "0 0 4px 0" }}>
            for successfully participating in a
          </p>
          <p
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "hsl(222 30% 20%)",
              margin: "0 0 6px 0",
            }}
          >
            5-Day GEN AI Workshop
          </p>
          <p style={{ fontSize: 13, color: "hsl(222 15% 40%)", margin: "0 0 4px 0" }}>
            Issued after successful assessment &amp; participation
          </p>
          <p
            style={{
              fontSize: 12,
              fontStyle: "italic",
              color: "hsl(222 12% 55%)",
              margin: "0 0 0 0",
            }}
          >
            * Issued upon verified participation and assessment
          </p>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Bottom: Signature (left) + Date (right) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {/* Signature */}
            <div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: 28,
                  color: "hsl(222 30% 20%)",
                  margin: "0 0 4px 0",
                  lineHeight: 1.2,
                }}
              >
                KDP Sree Adithya
              </p>
              <div
                style={{
                  width: 220,
                  height: 1,
                  background: "hsl(222 20% 40% / 0.4)",
                  marginBottom: 6,
                }}
              />
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "hsl(222 30% 20%)",
                  margin: "0 0 2px 0",
                  textTransform: "uppercase",
                }}
              >
                K D P Sree Adithya
              </p>
              <p style={{ fontSize: 12, color: "hsl(222 15% 40%)", margin: 0 }}>
                Co-Founder &amp; Director
              </p>
            </div>

            {/* Issue Date */}
            <div style={{ textAlign: "right", paddingBottom: 4 }}>
              <p style={{ fontSize: 15, color: "hsl(222 20% 30%)", margin: 0 }}>
                Issue Date: <strong>March 2026</strong>
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
