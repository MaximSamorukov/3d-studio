'use client';
export async function getSubmitedOrders({
  page,
  perPage,
  type,
  email,
  phone,
  plasticType,
  created_at,
}: {
  page: number;
  perPage: number;
  type: string;
  email: string | null;
  phone: string | null;
  plasticType: string | null;
  created_at: string | null;
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
        created_at,
      }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error getting orders', e);
    return [];
  }
}
