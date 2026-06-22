const MENU_URL =
"https://ramesh0708.github.io/ideas-food-menu-api/";

fetch(MENU_URL)
  .then(response => response.json())
  .then(data => {

    document.getElementById("date").innerText =
      "📅 " + data.date;

    document.getElementById("breakfast").innerText =
      data.breakfast;

    document.getElementById("lunch").innerText =
      data.lunch;

    document.getElementById("snacks").innerText =
      data.snacks;

    document.getElementById("dinner").innerText =
      data.dinner;

    document.getElementById("midnight").innerText =
      data.midnight;

  })
  .catch(error => {
      console.error(error);
  });
