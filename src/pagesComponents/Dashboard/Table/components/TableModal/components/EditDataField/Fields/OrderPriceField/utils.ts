'use client';
export async function updateSubmitedOrderById({
  id,
  type,
  fields,
}: {
  id: number;
  type: 'print_order' | 'consultation';
  fields: Record<string, string | number | boolean | null>;
}) {
  try {
    const result = fetch('/api/crm/submited_order/update', {
      method: 'POST',
      body: JSON.stringify({
        id,
        type,
        fields,
      }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error updating orders', e);
    return [];
  }
}

export const getUrl = async (filePath: string) => {
  if (filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error('Ошибка при загрузке файла');

      const blob = await response.blob();
      return blob;
    } catch (_) {
      return null;
    }
  }
  return null;
};
