# 🚌🌦 Météo Transports

Affichage de la météo en temps réel pour les écrans d'information dans les transports en commun, basé sur la configuration d'une ville dans un fichier JSON.

## 📋 Objectif

Ce projet a été réalisé dans le cadre de la préparation à la journée de sélection **CDA (Concepteur Développeur d’Applications)**.  
Il permet d'afficher automatiquement les données météo d'une ville prédéfinie sur un écran d'information, sans moteur de recherche.

---

## 🚀 Fonctionnalités

- Récupération automatique de la météo d'une ville définie dans `conf.json`.
- Affichage de la température, l’humidité et les conditions météo.
- Actualisation automatique toutes les **1 heure**.
- Utilisation de **l’API OpenWeatherMap**.
- Interface simple, claire et responsive.

---

## 🗂 Structure du projet

```
meteo-transport/
├── index.html       → Page principale
├── style.css        → Feuille de style
├── meteo.js         → Logique de récupération météo
└── conf.json        → Fichier de configuration (ville)
```

---

## ⚙️ Fichier `conf.json`

Ce fichier permet de configurer la ville à afficher, exemple :

```json
{
  "ville": "Montpellier"
}
```

---

## 🌐 API utilisée

**OpenWeatherMap** – [https://openweathermap.org/current](https://openweathermap.org/current)

🔑 N’oubliez pas de créer un compte pour obtenir une clé API gratuite.

---

## 💻 Mise en place

1. Cloner ce dépôt :
```bash
git clone https://github.com/AhmedEsserhane/meteo-transport.git
cd meteo-transport
```

2. Modifier la ville dans `conf.json` si besoin.

3. Ouvrir `index.html` dans un navigateur.

4. Remplacer la variable `apiKey` dans `meteo.js` par votre **clé API personnelle** :
```js
const apiKey = 'VOTRE_CLE_API';
```

---

## ⏱ Mise à jour automatique

La météo est automatiquement rafraîchie toutes les **1 heure** via `setInterval()` dans `meteo.js`.

---


## 👨‍💻 Auteur

Projet réalisé par Ahmed ESSERHANE  
Dans le cadre de la **préparation au parcours CDA** – Simplon

---

## 🔗 Licence

Projet libre pour usage éducatif.
