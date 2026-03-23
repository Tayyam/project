# ASIC Repair Knowledge Base — S19 Control Board (FILE 5)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## REPAIR FILE 5 — S19 Control Board

**Reference:** [Antminer S19 Hash Board Repair Guide — §VI & §VII (Zeus)](https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp) (same document as FILE 1 hashboard)

### Local mirror (offline)

- [sources/s19_hash_guide/index.html](../sources/s19_hash_guide/index.html) (scroll to **VI. Control board…** and **VII. Failure phenomenon…**)
- [manifest.json](../sources/s19_hash_guide/manifest.json) — figures §VI–§VII use images **41–48** in document order (see table below)

### Figures — control board & whole-miner (local files)

| Figure | Topic | Local file |
|--------|--------|------------|
| 6-1 | OTP / control board recovery | [16281255087210813.JPG](../sources/s19_hash_guide/images/202108/16281255087210813.JPG) |
| 6-2 | IO / chain-related hardware | [16281255507527082.JPG](../sources/s19_hash_guide/images/202108/16281255507527082.JPG) |
| 6-4 | Miner test / monitoring | [16281255876188535.JPG](../sources/s19_hash_guide/images/202108/16281255876188535.JPG) |
| 6-5 | Pool / network symptom | [16281256176355390.JPG](../sources/s19_hash_guide/images/202108/16281256176355390.JPG) |
| 6-6 | Normal miner status | [16281256719764448.jpg](../sources/s19_hash_guide/images/202108/16281256719764448.jpg) |
| 6-7 | PuTTY session open | [16281256966372007.jpg](../sources/s19_hash_guide/images/202108/16281256966372007.jpg) · [16281259808162230.jpg](../sources/s19_hash_guide/images/202108/16281259808162230.jpg) |
| 6-8 | Log / nonce / ADC commands | [16281260712654783.jpg](../sources/s19_hash_guide/images/202108/16281260712654783.jpg) |

The saved Zeus page labels **6-1**, **6-2**, then **6-4** (there is **no Figure 6-3** in the mirrored HTML).

### Local screenshot callouts — §VII figures

- **6-4** ([16281255876188535.JPG](../sources/s19_hash_guide/images/202108/16281255876188535.JPG)): Boot log — **UART 115200**; **Chain[0]** finds only **102** ASICs after **times 0–2** while **Chain[1]/[2]** show **114** → line **`Chain 0 only find 102 asic, will power off hash board 0`** (incomplete chain / hashboard fault on chain 0, not a control-only symptom by itself).
- **6-5** ([16281256176355390.JPG](../sources/s19_hash_guide/images/202108/16281256176355390.JPG)): **`WARN_NET_LOST`** → **will power off in 4 mins** if link not restored → **network lost for 5 + 4 mins, power off**; also **Lost … shares due to no stratum share response** and link-local **169.254.x.x** — treat as **upstream network / pool / DHCP**, not hashboard rework first.
- **6-8** ([16281260712654783.jpg](../sources/s19_hash_guide/images/202108/16281260712654783.jpg)): PuTTY to miner IP — login **`miner`**, password **`miner`** (per annotation); run **`tail -f /tmp/nonce.log`** (paste with **right-click** in PuTTY); sample lines show **`domain N asic[xxx]=…`** nonce counts for low-hashrate bisect (pair with **`tail -f /tmp/adc.log`** as already listed above).

### Vision model supplements (§VI–§VII figures)

Condensed vision pass for **figures 6-1 … 6-8** (mirrored order). **Verify** UART text and voltages against the JPEG and [index.html](../sources/s19_hash_guide/index.html).

