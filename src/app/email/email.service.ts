import { EmailConfig } from "./../../common/configs/config.interface";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EmailModel } from "./email.model";
import { EmailClient, EmailMessage } from "@azure/communication-email";

@Injectable()
export class EmailService {
  private config: EmailConfig;
  private client: EmailClient;

  constructor(private readonly configService: ConfigService) {
    this.config = this.validateAndGetEmailConfigs();
    this.client = new EmailClient(this.config.connectionString);
  }

  private validateAndGetEmailConfigs(): EmailConfig {
    const emailConfig = this.configService.get<EmailConfig>("email");

    if (!emailConfig) {
      throw "Email Configuration is not setup. Please make sure that you have added proper email configuration in .env file";
    }

    if (!emailConfig?.from || !emailConfig.connectionString) {
      throw "Could not read email config. Possibly, 'connectionString' and/or 'from email address' config are missing in env file.";
    }
    return emailConfig!;
  }

  private validateEmail(email: EmailModel): void {
    if (!email.text && !email.html) {
      const errorMessage =
        "Empty email content detected. Please set values for either text or html fields";
      Logger.log(JSON.stringify(errorMessage));
      throw "Empty email content detected. Please set values for either text or html fields";
    }
  }

  async sendMail(email: EmailModel): Promise<void> {
    this.validateEmail(email);
    const msg: EmailMessage = {
      sender: this.config.from,
      recipients: {
        to: [
          {
            email: "bibek5770@gmail.com"
          }
        ]
      },
      content: {
        subject: email.subject,
        html: email.html ?? email.text!
      }
    };

    try {
      await this.client.send(msg);
    } catch (e: unknown) {
      Logger.log("Could not send email", [JSON.stringify(msg)], e);
    }
  }
}
