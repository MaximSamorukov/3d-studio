'use client';
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
