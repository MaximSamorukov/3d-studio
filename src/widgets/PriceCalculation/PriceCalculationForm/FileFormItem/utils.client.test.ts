import { describe, it, expect } from 'vitest';
import {
  ALLOWED_EXTENSIONS,
  ALLOWED_MIME_TYPES,
  MAX_FILE_SIZE_MB,
} from '@/shared/constants/mimeTypes';
import { checkFileValidity } from './utils';

describe('checkFileValidity', () => {
  const createMockFile = (name: string, type: string, sizeBytes: number) =>
    new File(['x'.repeat(sizeBytes)], name, { type });

  it('валидный файл возвращает true', () => {
    const file = createMockFile(
      `test.${ALLOWED_EXTENSIONS[0]}`,
      ALLOWED_MIME_TYPES[0],
      (MAX_FILE_SIZE_MB - 1) * 1024 * 1024,
    );
    expect(checkFileValidity(file)).toBe(true);
  });
  it('валидный файл возвращает true', () => {
    const file = createMockFile(
      `test.${ALLOWED_EXTENSIONS[1]}`,
      ALLOWED_MIME_TYPES[1],
      (MAX_FILE_SIZE_MB - 1) * 1024 * 1024,
    );
    expect(checkFileValidity(file)).toBe(true);
  });
  it('валидный файл возвращает true', () => {
    const file = createMockFile(
      `test.${ALLOWED_EXTENSIONS[2]}`,
      ALLOWED_MIME_TYPES[2],
      (MAX_FILE_SIZE_MB - 1) * 1024 * 1024,
    );
    expect(checkFileValidity(file)).toBe(true);
  });

  it('невалидное расширение → false', () => {
    const file = createMockFile('file.exe', 'image/jpeg', 1000);
    expect(checkFileValidity(file)).toBe(false);
  });

  it('невалидный MIME → false', () => {
    const file = createMockFile('test.jpg', 'application/x-msdownload', 1000);
    expect(checkFileValidity(file)).toBe(false);
  });

  it('слишком большой размер → false', () => {
    const file = createMockFile(
      'test.jpg',
      'image/jpeg',
      (MAX_FILE_SIZE_MB + 1) * 1024 * 1024,
    );
    expect(checkFileValidity(file)).toBe(false);
  });

  it('расширение валидное, но MIME не совпадает → false', () => {
    const file = createMockFile(
      `test.${ALLOWED_EXTENSIONS[0]}`,
      'image/jpeg',
      1000,
    );
    expect(checkFileValidity(file)).toBe(false);
  });

  it('MIME совпадает, но расширение не совпадает → false', () => {
    const file = createMockFile('wrong.txt', 'image/jpeg', 1000);
    expect(checkFileValidity(file)).toBe(false);
  });

  it('регистр не влияет на расширение', () => {
    const file = createMockFile(
      `TEST.${ALLOWED_EXTENSIONS[0].toUpperCase()}`,
      ALLOWED_MIME_TYPES[0],
      1000,
    );
    expect(checkFileValidity(file)).toBe(true);
  });
});
