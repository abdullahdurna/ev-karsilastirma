const cars = [
  {
    name: "Tesla Model 3",
    range: 500,
    image: "images/tesla.jpg"
  },
  {
    name: "Renault Zoe",
    range: 395,
    image: "images/zoe.jpg"
  },
  {
    name: "Hyundai Kona",
    range: 484,
    image: "images/kona.jpg"
  }
];

function displayCars() {
  const container = document.getElementById("car-container");
  container.innerHTML = "";
  cars.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <h2>${car.name}</h2>
      <img src="${car.image}" alt="${car.name}">
      <p>Menzil: ${car.range} km</p>
    `;
    container.appendChild(card);
  });
}

function drawChart() {
  const ctx = document.getElementById("rangeChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: cars.map(car => car.name),
      datasets: [{
        label: "Menzil (km)",
        data: cars.map(car => car.range),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

displayCars();
drawChart();
