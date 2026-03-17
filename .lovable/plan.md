

## Fix Participant Name Position

### Problem
- The name is at `left: 58px`, far left of the certificate's text block which starts around `left: 265px`
- Name needs to move slightly upward from current `top: 46.5%`

### Changes

**`src/components/CertificateTemplate.tsx`** — Update the name overlay position:
- Change `left: 58` → `left: 265` to align with the certificate's body text ("THIS CERTIFICATE IS PROUDLY PRESENTED TO", "for successfully participating", etc.)
- Change `top: "46.5%"` → `top: "44.5%"` to shift the name slightly upward, keeping it on the line above "for successfully participating"

Single file, two property changes.

