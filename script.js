// Araç veritabanı
const cars = {
    togg: {
        name: "TOGG T10X",
        battery: "88.5 kWh (LFP)",
        range: "523 km (WLTP)",
        charge: "30 dk (%10-80, DC 180 kW)",
        power: "320 HP",
        price: "1.250.000 TL",
        image: "https://www.togg.com.tr/wp-content/uploads/2022/10/T10X-1200x900.jpg"
    },
    tesla: {
        name: "Tesla Model Y",
        battery: "75 kWh (NMC)",
        range: "455 km (WLTP)",
        charge: "25 dk (%10-80, Supercharger V3)",
        power: "384 HP",
        price: "1.550.000 TL",
        image: "https://www.tesla.com/sites/default/files/model_y_2023/hero.jpg"
    },
    mg: {
        name: "MG ZS EV",
        battery: "72 kWh (LFP)",
        range: "440 km (WLTP)",
        charge: "40 dk (%10-80, DC 100 kW)",
        power: "156 HP",
        price: "1.100.000 TL",
        image: "https://mg.com.tr/uploads/mg-zs-ev/mg-zs-ev-01.jpg"
    },
    renault: {
        name: "Renault Megane E-Tech",
        battery: "60 kWh (NMC)",
        range: "450 km (WLTP)",
        charge: "30 dk (%10-80, DC 130 kW)",
        power: "218 HP",
        price: "1.350.000 TL",
        image: "https://www.renault.com.tr/content/dam/renault/tr/meganee-tech/banner.jpg"
    }
};

// Araç detaylarını güncelleme fonksiyonu
function updateCarDetails(selectId, detailId, nameId) {
    const selectedValue = document.getElementById(selectId).value;
    const car = cars[selectedValue];
    
    document.getElementById(nameId).textContent = car.name;
    document.getElementById(detailId).innerHTML = `
        <img src="${car.image}" class="img-fluid mb-3 rounded" alt="${car.name}">
        <p><strong>🪫 Batarya:</strong> ${car.battery}</p>
        <p><strong>🛣️ Menzil:</strong> ${car.range}</p>
        <p><strong>⚡ Hızlı Şarj:</strong> ${car.charge}</p>
        <p><strong>🏎️ Motor Gücü:</strong> ${car.power}</p>
        <p><strong>💰 Fiyat:</strong> ${car.price}</p>
    `;
}

// Dropdown değişimlerini dinle
document.getElementById("car1").addEventListener("change", () => {
    updateCarDetails("car1", "car1-details", "car1-name");
});

document.getElementById("car2").addEventListener("change", () => {
    updateCarDetails("car2", "car2-details", "car2-name");
});

// Sayfa yüklendiğinde ilk değerleri göster
updateCarDetails("car1", "car1-details", "car1-name");
updateCarDetails("car2", "car2-details", "car2-name");