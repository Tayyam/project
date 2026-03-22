import json

with open("zeusbtc_products.json", encoding="utf-8") as f:
    data = json.load(f)

meta     = data["meta"]
products = data["products"]

print("=== META ===")
print("Source  :", meta["source"])
print("Scraped :", meta["scraped_at"])
print("Total   :", meta["total_unique_products"], "unique products")

print("\n=== SAMPLE (first 5 products) ===")
for p in products[:5]:
    sale = f"  --> SALE: ${p['price_discounted']}" if p["on_sale"] else ""
    print(f"  [{p['id']:4d}] {p['name']}")
    print(f"         Price: ${p['price_original']}{sale}")
    print(f"         URL  : {p['url']}")

print("\n=== PRICE STATS ===")
prices  = [p["price_original"] for p in products if p["price_original"]]
on_sale = [p for p in products if p["on_sale"]]
print(f"  Products with price : {len(prices)}")
print(f"  On sale             : {len(on_sale)}")
print(f"  Min price           : ${min(prices):.2f}")
print(f"  Max price           : ${max(prices):.2f}")
print(f"  Avg price           : ${sum(prices)/len(prices):.2f}")

print("\n=== TOP 5 MOST EXPENSIVE ===")
by_price = sorted(products, key=lambda x: x["price_original"] or 0, reverse=True)
for p in by_price[:5]:
    print(f"  ${p['price_original']:8.2f}  |  {p['name']}")

print("\n=== TOP 5 CHEAPEST ===")
for p in sorted(products, key=lambda x: x["price_original"] or 9999)[:5]:
    print(f"  ${p['price_original']:8.2f}  |  {p['name']}")
