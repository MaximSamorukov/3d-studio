export async function getConsultationsOnEmail(email: string) {
  try {
    const result = fetch('/api/consultation/list', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    return (await result).json();
  } catch (e) {
    console.log('error getting consultations', e);
    return [];
  }
}

export async function getOrdersOnEmail(email: string) {
  try {
    const result = fetch('/api/orders/list', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error getting orders', e);
    return [];
  }
}
