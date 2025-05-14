const { chromium } = require("playwright");
const fs = require("fs");
const fetch = require("node-fetch");

(async () => {
  const browser = await chromium.launch({ headless: false }); // headless: false to show the browser GUI
  const context = await browser.newContext();

  // Launch Epic Games login page
  const page = await context.newPage();
  await page.goto("https://www.epicgames.com/id/login");

  // Wait for user to log in manually
  console.log("Please log in manually on the browser.");

  // Wait until the login is complete (detecting the presence of the account name or some known element)
  await page.waitForSelector("text=Your Account Name", { timeout: 0 });

  // Save the cookies automatically once the login is successful
  await context.storageState({ path: "cookies/storageState.json" });
  console.log("[+] Cookies saved automatically.");

  // Fetch free games using the stored cookies
  const cookieHeader = context.cookies().map(c => `${c.name}=${c.value}`).join("; ");
  await browser.close();

  const res = await fetch("https://store.epicgames.com/api/freeGamesPromotions", {
    headers: {
      "cookie": cookieHeader,
      "user-agent": "Mozilla/5.0"
    }
  });

  const json = await res.json();
  const freeGames = json.data.Catalog.searchStore.elements.filter(
    g => g.promotions && g.promotions.promotionalOffers.length > 0
  );

  freeGames.forEach(g => console.log("Free Game Available:", g.title));
})();
