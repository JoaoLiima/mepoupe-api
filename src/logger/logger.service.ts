import { ILoggerService } from '@/domain/services/logger-service.interface';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService implements ILoggerService {
  private readonly logger = new Logger();

  info(text: any): void {
    this.logger.verbose(text);
  }

  log(text: any): void {
    this.logger.log(text);
  }

  error(text: any): void {
    this.logger.error(text);
  }

  warn(text: any): void {
    this.logger.warn(text);
  }

  debug(text: any): void {
    this.logger.debug(text);
  }
}
