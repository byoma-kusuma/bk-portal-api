import { EmailConfig } from "./../../common/configs/config.interface";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EmailModel } from "./email.model";
import {
  EmailAddress,
  EmailClient,
  EmailMessage
} from "@azure/communication-email";

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

    // if (!emailConfig) {
    //   throw new Error(
    //     "Email Configuration is not setup. Please make sure that you have added proper email configuration in .env file"
    //   );
    // }

    // if (!emailConfig?.from || !emailConfig.connectionString) {
    //   throw new Error(
    //     "Could not read email config. Possibly, 'connectionString' and/or 'from email address' config are missing in env file."
    //   );
    // }
    return emailConfig!;
  }

  private validateEmail(email: EmailModel): void {
    if (!email.text && !email.html) {
      const errorMessage =
        "Empty email content detected. Please set values for either text or html fields";
      Logger.log(JSON.stringify(errorMessage));
      throw new Error(
        "Empty email content detected. Please set values for either text or html fields"
      );
    }
  }

  mapEmailModelToAzureEmail = (emailModel: EmailModel): EmailMessage => {
    const getEmailRecipients = (address: string | string[]): EmailAddress[] => {
      const recipient: EmailAddress[] = [];
      if (Array.isArray(address)) {
        address.forEach((item) => recipient.push({
          address: item,
          displayName: "",
        }))
      } else {
        recipient.push({
          address: address,
          displayName: ""});
      }
      return recipient;
    };

    const msg: EmailMessage = {
      senderAddress: this.config.from,
      recipients: {
        to: getEmailRecipients(emailModel.to)
      },
      content: {
        subject: emailModel.subject,
        html: emailModel.html ?? emailModel.text!
      }
    };
    if (emailModel.cC) msg.recipients.cc = getEmailRecipients(emailModel.cC);
    if (emailModel.bCC) msg.recipients.bcc = getEmailRecipients(emailModel.bCC);

    return msg;
  };

  async sendMail(emailModel: EmailModel): Promise<void> {
    this.validateEmail(emailModel);

    const msg = this.mapEmailModelToAzureEmail(emailModel);

    try {
      const poller = await this.client.beginSend(msg);
      const response = await poller.pollUntilDone();
    } catch (e: unknown) {
      Logger.log("Could not send email", [JSON.stringify(msg)], e);
    }
  }
}
