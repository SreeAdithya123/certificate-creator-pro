import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const nameSchema = z
  .string()
  .trim()
  .min(1, "Name is required")
  .max(80, "Name must be under 80 characters")
  .regex(/^[A-Za-z\s.]+$/, "Only letters, spaces, and periods are allowed");

interface CertificateFormProps {
  onGenerate: (name: string) => void;
}

const CertificateForm = ({ onGenerate }: CertificateFormProps) => {
  const [name, setName] = useState("");
  const [regId, setRegId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = nameSchema.safeParse(name);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError(null);
    onGenerate(result.data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-10 max-w-lg animate-fade-in-up">
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary tracking-wide mb-3">
          Claim Your Achievement
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          5-Day <span className="font-semibold text-foreground">GEN AI Workshop</span> by
          Artificial Intelligence Academy. Enter your name below to generate &amp; download
          your Certificate of Completion.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-card rounded-xl shadow-lg p-8 space-y-5 animate-fade-in-up"
        style={{ animationDelay: "0.15s" }}
      >
        <div className="space-y-2">
          <Label htmlFor="fullName" className="font-medium">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError(null);
            }}
            autoFocus
            className={error ? "border-destructive focus-visible:ring-destructive" : ""}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="regId" className="font-medium">
            Registration ID <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Input
            id="regId"
            placeholder="e.g. AIA-2026-0012"
            value={regId}
            onChange={(e) => setRegId(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold tracking-wide bg-primary hover:bg-navy-light transition-colors"
        >
          Generate Certificate
        </Button>
      </form>

      <p className="mt-6 text-xs text-muted-foreground text-center max-w-sm">
        Your certificate will be generated instantly. No data is stored or sent to any server.
      </p>
    </div>
  );
};

export default CertificateForm;