**Figure 6-1** ([16281255087210813.JPG](../sources/s19_hash_guide/images/202108/16281255087210813.JPG)):
- **الموديل والإصدار:** اللوحة تحمل تسمية طراز Ctrl_C55 Vers: V2.2010.
- **رقم PCB المطبوع:** المعرف المطبوع على البورد هو AMCB07_4X1_4F_S_VER2.2.
- **وحدة المعالجة المركزية (CPU):** اللوحة تعتمد على شريحة Xilinx ZYNQ SoC.
- **ذاكرة الوصول العشوائي (DDR):** الشريحة المستخدمة من تصنيع شركة ESMT.
- **خطوط التغذية الرئيسية (Voltages):** توجد أربع نقاط فحص جهد أساسية موضحة في الصورة: 1.0V، 1.5V، 1.8V، و3.3V.
- **التخزين (NAND):** اللوحة مزودة بذاكرة فلاش من نوع NAND لتخزين نظام التشغيل (Firmware).
- **توصيلات المراوح:** توجد 4 منافذ للمراوح مرقمة من FAN1 إلى FAN4 عبر الموصلات J13، J14، J15.
- **توصيلات لوحات الهاش:** تحتوي اللوحة على 4 منافذ لنقل البيانات الخاصة بلوحات الهاش (Hash Board Connectors).
- **منفذ الشبكة:** تستخدم اللوحة محول إيثرنت (Transformer) يحمل الرمز H1601CG.
- **مدخل الطاقة:** يتم تزويد اللوحة بالطاقة عبر موصل PCIe 6-pin بجهد 12V.
- **الرقم التسلسلي (SN):** يبدأ بـ YFTC55BJJDBG039R، وتاريخ الإنتاج المذكور على الملصق يشير إلى 2020/05/01.
- **الواجهات الخارجية:** تتوفر فتحة لبطاقة SD (MicroSD Slot) ومنفذ Ethernet ومنفذ IP Report وزر Reset.

**Figure 6-2** ([16281255507527082.JPG](../sources/s19_hash_guide/images/202108/16281255507527082.JPG)):
- تحتوي اللوحة على أربعة موصلات بيانات من نوع IDC بـ 18 دبوماً (توزيع 9x2 Pins).
- يتم تحديد الموصلات برمز J؛ يظهر منها J1 و J4 بوضوح.
- توجد تسميات للقنوات في الجزء السفلي من اللوحة هي CH1، CH2، CH3.
- تتضمن اللوحة مسارات إشارة محددة بالرموز التالية: AN1، AN2، AN3، AN4، R، F.
- يحتوي كل موصل على مصفوفة من المكونات السطحية (SMD) ونقاط فحص دائرية محاطة بإطار أحمر توضيحي.
- توجد علامات قطبية (+) و (-) مطبوعة بجانب نقاط الفحص (Test Points) المرتبطة بكل موصل.
- يظهر كود تعريفي على الجانب الأيسر من اللوحة بالنص: L1D14TD.

**Figure 6-4** ([16281255876188535.JPG](../sources/s19_hash_guide/images/202108/16281255876188535.JPG)):
- معدل البود لسرعة الاتصال (UART baud) مضبوط على 115200.
- عدد رقائق ASIC المكتشفة في Chain 0 هو 102 رقاقة فقط.
- عدد رقائق ASIC المكتشفة في Chain 1 و Chain 2 هو 114 رقاقة (وهو العدد الطبيعي المستهدف لهذه اللوحات).
- يقوم النظام بإجراء 3 محاولات كشف (times 0, 1, 2) قبل اتخاذ قرار الإغلاق.
- الإجراء المتخذ عند فشل الكشف في Chain 0 هو إيقاف تشغيل اللوحة (power off hash board 0).
- إعدادات التشغيل المسجلة هي: pulse_mode = 1، ccdly_sel = 1، pwth_sel = 1.
- التردد الثابت (fixed frequency) مضبوط على القيمة 500.

