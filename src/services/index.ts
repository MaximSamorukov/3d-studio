export const calculatePrintPrice = (data: FormData) => {
  return fetch('/api/calculate', {
    method: 'POST',
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};

export const login = (data: { login: string; password: string }) => {
  'use client';
  console.log(data);
  return fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};

export const orderConsultation = (data: FormData) => {
  return fetch('/api/consultation', {
    method: 'POST',
    body: data,
  })
    .then((res) => {
      return true;
    })
    .catch(() => false);
};

export const makeOrder = (data: FormData) => {
  return fetch('/api/makeOrder', {
    method: 'POST',
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};
