'use client';
export async function updateSubmitedOrderById({
  id,
  type,
  fields,
}: {
  id: number;
  type: 'print_order' | 'consultation';
  fields: Record<string, string>;
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
