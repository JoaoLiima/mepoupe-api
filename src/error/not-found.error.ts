import { DefaultError } from '@/error/default.error';
import { HttpStatus } from '@nestjs/common';

export class NotFoundError extends DefaultError {
  constructor(message?: string) {
    super(message, 'NOT_FOUND_ERROR', HttpStatus.NOT_FOUND);
  }
}
