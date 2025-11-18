import crypto from 'crypto';

export function createIdempotenceKey(description: string): string {
  return crypto.createHash('sha256').update(description).digest('hex');
}

export function createDescription(
  email: string,
  price: string,
  orderId: number,
) {
  const description = `${email}-${price}-${orderId}`;
  return description;
}
