import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import CertificateTemplate from "./CertificateTemplate";

interface CertificatePreviewProps {
  name: string;
  onBack: () => void;
}

const CertificatePreview = ({ name, onBack }: CertificatePreviewProps) => {
  const certRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!certRef.current) return;
    setLoading(true);
    try {
      const scale = 3;
      const canvas = await html2canvas(certRef.current, {
        scale,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const imgData = canvas.toDataURL("image/png");

      // Use the original element dimensions for the PDF page size
      const elW = certRef.current.offsetWidth;
      const elH = certRef.current.offsetHeight;

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [elW, elH],
      });
      pdf.addImage(imgData, "PNG", 0, 0, elW, elH);
      const safeName = name.replace(/\s+/g, "_");
      pdf.save(`${safeName}_Certificate.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-5xl animate-fade-in-up">
        {/* Actions */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={onBack} className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Generate Another
          </Button>
          <Button
            onClick={handleDownload}
            disabled={loading}
            className="gap-2 bg-accent hover:bg-gold-light text-accent-foreground font-semibold px-6"
          >
            <Download className="w-4 h-4" />
            {loading ? "Generating…" : "Download PDF"}
          </Button>
        </div>

        {/* Certificate — scrollable on small screens */}
        <div className="rounded-lg shadow-2xl overflow-auto">
          <CertificateTemplate ref={certRef} name={name} />
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
