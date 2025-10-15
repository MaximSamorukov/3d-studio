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

export const login = (data: FormData) => {
  return fetch("/api/login", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};

export const makeOrder = (data: FormData) => {
  return fetch("/api/makeOrder", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};
