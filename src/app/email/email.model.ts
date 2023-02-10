export interface EmailModel {
  from?: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  bCC?: string | string[];
  cC?: string | string[];
}
