'use client';
export async function deleteSubmitedOrderById({
  id,
  type,
}: {
  id: number;
  type: 'print_order' | 'consultation';
}) {
  try {
    const result = fetch('/api/crm/submited_order/delete', {
      method: 'POST',
      body: JSON.stringify({
        id,
        type,
      }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error updating orders', e);
    return [];
  }
}
