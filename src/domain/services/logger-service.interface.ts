export interface ILoggerService {
  info(text: any): void;
  log(text: any): void;
  error(text: any): void;
  warn(text: any): void;
  debug(text: any): void;
}
