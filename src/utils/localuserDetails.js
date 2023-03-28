function updateUserPoint(points) {
  let userDetails = JSON.parse(localStorage.getItem("user") ?? "");
  userDetails.userPoints += points;
  localStorage.setItem("user", JSON.stringify(userDetails));
}

function getUserPoints() {
  let userDetails = JSON.parse(localStorage.getItem("user") ?? "");
  return userDetails.userPoints;
}

export { updateUserPoint, getUserPoints };
