const getCurrentTime = () => {
  let today = new Date();
  let year = String(today.getFullYear());
  let month = String(today.getMonth() + 1);
  let day = String(today.getDay());
  let min = String(today.getMinutes());
  let seg = String(today.getSeconds());
  let hour = String(today.getHours());

  let totalHours = hour + ":" + min + ":" + seg;
  let totalYear = year + "-" + month + "-" + day;

  return totalYear + " " + totalHours;
};

export default getCurrentTime;
