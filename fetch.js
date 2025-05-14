const fs = require("fs");
const fetch = require("node-fetch");

try {
  const state = JSON.parse(fs.readFileSync("cookies/storageState.json", "utf-8"));
  const cookieHeader = state.cookies.map(c => `${c.name}=${c.value}`).join("; ");

  fetch("https://store.epicgames.com/api/freeGamesPromotions", {
    headers: {
      "cookie": cookieHeader,
      "user-agent": "Mozilla/5.0"
    }
  })
  .then(res => {
    if (res.status === 401 || res.status === 403) {
      console.error("Cookies expired.");
      process.exit(1); // Trigger bash fallback to login
    }
    return res.json();
  })
  .then(data => {
    const games = data.data.Catalog.searchStore.elements;
    const freeGames = games.filter(g => g.promotions && g.promotions.promotionalOffers.length > 0);
    freeGames.forEach(g => console.log("Free:", g.title));
  });
} catch (e) {
  console.error("Cookie error, need to log in.");
  process.exit(1); // Trigger bash fallback to login
}
