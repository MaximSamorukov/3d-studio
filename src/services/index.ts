export const calculatePrintPrice = (data: FormData) => {
  return fetch("/api/calculate", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};
