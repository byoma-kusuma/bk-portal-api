export interface EmailModel {
  from?: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  bcc?: string;
  cc?: string;
}
