'use client';
export async function getSubmitedOrders({
  page,
  perPage,
  type,
  email,
  phone,
  plasticType,
}: {
  page: number;
  perPage: number;
  type: string;
  email: string | null;
  phone: string | null;
  plasticType: string | null;
}) {
  try {
    const result = fetch('/api/crm/submited_orders', {
      method: 'POST',
      body: JSON.stringify({
        page,
        perPage,
        type,
        email,
        phone,
        plastic_type: plasticType,
      }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error getting orders', e);
    return [];
  }
}
