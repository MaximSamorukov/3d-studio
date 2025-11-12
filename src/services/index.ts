import { MaterialType } from '@/shared/state/materials/state';
import { ServiceType } from '@/shared/state/services/state';
import { User } from 'next-auth';

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

export const checkUser = async (data: { login: string; password: string }) => {
  const { login, password } = data;
  const user = {
    login,
    password,
  } as User;
  const url = process.env.SERVER_URL + '/api/check-user';
  try {
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
    });
    if (result.status === 200) {
      return await result.json();
    } else {
      return false;
    }
  } catch (e) {
    console.log('Error', e);
  }
};

export const removeConsultation = (id: number) => {
  return fetch('/api/consultation', {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  })
    .then((res) => {
      return true;
    })
    .catch(() => false);
};

export const removeOrder = (id: number) => {
  return fetch('/api/orders', {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  })
    .then((res) => {
      return true;
    })
    .catch(() => false);
};

export const getMaterials = (): Promise<{ materials: MaterialType[] }> => {
  return fetch('/api/crm/materials')
    .then((res) => {
      return res.json();
    })
    .catch(() => []);
};

export const getServices = (): Promise<{ services: ServiceType[] }> => {
  return fetch('/api/crm/services')
    .then((res) => {
      return res.json();
    })
    .catch(() => []);
};
