const CEP_PATTERN = /^(\d{8})$/;

export function validateCEP(value: string): boolean {
  return CEP_PATTERN.test(value);
}
