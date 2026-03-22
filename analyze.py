import json

with open("zeusbtc_products.json", encoding="utf-8") as f:
    data = json.load(f)

products = data["products"]
print(f"Total: {len(products)} products\n")
for p in products:
    pid   = p["id"]
    name  = p["name"]
    price = p["price_original"] or 0
    sale  = f" [SALE: ${p['price_discounted']}]" if p["on_sale"] else ""
    print(f"[{pid:4d}] ${str(price):<8} {name}{sale}")
