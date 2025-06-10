
import { Certificate } from "@/types/certificate";
import { turkishCertificates } from "./certificates/turkishCertificates";
import { englishCertificates } from "./certificates/englishCertificates";

export type { Certificate };

export const certificates: Certificate[] = [
  ...turkishCertificates,
  ...englishCertificates
].sort((a, b) => a.id - b.id);
