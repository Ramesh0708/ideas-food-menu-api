const MENU_URL =
"https://ramesh0708.github.io/ideas-food-menu-api/menu.json?t=" + Date.now();

fetch(MENU_URL)
  .then(response => response.json())
  .then(data => {

    document.getElementById("date").innerText =
      "📅 " + data.date;

    document.getElementById("breakfast").innerText =
      data.breakfast || "Not Updated";

    document.getElementById("lunch").innerText =
      data.lunch || "Not Updated";

    document.getElementById("snacks").innerText =
      data.snacks || "Not Updated";

    document.getElementById("dinner").innerText =
      data.dinner || "Not Updated";

    document.getElementById("midnight").innerText =
      data.midnight || "Not Updated";
  })
  .catch(error => {
    console.error(error);

    document.getElementById("date").innerText =
      "⚠️ Unable to load menu";
  });
