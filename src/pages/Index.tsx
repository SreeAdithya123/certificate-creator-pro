import { useState } from "react";
import CertificateForm from "@/components/CertificateForm";
import CertificatePreview from "@/components/CertificatePreview";

const Index = () => {
  const [studentName, setStudentName] = useState<string | null>(null);

  if (studentName) {
    return (
      <CertificatePreview
        name={studentName}
        onBack={() => setStudentName(null)}
      />
    );
  }

  return <CertificateForm onGenerate={setStudentName} />;
};

export default Index;
