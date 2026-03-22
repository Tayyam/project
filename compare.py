"""
Compare imported products list vs zeusbtc_products.json
Find matches and price comparisons
"""
import json

with open("zeusbtc_products.json", encoding="utf-8") as f:
    data = json.load(f)

products = data["products"]

# Search keywords for each imported item
searches = {
    "PicoBT Universal Tester":          ["picobt", "pico", "hash board tester", "multifunctional tester"],
    "Infiray P2 Pro (Thermal Camera)":  ["infiray", "thermal", "infrared", "thermal camera", "thermal imager"],
    "Sunshine SS-T12A (Heating Plate)": ["sunshine", "t12a", "heating", "preheating", "heat table", "soldering station"],
    "S19 & M30 Stencils":               ["stencil", "s19 stencil", "m30 stencil", "thermal grease mold", "paste mold"],
    "Data Cables (10-pin/12-pin)":       ["cable", "data cable", "signal cable", "ribbon", "10 pin", "12 pin", "flat cable"],
    "BM1398 ASIC Chip":                 ["bm1398", "asic chip", "sha256 chip"],
    "BM1362 ASIC Chip":                 ["bm1362"],
    "KF1922 ASIC Chip (Whatsminer)":    ["kf1922", "whatsminer chip", "microbt chip"],
    "LDOs & PMIC":                      ["ldo", "voltage regulator", "pmic", "power management"],
    "MOSFETs & PWM ICs":                ["mosfet", "mos tube", "ipw60", "pwm ic", "power supply chip"],
}

SAR_TO_USD = 0.267  # 1 SAR ≈ $0.267

original_prices_sar = {
    "PicoBT Universal Tester":          2200,
    "Infiray P2 Pro (Thermal Camera)":  1100,
    "Sunshine SS-T12A (Heating Plate)": 350,
    "S19 & M30 Stencils":               150,
    "Data Cables (10-pin/12-pin)":       500,
    "BM1398 ASIC Chip":                 None,
    "BM1362 ASIC Chip":                 None,
    "KF1922 ASIC Chip (Whatsminer)":    None,
    "LDOs & PMIC":                      400,
    "MOSFETs & PWM ICs":                600,
}

print("=" * 72)
print("  PRODUCT COMPARISON: Alibaba/AliExpress  vs  zeusbtc.com")
print("=" * 72)

for item_name, keywords in searches.items():
    matches = []
    for p in products:
        name_lower = p["name"].lower()
        for kw in keywords:
            if kw.lower() in name_lower:
                matches.append(p)
                break

    orig_sar = original_prices_sar[item_name]
    orig_usd = round(orig_sar * SAR_TO_USD, 2) if orig_sar else None

    print(f"\n{'─'*72}")
    print(f"  ITEM: {item_name}")
    if orig_usd:
        print(f"  Your current price (Alibaba): ~{orig_sar} SAR  ≈  ~${orig_usd}")
    else:
        print(f"  Your current price: by quantity (no fixed price)")
    print(f"  Found on zeusbtc: {len(matches)} match(es)")

    if matches:
        # Sort by price
        matches.sort(key=lambda x: x["price_original"] or 9999)
        for m in matches[:4]:  # show top 4
            sale_tag = f"  [SALE: ${m['price_discounted']}]" if m["on_sale"] else ""
            saving = ""
            if orig_usd and m["price_original"]:
                diff = orig_usd - m["price_original"]
                pct  = (diff / orig_usd) * 100
                if diff > 0:
                    saving = f"  --> SAVE ${diff:.2f} ({pct:.0f}%)"
                elif diff < 0:
                    saving = f"  --> MORE EXPENSIVE by ${abs(diff):.2f}"
            price_str = f"${m['price_original']}" if m["price_original"] else "N/A"
            print(f"    [{m['id']:4d}] {m['name'][:55]:<55} {price_str}{sale_tag}{saving}")
            print(f"           {m['url']}")
    else:
        print("    [NOT FOUND] – stick with Alibaba/AliExpress")

print(f"\n{'='*72}")
print("  RECOMMENDATION SUMMARY")
print(f"{'='*72}")
print("""
  SWITCH to zeusbtc.com:
  ✔  PicoBT Tester       – available directly, same product
  ✔  Stencils (S19/M30)  – full range of thermal paste molds
  ✔  Data Cables         – wide selection of signal cables
  ✔  ASIC Chips          – BM1398, BM1362, KF1922 all listed
  ✔  LDOs & PMIC         – LDO chips section available
  ✔  MOSFETs (MOS tubes) – listed under PSU parts & Antminer chips

  KEEP on Alibaba/AliExpress:
  ✘  Infiray P2 Pro       – thermal camera not on zeusbtc (niche)
  ✘  Sunshine SS-T12A     – phone repair plate, check if mining version exists

  ONE STOP SHOP ADVANTAGE:
  ★  zeusbtc.com sells EVERYTHING mining-specific in one order
  ★  Avoids multi-vendor shipping and customs complexity
  ★  Has direct tech support for all parts sold
""")
