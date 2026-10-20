# STOCKHOLM // THE HIT LIST

A ready-to-host, no-build, no-backend planning site for **Stockholm, 18–20 November 2026**.

## Get it online with GitHub Pages

1. Unzip the downloaded archive.
2. Create a **public** repository on GitHub (for example `stockholm-2026`).
3. Upload **all six files** from the folder (`index.html`, `styles.css`, `data.js`, `gallery-data.js`, `app.js`, `README.md`) to the **root** of your repository. Keep the file names unchanged.
4. Go to **Settings → Pages** in the GitHub repo.
5. Select **Deploy from a branch**, choose **main**, folder **/ (root)**, and **Save**.
6. Wait for Pages to publish. Open the URL it shows, usually `https://your-username.github.io/stockholm-2026/`.

The site also opens locally by double-clicking `index.html` but **share-ranking links only work after it is on a web URL**. The fonts and externally hosted photographs need internet access. The images are linked to original remote servers, not bundled inside the ZIP, and remote hosts may occasionally block direct image loading. Each card includes a direct Google Maps link; there is no embedded map.

## How friends rank and vote

- Everyone starts with a **different random card order** unless they open a link that includes someone's ranking. Their order and their hearts are saved in their own browser's `localStorage`.
- Drag using the dotted grip (mouse/touch) or press **↑** and **↓**; use category filters and hide unavailable items. Browse 5–7 photos for every place with the thumbnails or arrow buttons, or choose **VIEW LARGER** for the fullscreen photo viewer.
- Click **Group Vote**, enter your name (optional), then **Copy My Ranking Link** and send it to your chat group.
- One person can paste all links into the **Group Vote** dialog, one per line, and calculate average positions. The current ranking is also counted as one vote. Download a CSV to keep the result.
- **Important: this is deliberately a static site. It does not collect votes centrally.** A shared URL transmits the sender's ranking in its query string, not through a database.
- To restart an imported ranking, click **RESHUFFLE** (after the warning).

## Customize

Edit `data.js` to change titles, descriptions, locations, prices and status. Edit `gallery-data.js` to change the photo URLs, photo sequence and mood-photo labels (`!` before a URL means illustrative, not the actual venue). Each place has an `id` that should stay unique and stable so older shared ranking links continue to work.

Each of the 28 places has at least five different photos (149 photo references overall). Photo URLs are externally hosted, from Wikimedia Commons and venue/visitor-information websites. Click **PHOTO SOURCES + NOTES** inside the site for attribution and source links. Where exact venue photos were not reliably identifiable, representative photographs are explicitly labeled *Vibe photo · not this venue*. **Slosehotel** deliberately uses five labeled illustrative gaming/arcade photos rather than misrepresenting VREX photos as its own. The Paradox Museum has seven distinct photo references. Please respect each credited photographer's license if reusing, copying, or modifying an image. Some images might be unavailable, or the original photographer might change their URL; the site then tries another photo and offers an image-search fallback. If you want the website to work entirely offline, replace the photo URLs in `gallery-data.js` with local pictures you have permission to use and include those files in the repository.

Prices are approximate adult admission prices in **euros (€)**, rounded from Swedish krona at roughly **€0.0899 per SEK on 20 October 2026**. Venues may charge a different amount in SEK when you visit. The **Old Town Christmas market starts Nov 22** and **Skansen market starts Nov 27**, so holiday markets are tagged unavailable for Nov 18–20. Some venue details have not been independently confirmed: check their sites for current hours and availability before booking.

The embedded map was removed to avoid unreliable loading from third-party map servers. The MAPS button on each card opens its location in Google Maps, so you can still navigate to each experience.

## License / usage

Code and written descriptions were created for this travel-planning project. External photo, font and venue content belong to their respective owners under their own terms and licenses. The project does not claim ownership of those assets or affiliation with the listed venues.
