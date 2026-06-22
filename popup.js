const data = {
    date: "2026-06-22",
    breakfast: "Vada Pav Mirchi",
    lunch: "White Vatana Aaloo | Dry Gavar | Dal Panchratna | Steam Rice",
    snacks: "Kachie Dabeli",
    dinner: "White Vatana Aaloo | Dry Gavar | Dal Panchratna | Steam Rice",
    midnight: "Veg Puff"
};

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