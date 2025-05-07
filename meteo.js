async function chargerConfig() {
  const response = await fetch('conf.json');
  return response.json();
}

async function chargerMeteo(ville) {
  const apiKey = '3f6c22bd82698c1ff749333c4f6ae614';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;

  const response = await fetch(url);
  if (!response.ok) {
    console.error("Erreur API météo :", response.statusText);
    return;
  }

  const data = await response.json();
  document.getElementById('ville').textContent = ville;
  document.getElementById('temperature').textContent = data.main.temp;
  document.getElementById('conditions').textContent = data.weather[0].description;
  document.getElementById('humidite').textContent = data.main.humidity;
}

async function lancer() {
  const config = await chargerConfig();
  await chargerMeteo(config.ville);
}

// Rafraîchir chaque heure
lancer();
setInterval(lancer, 3600000); // 3600000 ms = 1h
