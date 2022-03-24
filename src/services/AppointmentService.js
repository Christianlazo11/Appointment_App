const URL_API = "https://jsonplaceholder.typicode.com/users";

export function getDataAppointment() {
  return fetch(`${URL_API}`, { method: "GET" }).then((res) => res.json());
}
