"""
Zeus Mining - ASIC Miner Parts Scraper
Scrapes all products from zeusbtc.com/ASIC-Miner-Repair/ pages 1-85
Output: zeusbtc_products.json
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
from datetime import datetime

BASE_URL   = "https://www.zeusbtc.com"
LIST_URL   = f"{BASE_URL}/ASIC-Miner-Repair/?page={{page}}"
TOTAL_PAGES = 85

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

# ─── price parser ─────────────────────────────────────────────────────────────
def parse_prices(price_text: str) -> dict:
    """
    Handles formats like:
      "$ 80"          → {original: 80.0, discounted: None}
      "$ 85 $ 80"     → {original: 85.0, discounted: 80.0}
      "$ 1.5"         → {original: 1.5,  discounted: None}
    """
    nums = re.findall(r"\$\s*([\d.]+)", price_text)
    if not nums:
        return {"original": None, "discounted": None}
    if len(nums) == 1:
        return {"original": float(nums[0]), "discounted": None}
    return {"original": float(nums[0]), "discounted": float(nums[1])}

# ─── scrape one listing page ───────────────────────────────────────────────────
def scrape_page(page: int, session: requests.Session) -> list[dict]:
    url = LIST_URL.format(page=page)
    try:
        resp = session.get(url, headers=HEADERS, timeout=20)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"  ⚠  page {page} request error: {e}")
        return []

    soup = BeautifulSoup(resp.text, "html.parser")
    products = []

    # Each product card:  <li> or <div> containing an <h3> with an <a>, and a price span
    # The site uses a list of items – find all <h3> tags that link to product detail pages
    for h3 in soup.find_all("h3"):
        a_tag = h3.find("a", href=True)
        if not a_tag:
            continue

        href = a_tag["href"]

        # Only pick repair/parts product links (skip miners, repair centers, etc.)
        if "Parts-Tools-Details.asp" not in href and "Asic-Miner-Details.asp" not in href:
            continue

        name = a_tag.get_text(strip=True)
        if not name:
            continue

        # Full URL – normalize relative paths
        if href.startswith("http"):
            product_url = href
        elif href.startswith("/"):
            product_url = BASE_URL + href
        else:
            product_url = BASE_URL + "/ASIC-Miner-Repair/" + href

        # Extract numeric ID from URL
        id_match = re.search(r"ID=(\d+)", href)
        product_id = int(id_match.group(1)) if id_match else None

        # Price: look at the parent container's text after the h3
        # The price text sits in the same parent block as h3
        parent = h3.parent
        full_text = parent.get_text(" ", strip=True)

        # Grab all dollar amounts from the block
        price_info = parse_prices(full_text)

        # Category guess from URL path
        if "Parts-Tools-Details" in href:
            category = "repair_parts_tools"
        elif "Asic-Miner-Details" in href:
            category = "asic_miner"
        else:
            category = "other"

        products.append({
            "id":              product_id,
            "name":            name,
            "url":             product_url,
            "category":        category,
            "price_original":  price_info["original"],
            "price_discounted":price_info["discounted"],
            "price_display":   (
                f"${price_info['discounted']}"
                if price_info["discounted"]
                else (f"${price_info['original']}" if price_info["original"] else "N/A")
            ),
            "on_sale":         price_info["discounted"] is not None,
            "scraped_page":    page,
        })

    return products

# ─── main ─────────────────────────────────────────────────────────────────────
def main():
    print("=" * 60)
    print("  Zeus Mining Scraper — zeusbtc.com")
    print(f"  Pages: 1 to {TOTAL_PAGES}")
    print("=" * 60)

    all_products: list[dict] = []
    seen_ids: set[int] = set()

    with requests.Session() as session:
        for page in range(1, TOTAL_PAGES + 1):
            print(f"  [PAGE {page:3d}/{TOTAL_PAGES}] Scraping ...", end=" ", flush=True)

            items = scrape_page(page, session)

            # De-duplicate by product ID
            new_items = []
            for item in items:
                if item["id"] not in seen_ids:
                    seen_ids.add(item["id"])
                    new_items.append(item)

            all_products.extend(new_items)
            print(f"found {len(items):2d} items  |  new: {len(new_items):2d}  |  total: {len(all_products)}")

            # Polite delay — avoid hammering the server
            if page < TOTAL_PAGES:
                time.sleep(1.2)

    # ─── Build final output ───────────────────────────────────────────────────
    output = {
        "meta": {
            "source":       "https://www.zeusbtc.com/ASIC-Miner-Repair/",
            "scraped_at":   datetime.utcnow().isoformat() + "Z",
            "pages_scraped": TOTAL_PAGES,
            "total_unique_products": len(all_products),
        },
        "products": all_products,
    }

    out_file = "zeusbtc_products.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print()
    print("=" * 60)
    print(f"  DONE! {len(all_products)} unique products saved to {out_file}")
    print("=" * 60)

if __name__ == "__main__":
    main()
