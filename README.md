# IDeaS Food Menu

A tiny "API" plus a Chrome extension that shows today's office cafeteria menu.

- **API:** `menu.json`, served by GitHub Pages at
  [ramesh0708.github.io/ideas-food-menu-api/menu.json](https://ramesh0708.github.io/ideas-food-menu-api/menu.json)
- **Extension:** a Manifest V3 popup (`popup.html`, `popup.js`, `popup.css`) that fetches the JSON and shows breakfast, lunch, snacks, dinner and midnight

## menu.json format
```json
{
  "date": "2026-06-23",
  "breakfast": "...",
  "lunch": "...",
  "snacks": "...",
  "dinner": "...",
  "midnight": "..."
}
```
Empty fields show as "Not Updated".

## Install the extension
1. Open `chrome://extensions` and turn on **Developer mode**.
2. Click **Load unpacked** and pick this folder.
3. Click the toolbar icon to see today's menu.

## Update the menu
Edit `menu.json` and push to `main`. GitHub Pages serves the new version, and the popup adds a cache-busting query.
