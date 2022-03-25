// const URL_API = "https://jsonplaceholder.typicode.com/users";
const URL_API = "http://localhost/App_Citas_Backend/";

export function getDataAppointment() {
  return fetch(`${URL_API}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
