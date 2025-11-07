'use client';
export async function getSubmitedOrders({
  page,
  perPage,
  type,
}: {
  page: number;
  perPage: number;
  type: string;
}) {
  try {
    const result = fetch('/api/submited_orders', {
      method: 'POST',
      body: JSON.stringify({ page, perPage, type }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error getting orders', e);
    return [];
  }
}
