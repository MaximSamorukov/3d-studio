// src/shared/constants/httpStatus.ts

export const HTTP_STATUS = {
  // Успешные ответы
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  // Перенаправления
  MOVED_PERMANENTLY: 301,
  FOUND: 302,

  // Клиентские ошибки
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,

  // Серверные ошибки
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  SERVICE_UNAVAILABLE: 503,
} as const;

export const HTTP_STATUS_TEXT = {
  200: 'OK',
  201: 'Created',
  204: 'No Content',
  301: 'Moved Permanently',
  302: 'Found',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  409: 'Conflict',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  503: 'Service Unavailable',
} as const;
