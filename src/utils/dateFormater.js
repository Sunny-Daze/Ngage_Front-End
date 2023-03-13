export default function formatDate(newDate) {
  return `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()} ${
    newDate.getHours() < 12 ? "AM" : "PM"
  }`;
}
