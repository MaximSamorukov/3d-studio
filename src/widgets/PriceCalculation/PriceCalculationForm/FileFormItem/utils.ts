import {
  ALLOWED_EXTENSIONS,
  ALLOWED_MIME_TYPES,
  MAX_FILE_SIZE_MB,
} from '@/shared/constants/mimeTypes';

export const checkFileValidity = (file: File) => {
  const { name, type, size } = file;
  const normFileName = name.toLowerCase();
  const sizeInMb = size / 1024 ** 2;

  const extension = ALLOWED_EXTENSIONS.some((ext) =>
    normFileName.endsWith(ext),
  );
  const mime = ALLOWED_MIME_TYPES.includes(type);
  const sizeValid = sizeInMb <= MAX_FILE_SIZE_MB;

  const isValid = extension && mime && sizeValid;
  return isValid;
};
