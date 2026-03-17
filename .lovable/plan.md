

## Certificate Download Web Application

### Overview
A polished, single-page certificate generator where students enter their name and instantly preview + download a personalized PDF certificate. The certificate design matches the uploaded reference (Artificial Intelligence Academy - 5-Day GEN AI Workshop).

### Page 1: Landing / Input Page
- **Hero section**: "Claim Your Achievement" headline with brief description of the 5-Day GEN AI Workshop
- **Centered form** (max-w 400px) with:
  - Full Name input (validated: letters/spaces only, required)
  - Optional Registration ID field
  - "Generate Certificate" primary button (deep navy, gold accent on hover)
- Soft slate-white background, Public Sans UI font
- Smooth animations on interactions per design brief

### Page 2: Certificate Preview & Download
- **Certificate preview** rendered in-browser at A4 landscape aspect ratio matching the uploaded design:
  - Artificial Intelligence Academy logo/header (top-left)
  - "CERTIFICATE OF COMPLETION" heading (Cinzel font)
  - "This certificate is proudly presented to" + student name (Playfair Display, large italic)
  - "5-Day GEN AI Workshop" program details
  - "Issued after successful assessment & participation"
  - Signatory: "KDP Sree Adithya, Co-Founder & Director" with script signature
  - Issue Date: March 2026
  - Subtle purple/blue gradient wave decoration in bottom-right corner
  - Light decorative border frame
- **Download PDF button** using html2canvas + jsPDF, file named `{Name}_Certificate.pdf`
- **"Generate Another"** button to return to form
- Certificate reveal animation (scale 0.98→1, opacity fade)

### Technical Approach
- React SPA with two views (form → preview) using state management
- Google Fonts: Cinzel, Playfair Display, Public Sans
- html2canvas (scale: 2 for retina) + jsPDF for PDF generation
- Zod for input validation
- Fully responsive layout

### Design Details
- Colors: Deep Navy `hsl(222, 47%, 11%)`, Burnished Gold `hsl(35, 92%, 33%)`, Soft Slate `hsl(210, 40%, 98%)`
- Certificate background: soft lavender/purple gradient waves (CSS/SVG) matching reference image
- No script fonts for UI; signature rendered as stylized text element
- Layered shadow on certificate card, no borders on containers

