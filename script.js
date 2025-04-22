// Araç veritabanı
const cars = {
    togg: {
        name: "TOGG T10X",
        battery: "88.5 kWh (LFP)",
        range: 523,
        charge: "30 dk (%10-80, DC 180 kW)",
        power: "320 HP",
        price: "1.250.000 TL",
        // Örnek (Unsplash veya Wikimedia)
        image: "assets/togg.png",
        type: "suv"
    },
    tesla: {
        name: "Tesla Model Y",
        battery: "75 kWh (NMC)",
        range: 455,
        charge: "25 dk (%10-80, Supercharger V3)",
        power: "384 HP",
        price: "1.550.000 TL",
        image: "assets/tesla.png",
        type: "suv"
    },
    mg: {
        name: "MG ZS EV",
        battery: "72 kWh (LFP)",
        range: 440,
        charge: "40 dk (%10-80, DC 100 kW)",
        power: "156 HP",
        price: "1.100.000 TL",
        image: "assets/mgszev.png",
        type: "suv"
    },
    renault: {
        name: "Renault Megane E-Tech",
        battery: "60 kWh (NMC)",
        range: 450,
        charge: "30 dk (%10-80, DC 130 kW)",
        power: "218 HP",
        price: "1.350.000 TL",
        image: "assets/reno.png",
        type: "sedan"
    }
};

// Grafik oluşturma
function createChart(car1, car2) {
    const ctx = document.getElementById('rangeChart').getContext('2d');
    if (window.rangeChart) {
        window.rangeChart.destroy();
    }
    window.rangeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [car1.name, car2.name],
            datasets: [{
                label: 'Menzil (km)',
                data: [car1.range, car2.range],
                backgroundColor: ['#003087', '#00B2E3'],
                borderColor: ['#002366', '#0095C8'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    min: Math.min(car1.range, car2.range) - 50,
                    max: Math.max(car1.range, car2.range) + 50
                }
            }
        }
    });
}

// Araç detaylarını güncelleme
function updateCarDetails(selectId, detailId, nameId) {
    const selectedValue = document.getElementById(selectId).value;
    const car = cars[selectedValue];
    
    document.getElementById(nameId).textContent = car.name;
    document.getElementById(detailId).innerHTML = `
        <img src="${car.image}" class="img-fluid mb-3 rounded" alt="${car.name}" style="max-height: 200px; object-fit: cover;">
        <p><i class="fas fa-battery-three-quarters feature-icon"></i><strong> Batarya:</strong> ${car.battery}</p>
        <p><i class="fas fa-road feature-icon"></i><strong> Menzil:</strong> ${car.range} km (WLTP)</p>
        <p><i class="fas fa-bolt feature-icon"></i><strong> Hızlı Şarj:</strong> ${car.charge}</p>
        <p><i class="fas fa-horse-head feature-icon"></i><strong> Motor Gücü:</strong> ${car.power}</p>
        <p><i class="fas fa-tag feature-icon"></i><strong> Fiyat:</strong> ${car.price}</p>
    `;
    
    // Grafiği güncelle
    const car1 = cars[document.getElementById("car1").value];
    const car2 = cars[document.getElementById("car2").value];
    createChart(car1, car2);
}

// Karşılaştırma fonksiyonu
function compareCars() {
    const car1 = cars[document.getElementById("car1").value];
    const car2 = cars[document.getElementById("car2").value];
    
    let result = "";
    if (car1.range > car2.range) {
        result = `✅ ${car1.name}, ${car2.name}'den <strong>${car1.range - car2.range} km</strong> daha uzun menzile sahip!`;
    } else if (car1.range < car2.range) {
        result = `✅ ${car2.name}, ${car1.name}'den <strong>${car2.range - car1.range} km</strong> daha uzun menzile sahip!`;
    } else {
        result = "⚡ İki araç da eşit menzile sahip!";
    }
    
    document.getElementById("comparison-result").innerHTML = result;
    document.getElementById("comparison-result").style.display = "block";
}

// Arama fonksiyonu
document.getElementById("search").addEventListener("input", function(e) {
    const searchTerm = e.target.value.toLowerCase();
    Array.from(document.querySelectorAll("#car1 option, #car2 option")).forEach(option => {
        const carName = option.textContent.toLowerCase();
        option.style.display = carName.includes(searchTerm) ? "block" : "none";
    });
});

// Filtreleme fonksiyonu
document.getElementById("filter").addEventListener("change", function(e) {
    const filterType = e.target.value;
    Array.from(document.querySelectorAll("#car1 option, #car2 option")).forEach(option => {
        if (filterType === "all") {
            option.style.display = "block";
        } else {
            const car = cars[option.value];
            option.style.display = car.type === filterType ? "block" : "none";
        }
    });
});

// Event listeners
document.getElementById("car1").addEventListener("change", () => {
    updateCarDetails("car1", "car1-details", "car1-name");
});

document.getElementById("car2").addEventListener("change", () => {
    updateCarDetails("car2", "car2-details", "car2-name");
});

document.getElementById("compare-btn").addEventListener("click", compareCars);

// Sayfa yüklendiğinde ilk değerleri göster
updateCarDetails("car1", "car1-details", "car1-name");
updateCarDetails("car2", "car2-details", "car2-name");
