'use client';

import { EXTENSIONS } from '@/shared/constants';

export async function getSubmitedOrderById({
  id,
  type,
}: {
  id: number;
  type: 'print_order' | 'consultation';
}) {
  try {
    const result = fetch('/api/crm/submited_order', {
      method: 'POST',
      body: JSON.stringify({
        id,
        type,
      }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error getting orders', e);
    return [];
  }
}

export const getFileName = (url: string) => {
  try {
    const data = new URL(url);
    const { pathname } = data;
    const fileName = pathname.split('/').slice(-1)[0];
    if (!fileName) throw Error();
    const fileNameArray = fileName.split('.');
    const extension = fileNameArray.slice(-1)[0];
    if (EXTENSIONS.includes(extension.toLowerCase())) {
      return `***.${extension}`;
    } else {
      throw Error();
    }
  } catch (_) {
    return 'не поддерживаемый формат файла';
  }
};