**Figure 6-5** ([16281256176355390.JPG](../sources/s19_hash_guide/images/202108/16281256176355390.JPG)):
- عنوان IP المعين للواجهة eth0 هو 169.254.6.111 (عنوان Link-local)، مما يشير إلى فشل الحصول على عنوان من سيرفر DHCP.
- برنامج التعدين المستخدم هو bmminer وcgminer (الإصدار المرتبط بـ PID 9679).
- يتم تسجيل فقدان الحصص (Lost shares) بسبب عدم استجابة مجمع التعدين (pool 0).
- كود الخطأ الخاص بالشبكة هو `WARN_NET_LOST: network connection lost`.
- يقوم النظام بإيقاف التشغيل تلقائياً (power off) بعد فقدان الاتصال بالشبكة لمدة إجمالية قدرها 9 دقائق (5 + 4 دقائق).
- يوجد خطأ في قراءة سجلات ASIC (read asic reg error) في السلسلة رقم 1 (`chain = 1`).
- الشريحة التي تعاني من مشكلة القراءة هي `chip = 204`.
- القيمة المتوقعة للسجل المتعثر هي `reg = 176`.
- قيمة التحكم في المروحة (PWM) مضبوطة عند `set pwm = 62`.

**Figure 6-6** ([16281256719764448.jpg](../sources/s19_hash_guide/images/202108/16281256719764448.jpg)):
- *(No structured facts parsed.)*

**Figure 6-7** ([16281256966372007.jpg](../sources/s19_hash_guide/images/202108/16281256966372007.jpg)):
- *(No structured facts parsed.)*

**Figure 6-7** ([16281259808162230.jpg](../sources/s19_hash_guide/images/202108/16281259808162230.jpg)):
- البرنامج المستخدم لإدارة الاتصال عن بُعد هو PuTTY Configuration.
- بروتوكول الاتصال (Connection type) المعتمد في هذا الإعداد هو SSH.
- رقم المنفذ (Port) الافتراضي المستخدم للاتصال هو 22.
- يتم إدخال عنوان معرف الشبكة للجهاز في حقل (Host Name or IP address)، والمثال الموضح هو 10.77.23.206.
- خيار إغلاق النافذة عند الخروج (Close window on exit) مضبوط على Only on clean exit.
- لبدء جلسة الاتصال بعد إدخال البيانات، يجب الضغط على زر Open.

**Figure 6-8** ([16281260712654783.jpg](../sources/s19_hash_guide/images/202108/16281260712654783.jpg)):
- عنوان IP الخاص بالجهاز للوصول عن بُعد هو 10.77.23.206.
- يتم استخدام برنامج PuTTY للاتصال عبر Terminal.
- اسم المستخدم (login as) للدخول إلى النظام هو `miner`.
- كلمة المرور الافتراضية المطلوبة للدخول هي `miner`.
- اسم المضيف (Hostname) المعتمد في النظام هو `Antminer`.
- الأمر المستخدم لمراقبة سجلات النتائج في الوقت الفعلي هو `tail -f /tmp/nonce.log`.
- مسار ملف السجل (Log file) هو `/tmp/nonce.log`.
- تعرض السجلات بيانات موزعة حسب النطاق (domain) ورقم الرقاقة (asic)، مثل `asic[084]` إلى `asic[092]`.
- تنسيق الوقت في السجل يبدأ بالشهر واليوم (01-01) متبوعاً بالساعة والدقيقة والثانية.

### CRITICAL WARNING — OTP LOCK (read before touching any S19 control board)

- S19 control board has **OTP** (One-Time Programmable) memory on the MCU.
- **Trigger 1:** Sudden power loss **during** OTP initialization → board may **fail to boot** / OTP not opened.
- **Trigger 2:** Power-on to OTP completion **&lt; 30 s** → same failure mode.
- **Fix if bricked (not networked):** replace **U1** (main CPU FBGA).
- **Restriction 1:** After U1 replacement for OTP failure, that U1 **must not** be reused in **another** S19-class miner.
- **Restriction 2:** Control board with OTP **enabled** → U1 **cannot** be moved to **other model series**.
- **Rule:** Do **not** swap S19 control boards between units without confirming OTP / flash history with the owner.

