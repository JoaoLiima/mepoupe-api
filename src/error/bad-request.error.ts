import { DefaultError } from './default.error';
import { HttpStatus } from '@nestjs/common';

export class BadRequestError extends DefaultError {
  constructor(message?: string) {
    super(message, 'BAD_REQUEST_ERROR', HttpStatus.BAD_REQUEST);
  }
}
