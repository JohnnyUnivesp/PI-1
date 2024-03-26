function toggleExpand(menuId) {
  var menu = document.getElementById(menuId);
  if (menu.style.display === "none") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
}