**After SD card recovery (if used):**

1. When recovery succeeds, **green LED stays on** → **power off** and **restart**.
2. After power-on again, **wait ≥ 30 s** (OTP timing window).

### VI — Control board faults

**Figure 6-1 (local):** [16281255087210813.JPG](../sources/s19_hash_guide/images/202108/16281255087210813.JPG) — **Bitmain Ctrl_C55 V2.2010** photo with **DDR**, **CPU** (Zynq-class SoC under sticker), **NAND**, and **annotated rails**:

| Rail (label on photo) | Typical area (per diagram) |
|-------------------------|----------------------------|
| **1.0 V** | Near **U5**, **L1** |
| **1.5 V** | Near **U6**, **L2** |
| **1.8 V** | Near **U7**, **L3** |
| **3.3 V** | Near **U8**, **L4** |

Use these when the miner is dead or flaky before swapping **U1**.

**Figure 6-2 (local):** [16281255507527082.JPG](../sources/s19_hash_guide/images/202108/16281255507527082.JPG) — hash board **IO headers** (**J1** … **J4** style **2×10** shrouded) with **SMD rows + round TPs** above each connector (red boxes in source) — primary area for **cold joints / missing passives** on data and control lines.

**1) Whole miner does not operate**

- Check the **rails above** on the control board. If **3.3 V** is shorted: disconnect **U8** first; if still shorted, **remove CPU** and re-measure. Other rail faults → usually replace the corresponding **DC–DC / converter** IC (**U5–U8** family per Figure 6-1).
- If voltages OK → inspect **DDR** and **CPU** soldering.
- Try **SD card** flash recovery for control board.

**2) Cannot find IP**

- Often tied to abnormal operation above — troubleshoot **(1)** first.
- Inspect **Ethernet port**, **magnetics / transformer T1**, and **CPU** solder.

**3) Whole miner cannot upgrade**

- Same focus: **Ethernet port**, **T1**, **CPU** soldering.

**4) Miner does not read hash boards / missing chains**

- **A.** Hashboard ↔ control **cables** seated and good.
- **B.** Control board **per-chain** parts (see **Figure 6-2**).
- **C.** **Wave solder** on **IO connector** pins and nearby **resistors**.

### VII — Whole-miner failure phenomena

1. **Fan display wrong** — verify fans spin, cables to control board, then suspect control board.
2. **Missing one chain (of three)** — usually **hashboard ↔ control** link; check **data cable** for open. If cables OK: run **single-board PT2**; if PT2 passes, fault likely **control board**; if PT2 fails, repair hashboard per FILE 1.
3. **Abnormal temperature** — PCB limit **90 °C** in monitoring; causes: **ambient**, **fan** faults, or false alarms from fans.
4. **Partial hashrate (e.g. 2/3 or 1/3)** — incomplete chip count: use **hashboard tester / PT2** flow (FILE 1).
5. **Hashing stops / pool disconnects after runtime** — check **network** upstream of miner.
6. **One hashboard low hashrate** — use **PuTTY** (SSH) to miner IP and watch **nonce** and **domain voltage** logs (see commands below).

### PuTTY — nonce and domain voltage

- **NONCE log:** `tail -f /tmp/nonce.log`
- **Domain voltage (ADC) log:** `tail -f /tmp/adc.log`

Use abnormal entries in the log to guide measurements on the **suspected hashboard** (FILE 1).

### Checklist Before Starting

- [ ] OTP / prior flash history confirmed with owner
- [ ] USB–TTL (UART) available
- [ ] PuTTY or SSH client ready
- [ ] LDO / PMIC spares for control board rails
- [ ] Fine soldering tip + microscope
- [ ] Ethernet cable + laptop for link/IP tests
- [ ] All **4 fans** confirmed before blaming control board
