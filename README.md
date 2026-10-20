# STOCKHOLM // THE HIT LIST

A ready-to-host, no-build, no-backend planning site for **Stockholm, 18–20 November 2026**.

## Get it online with GitHub Pages

1. Unzip the downloaded archive.
2. Create a **public** repository on GitHub (for example `stockholm-2026`).
3. Upload **all four files** from the folder (`index.html`, `styles.css`, `data.js`, `app.js`) to the **root** of your repository (along with this README if you like).
4. Go to **Settings → Pages** in the GitHub repo.
5. Select **Deploy from a branch**, choose **main**, folder **/ (root)**, and **Save**.
6. Wait for Pages to publish. Open the URL it shows, usually `https://your-username.github.io/stockholm-2026/`.

The site also opens locally by double-clicking `index.html` but **share-ranking links only work after it is on a web URL**. The map, fonts and photographs need internet access.

## How friends rank and vote

- Everyone starts with a **different random card order** unless they open a link that includes someone's ranking. Their order and their hearts are saved in their own browser's `localStorage`.
- Drag using the dotted grip (mouse/touch) or press **↑** and **↓**; use category filters and hide unavailable items.
- Click **Group Vote**, enter your name (optional), then **Copy My Ranking Link** and send it to your chat group.
- One person can paste all links into the **Group Vote** dialog, one per line, and calculate average positions. The current ranking is also counted as one vote. Download a CSV to keep the result.
- **Important: this is deliberately a static site. It does not collect votes centrally.** A shared URL transmits the sender's ranking in its query string, not through a database.
- To restart an imported ranking, click **RESHUFFLE** (after the warning).

## Customize

Edit `data.js` to change titles, descriptions, locations, prices, photos and status. Each place has an `id` that should stay unique and stable so older shared ranking links continue to work.

Photo URLs are externally hosted, from Wikimedia Commons and venue/visitor-information websites. Click **PHOTO SOURCES + NOTES** inside the site for attribution and source links. Where exact venue photos were not available, representative photographs are explicitly labeled *Vibe image*. Please respect each credited photographer's license if reusing, copying, or modifying an image. If you want the website to work entirely offline, replace `images[].src` entries with local pictures you have permission to use and include those files in the repository.

Venue ticket prices are adult indicative prices as checked in **October 2026**, or plainly marked estimates. In particular, the **Old Town Christmas market starts Nov 22**, **Skansen market starts Nov 27**, and the **pizza boat finishes in September**, so they are tagged unavailable for Nov 18–20. The Slosehotel gaming location and rate have not been independently confirmed beyond its own website; please verify directly before prepaying.

The map uses Leaflet and OpenStreetMap raster tiles; no API key is required. Pins are approximate meeting points, not exact entrances. If the map does not load, every card has a Google Maps search/directions link.

## License / usage

Code and written descriptions were created for this travel-planning project. External photo, font, map and venue content belong to their respective owners under their own terms and licenses. The project does not claim ownership of those assets or affiliation with the listed venues.
